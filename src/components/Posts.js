import { unstable_noStore as noStore } from "next/cache";

import axios from "axios";

import { Calendar } from "lucide-react";
import Link from "next/link";

const PostElements = ({ posts }) => {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li className="flex flex-col gap-2" key={"featured" + post.id}>
          <Link href={`/posts/${post.slug}`}>
            <h2 className="text-xl text-orange-500">{post.title}</h2>
          </Link>
          <p className="flex items-center gap-2 text-sm italic text-zinc-400">
            <Calendar />

            {new Date(post.date).toLocaleDateString("en-us", {
              month: "long",
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
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
              posts(where: {search: "${searchQuery}", categoryName: "posts"})  {
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
    posts = await axios
      .post(process.env.GRAPHQL_URI, query)
      .then(({ data }) => {
        return data.data.posts.nodes;
      });

    return (
      <>
        <p className="py-4">
          Found {posts.length} results for '{searchQuery}'{" "}
        </p>

        <PostElements posts={posts} />
      </>
    );
  }

  switch (category) {
    case "all":
      query = {
        query: `
              {
                posts(where: {categoryName: "posts"}) {
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

      posts = await axios
        .post(process.env.GRAPHQL_URI, query)
        .then(({ data }) => {
          return data.data.posts.nodes;
        });
      break;
    case "featured":
      query = {
        query: `
              {
                posts(where: {categoryName: "featured"}) {
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

      posts = await axios
        .post(process.env.GRAPHQL_URI, query)
        .then(({ data }) => {
          return data.data.posts.nodes;
        });
      break;
    case "recent":
      query = {
        query: `
              {
                posts(where: {categoryName: "posts", dateQuery: {month: ${
                  new Date().getMonth() + 1
                }, year: ${new Date().getFullYear()}}}) {
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

      posts = await axios
        .post(process.env.GRAPHQL_URI, query)
        .then(({ data }) => {
          return data.data.posts.nodes;
        });
      break;
  }

  return <PostElements posts={posts} />;
}
