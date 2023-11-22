import { SITE } from "@/config/config";
import Post from "@/models/Post";

export default async function sitemap() {
  let posts = await Post.find();

  let blogPosts = posts.map((post) => ({
    url: `${SITE.website}${post.slug}`,
    lastModified: post.createdAt,
  }));

  let routes = ["", "posts", "search", "about"].map((route) => ({
    url: `${SITE.website}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogPosts];
}
