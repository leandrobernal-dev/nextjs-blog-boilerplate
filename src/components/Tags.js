export default function Tags({ tags }) {
  return (
    <section className="my-4 w-full ">
      <span>Tags:</span>
      <div className="flex gap-1 text-orange-500">
        {tags.map((tag) => (
          <span className="rounded-md bg-slate-800 p-2" key={"tags-" + tag.id}>
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  );
}
