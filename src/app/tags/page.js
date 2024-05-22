import Tags from "@/app/tags/components/Tags";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default async function TagsPage() {
  return (
    <main className="mb-auto">
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          <Suspense
            fallback={
              <div className="m-4 grid h-5 w-32 grid-cols-3 gap-2">
                <Skeleton className="h-full w-full" />
                <Skeleton className="h-full w-full" />
                <Skeleton className="h-full w-full" />
              </div>
            }
          >
            <Tags />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
