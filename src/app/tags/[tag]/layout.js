import Link from "next/link";

export default async function TagPage({ params, children }) {
  const tags = await getAllTags();

  return (
    <main className="mb-auto">
      <div className="flex sm:space-x-24">
        <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
          <div className="px-6 py-4">
            <a
              className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
              href="/posts"
            >
              All Posts
            </a>
            <ul>
              {tags.map((tag) => {
                return tag.slug === params.tag ? (
                  <li className="my-3">
                    <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                      {`${tag.slug}(${tag.count})`}
                    </h3>
                  </li>
                ) : (
                  <li className="my-3">
                    <Link
                      className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                      aria-label="View posts tagged guide"
                      href={"/tags/" + tag.slug}
                    >
                      {`${tag.slug}(${tag.count})`}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
