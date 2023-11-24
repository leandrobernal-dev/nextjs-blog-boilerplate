import getPosts from "@/utils/getPosts";
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
  const queryResult = await getPosts(query);
  const post = queryResult.post;

  return (
    <>
      <h1
        className="mb-8 text-2xl font-black"
        dangerouslySetInnerHTML={{ __html: post.title }}
      ></h1>

      {post.featuredImage && (
        <img src={post.featuredImage.node.mediaItemUrl} alt="" />
      )}

      <div
        className=" w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </>
  );
}
