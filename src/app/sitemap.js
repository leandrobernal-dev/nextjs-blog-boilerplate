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
    url: `${SITE.website}${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  let routes = ["", "posts", "search", "about", "tags"].map((route) => ({
    url: `${SITE.website}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let tags = allTags.map((tag) => ({
    url: `${SITE.website}tags/${tag.slug}`,
  }));

  return [...routes, ...blogPosts, ...tags];
}
