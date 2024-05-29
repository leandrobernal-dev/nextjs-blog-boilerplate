import { PostSkeleton } from "@/components/PostSkeleton";
import Posts from "@/components/Posts";
import Search from "@/components/Search";
import { SITE } from "@/config/config";
import { Suspense } from "react";

export async function generateMetadata(req) {
  const searchQuery = req.searchParams.q || "";
  return {
    title: `Search${searchQuery ? " - " : ""}${searchQuery} | ${SITE.title}`,
  };
}

export default function SearchPage(req) {
  const searchQuery = req.searchParams.q || "";

  return (
    <main className="mb-auto">
      <h1 className="pb-8 text-2xl">Search</h1>
      <Search searchQuery={searchQuery}>
        {searchQuery.length > 1 && (
          <Suspense fallback={<PostSkeleton />}>
            <Posts searchQuery={searchQuery} />
          </Suspense>
        )}
      </Search>
    </main>
  );
}
