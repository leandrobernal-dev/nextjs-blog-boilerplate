import { PostSkeleton } from "@/components/PostSkeleton";
import Posts from "@/components/Posts";
import { Suspense } from "react";

export default function PostsPage({ page }) {
  return (
    <div className="mb-auto">
      <Suspense fallback={<PostSkeleton />}>
        <Posts paginate={true} page={page} />
      </Suspense>
    </div>
  );
}
