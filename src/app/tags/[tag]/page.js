import { PostElements } from "@/components/Posts";
import getPost from "@/utils/getPosts";

export default async function TagPage({ params }) {
  const query = {
    query: `
          {
            posts(where: {tagSlugIn: "${params.tag}"})  {
              nodes {
                id
                slug
                title
                date
                excerpt
                tags {
                  nodes {
                    id
                    name
                    slug
                  }
                }
              }
            }
          }
        `,
  };
  const posts = await getPost(query);

  return <PostElements posts={posts.posts.nodes} />;
}
