import { Calendar } from "lucide-react";

export default function Header({ post }) {
  return (
    <header>
      <h1 className="mb-2 text-4xl font-black">{post.title}</h1>
      <section className="mb-8 flex items-center gap-2 text-sm italic text-zinc-400">
        <Calendar />{" "}
        {new Date(post.date).toLocaleDateString("en-us", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })}
      </section>
    </header>
  );
}
