import { getAllTags } from "@/utils/getPosts";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default async function Tags() {
  noStore();
  const tags = await getAllTags();
  return (
    <>
      {tags.map((tag) => (
        <a
          className="mb-2 mr-5 mt-2"
          href={`/tags/${tag.slug}`}
          key={"tags-" + tag.id}
        >
          <span className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            {tag.slug}
          </span>
          <span
            className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
            aria-label="View posts tagged next-js"
          >
            {" "}
            ({tag.count})
          </span>
        </a>
      ))}
    </>
  );
}
