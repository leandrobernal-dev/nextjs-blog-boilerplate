import { PostSkeleton } from "@/components/PostSkeleton";
import Posts from "@/components/Posts";
import { Suspense } from "react";

export default function PostsPage({ page }) {
  return (
    <div>
      <Suspense fallback={<PostSkeleton />}>
        <Posts  paginate={true} page={page} />
      </Suspense>
    </div>
  );
}
