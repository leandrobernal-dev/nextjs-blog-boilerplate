export const dynamic = "force-dynamic";

import { SITE } from "@/config/config";
import getPosts, { getAllTags } from "@/utils/getPosts";

export default async function sitemap() {
  const query = {
    query: `
            {
              posts {
                nodes {
                  id
                  slug
                  date
                }
              }
            }
        `,
  };
  const postResult = await getPosts(query);
  const posts = postResult.posts.nodes;
  const allTags = await getAllTags();

  let blogPosts = posts.map((post) => ({
    url: `${process.env.DOMAIN_NAME}posts/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  let routes = ["", "posts", "search", "about", "tags"].map((route) => ({
    url: `${process.env.DOMAIN_NAME}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let tags = allTags.map((tag) => ({
    url: `${process.env.DOMAIN_NAME}tags/${tag.slug}`,
  }));

  return [...routes, ...blogPosts, ...tags];
}
