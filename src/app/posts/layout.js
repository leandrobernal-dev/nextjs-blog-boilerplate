import { SITE } from "@/config/config";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Posts | " + SITE.title,
  };
}

export default async function PostsLayout({ params, children }) {
  return children;
}
