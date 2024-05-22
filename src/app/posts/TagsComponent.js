import { getAllTags } from "@/utils/getPosts";
import Link from "next/link";

export default async function TagsComponent({ params }) {
  const tags = await getAllTags();

  return (
    <ul>
      {tags.map((tag) => {
        return tag.slug === params.tag ? (
          <li className="my-3" key={tag.id}>
            <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
              {`${tag.slug}(${tag.count})`}
            </h3>
          </li>
        ) : (
          <li className="my-3" key={tag.id}>
            <a
              className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
              aria-label="View posts tagged guide"
              href={"/tags/" + tag.slug}
            >
              {`${tag.slug}(${tag.count})`}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
