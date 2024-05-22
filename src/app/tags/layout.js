import { SITE } from "@/config/config";

export async function generateMetadata() {
  return {
    title: "Tags | " + SITE.title,
  };
}

export default function TagsLayout({ children }) {
  return children;
}
