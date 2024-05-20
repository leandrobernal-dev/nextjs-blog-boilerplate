import { PostSkeleton } from "@/components/PostSkeleton";
import Posts from "@/components/Posts";
import { Suspense } from "react";

export default function PostsPage() {
  return (
    <div>
      <Suspense fallback={<PostSkeleton />}>
        <Posts category={"all"} />
      </Suspense>
    </div>
  );
}
