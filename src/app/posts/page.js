import TagsComponent from "@/app/posts/TagsComponent";
import PostsPage from "@/app/posts/components/PostsPage";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Suspense } from "react";

export default async function Posts({ params }) {
  return (
    <main className="mb-auto">
      <div className="flex sm:space-x-24">
        <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
          <div className="px-6 py-4">
            <a
              className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-500"
              href="/posts"
            >
              All Posts
            </a>
            <Suspense
              fallback={
                <div className="m-4 grid h-24 w-full grid-rows-3 gap-2">
                  <Skeleton className="h-full w-full" />
                  <Skeleton className="h-full w-full" />
                  <Skeleton className="h-full w-full" />
                </div>
              }
            >
              <TagsComponent params={params} />
            </Suspense>
          </div>
        </div>
        <PostsPage />
      </div>
    </main>
  );
}
