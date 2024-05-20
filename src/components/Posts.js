import { unstable_noStore as noStore } from "next/cache";

import getPosts from "@/utils/getPosts";
import Link from "next/link";
import HTMLReactParser from "html-react-parser";

const PostElements = ({ posts }) => {
  console.log(posts);
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.map((post) => (
        <li className="py-12">
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
                      <a
                        className="text-gray-900 dark:text-gray-100"
                        href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                      >
                        {post.title}
                      </a>
                    </h2>
                    <div className="flex flex-wrap">
                      {post.tags.nodes.map((tag) => (
                        <Link
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                          href={"/tags/" + tag.name}
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
                  <a
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label='Read more: "Release of Tailwind Nextjs Starter Blog v2.0"'
                    href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default async function Posts({ category, searchQuery }) {
  noStore();

  // await new Promise((resolve) => setTimeout(resolve, 30000)); // Simulate slow data fetching

  let posts;
  let query;

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
                }
              }
            }
          `,
    };
    let result = await getPosts(query);
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

  query = {
    query: `
          {
            posts(first: 5) {
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
                  }
                }
              }
            }
          }
    
        `,
  };

  let result = await getPosts(query);
  posts = result.posts.nodes;

  return <PostElements posts={posts} />;
}
