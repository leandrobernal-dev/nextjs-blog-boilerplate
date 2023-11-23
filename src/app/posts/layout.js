export const dynamic = "force-dynamic";

import { SITE } from "@/config/config";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Posts | " + SITE.title,
  };
}

export default function PostsLayout({ children }) {
  return children;
}
