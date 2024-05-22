import { notFound } from "next/navigation";
import { SITE } from "@/config/config";
import getPosts from "@/utils/getPosts";
import Article from "@/components/Article";
import Tags from "@/components/Tags";
import Header from "@/components/Header";
import getPost from "@/utils/getPosts";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;
  const query = {
    query: `
          {
            post(id: "/${slug}", idType: SLUG) {
              title
              content
              excerpt
              tags {
                nodes {
                  name
                  id
                  slug
                }
              }
            }
          }
        `,
  };
  const queryResult = await getPosts(query);
  const post = queryResult.post;
  const tags = post.tags.nodes.map((tag) => tag.name);

  if (!post) {
    notFound();
  }

  return {
    title: post.title + " | " + SITE.title,
    description: String(post.excerpt).replace(/<\/?p>/g, ""),
    keywords: tags,
  };
}

export default async function BlogPage({ params }) {
  const slug = params.slug;
  const query = {
    query: `
          {
            post(id: "/${slug}", idType: SLUG) {
              title
              content
              date
              tags {
                nodes {
                  name
                  id
                  slug
                }
              }
            }
          }
        `,
  };

  const queryResult = await getPost(query);
  const post = queryResult.post;

  return (
    <main className="mb-auto">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <article>
          <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-us", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                          weekday: "long",
                        })}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    {post.title}
                  </h1>
                </div>
              </div>
            </header>
            <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
              <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    <li className="flex items-center space-x-2">
                      <img
                        alt="avatar"
                        loading="lazy"
                        width="38"
                        height="38"
                        decoding="async"
                        data-nimg="1"
                        className="h-10 w-10 rounded-full"
                        src="/logo.png"
                      />
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">
                          {SITE.author}
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <Article content={post.content} />
              </div>
              <footer>
                <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {post.tags.nodes.map((tag) => (
                        <Link
                          key={tag.id}
                          className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          href={"/tags/" + tag.slug}
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Previous Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href="/blog/new-features-in-v1">
                          New features in v1
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 xl:pt-8">
                  <Link
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="Back to the posts"
                    href="/posts"
                  >
                    ← Back to the posts
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
