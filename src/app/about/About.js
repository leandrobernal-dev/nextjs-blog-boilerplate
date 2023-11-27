import getPosts from "@/utils/getPosts";
import HTMLReactParser from "html-react-parser";
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
      <h1 className="mb-8 text-2xl font-black">
        {HTMLReactParser(post.title)}
      </h1>

      {post.featuredImage && (
        <img src={post.featuredImage.node.mediaItemUrl} alt="" />
      )}

      <div className="prose prose-invert max-w-none">
        {HTMLReactParser(post.content)}
      </div>
    </>
  );
}
