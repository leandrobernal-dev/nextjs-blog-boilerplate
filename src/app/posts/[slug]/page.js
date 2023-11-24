import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { SITE } from "@/config/config";
import getPosts from "@/utils/getPosts";

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;
  const query = {
    query: `
          {
            post(id: "/${slug}", idType: SLUG) {
              title
              content
            }
          }
        `,
  };
  const queryResult = await getPosts(query);
  const post = queryResult.post;

  if (!post) {
    notFound();
  }

  return {
    title: post.title + " | " + SITE.title,
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
            }
          }
        `,
  };

  const queryResult = await getPosts(query);
  const post = queryResult.post;

  return (
    <>
      <header>
        <h1 className="mb-2 text-4xl font-black">{post.title}</h1>
      </header>
      <p className="mb-8 flex items-center gap-2 text-sm italic text-zinc-400">
        <Calendar />{" "}
        {new Date(post.date).toLocaleDateString("en-us", {
          month: "long",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <article className="prose prose-zinc dark:prose-invert">
        <section dangerouslySetInnerHTML={{ __html: post.content }}></section>
      </article>
    </>
  );
}
