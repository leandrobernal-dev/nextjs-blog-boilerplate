import { SITE } from "@/config/config";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Search | " + SITE.title,
  };
}

export default function SearchLayout({ children }) {
  return children;
}
