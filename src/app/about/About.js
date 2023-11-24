import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";

export default async function About() {
  noStore();
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
    <>
      <h1
        className="mb-8 text-2xl font-black"
        dangerouslySetInnerHTML={{ __html: post.title }}
      ></h1>
      <img src={post.featuredImage.node.mediaItemUrl} alt="" />

      <div
        className=" w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </>
  );
}
