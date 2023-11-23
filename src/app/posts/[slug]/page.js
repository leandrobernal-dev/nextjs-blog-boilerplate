import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import axios from "axios";
import { SITE } from "@/config/config";

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
  const post = await axios
    .post(process.env.GRAPHQL_URI, query)
    .then(({ data }) => {
      return data.data.post;
    });

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
  const post = await axios
    .post(process.env.GRAPHQL_URI, query)
    .then(({ data }) => {
      return data.data.post;
    });

  return (
    <article className="prose prose-zinc dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="flex items-center gap-2 text-sm italic text-zinc-400">
        <Calendar />{" "}
        {new Date(post.date).toLocaleDateString("en-us", {
          month: "long",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      <section dangerouslySetInnerHTML={{ __html: post.content }}></section>
    </article>
  );
}
