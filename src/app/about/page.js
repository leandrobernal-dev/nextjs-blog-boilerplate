import About from "@/app/about/About";
import { PostSkeleton } from "@/components/PostSkeleton";
import { SITE } from "@/config/config";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "About | " + SITE.title,
  };
}

export default async function AboutPage() {
  return (
    <article>
      <Suspense fallback={<PostSkeleton />}>
        <About />
      </Suspense>
    </article>
  );
}
