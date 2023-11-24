import { PostSkeleton } from "@/components/PostSkeleton";
import Posts from "@/components/Posts";
import { headers } from "next/headers";
import { Suspense } from "react";

export default function PostsPage(req) {
  const headerList = headers();
  const ip = headerList.get("x-forwarded-for");
  return (
    <div>
      <h1 className="pb-4 text-3xl font-bold">Posts</h1>

      <Suspense fallback={<PostSkeleton />}>
        <Posts category={"all"} />
      </Suspense>
    </div>
  );
}
