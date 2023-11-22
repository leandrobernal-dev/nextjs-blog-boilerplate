// TODO: GET BLOGS FROM DATABASE AND RETURN HERE

import { SITE } from "@/config/config";

export default function sitemap() {
  let routes = ["", "/posts", "/search"].map((route) => ({
    url: `${SITE.website}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}

// import { getBlogPosts } from 'app/db/blog';

// export default async function sitemap() {
//   let blogs = getBlogPosts().map((post) => ({
//     url: `https://leerob.io/blog/${post.slug}`,
//     lastModified: post.metadata.publishedAt,
//   }));

//   let routes = ['', '/blog', '/guestbook', '/uses', '/work'].map((route) => ({
//     url: `https://leerob.io${route}`,
//     lastModified: new Date().toISOString().split('T')[0],
//   }));

//   return [...routes, ...blogs];
// }
