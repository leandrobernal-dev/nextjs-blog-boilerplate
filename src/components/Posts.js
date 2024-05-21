import { unstable_noStore as noStore } from "next/cache";

import Link from "next/link";
import HTMLReactParser from "html-react-parser";
import getPost, { getPosts, getTotalPostsCount } from "@/utils/getPosts";
import { SITE } from "@/config/config";

export const PostElements = ({ posts, paginate, totalPostCount, page = 1 }) => {
  const totalPages = Math.ceil(totalPostCount / SITE.postPerPage);
  return (
    <div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post) => (
          <li className="py-12" key={post.id}>
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-us", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          className="text-gray-900 dark:text-gray-100"
                          href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {post.tags.nodes.map((tag) => (
                          <Link
                            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href={"/tags/" + tag.slug}
                            key={tag.id}
                          >
                            {tag.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      <div>{HTMLReactParser(post.excerpt)}</div>
                    </div>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={post.title}
                      href={"/posts/" + post.slug}
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      {paginate && (
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <nav className="flex justify-between">
            <Link
              rel="next"
              href={`/posts/page/${Number(page) - 1}`}
              className={
                page - 1 === 0
                  ? "pointer-events-none select-none text-gray-500"
                  : ""
              }
            >
              Previous
            </Link>
            <span>
              {page}{" "}
              {totalPostCount > SITE.postPerPage ? "of " + totalPages : ""}
            </span>
            <Link
              rel="next"
              href={`/posts/page/${Number(page) + 1}`}
              className={
                page >= totalPages
                  ? "pointer-events-none select-none text-gray-500"
                  : ""
              }
            >
              Next
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default async function Posts({
  searchQuery,
  page = 1,
  paginate = false,
}) {
  noStore();

  // await new Promise((resolve) => setTimeout(resolve, 30000)); // Simulate slow data fetching

  let posts;
  let query;
  // Return posts for search
  if (searchQuery) {
    query = {
      query: `
            {
              posts(where: {search: "${searchQuery}"})  {
                nodes {
                  id
                  slug
                  title
                  date
                  excerpt
                  tags {
                    nodes {
                      id
                      name
                      slug
                    }
                  }
                }
              }
            }
          `,
    };
    let result = await getPost(query);
    posts = result.posts.nodes;

    return (
      <>
        <p className="py-4">
          Found {posts.length} results for '{searchQuery}'{" "}
        </p>

        <PostElements posts={posts} />
      </>
    );
  }

  posts = await getPosts(page);
  const totalPostCount = await getTotalPostsCount();

  return (
    <PostElements
      posts={posts}
      paginate={paginate}
      totalPostCount={totalPostCount}
      page={page}
    />
  );
}
