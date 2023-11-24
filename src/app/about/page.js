import { SITE } from "@/config/config";
import axios from "axios";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "About | " + SITE.title,
  };
}

export default async function AboutPage() {
  const query = {
    query: `
          {
            post(id: "/about", idType: SLUG) {
              title
              content
              featuredImage {
                node {
                  mediaItemUrl
                  altText
                }
              }
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
    <article>
      <h1
        className="mb-8 text-2xl font-black"
        dangerouslySetInnerHTML={{ __html: post.title }}
      ></h1>
      <img src={post.featuredImage.node.mediaItemUrl} alt="" />

      <div
        className=" w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </article>
  );
}
