export const dynamic = "force-dynamic";

import { SITE } from "@/config/config";
import axios from "axios";

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
  const posts = await axios
    .post(process.env.GRAPHQL_URI, query)
    .then(({ data }) => {
      return data.data.posts.nodes;
    });

  let blogPosts = posts.map((post) => ({
    url: `${SITE.website}${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  let routes = ["", "posts", "search", "about"].map((route) => ({
    url: `${SITE.website}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogPosts];
}
