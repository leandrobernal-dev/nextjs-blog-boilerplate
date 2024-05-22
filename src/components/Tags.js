import Link from "next/link";

export default function Tags({ tags }) {
  return (
    <section className="my-4 flex w-full items-center gap-1">
      <h4 className="font-medium">Tags:</h4>
      <div className="flex gap-1 text-orange-500">
        {tags.map((tag) => (
          <a
            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href={"/tags/" + tag.slug}
            key={tag.id}
          >
            {tag.name}
          </a>
        ))}
      </div>
    </section>
  );
}
