import { Suspense } from "react";
import { PostSkeleton } from "@/components/PostSkeleton";
import Posts from "@/components/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-5xl font-bold">Latest</h1>
          <p className="text-lg text-gray-400">
            I'm a full stack wizard weaving digital magic! From crafting slick
            interfaces to building rock-solid functionality, I've got you
            covered. When I'm not coding, you might find me tinkering with
            robots or diving into epic anime worlds for inspiration. My passion
            for robotics fuels my creativity, while my love for anime infuses a
            unique flair into my coding adventures. Join me on this journey
            through tech and imagination!
          </p>
        </div>

        <section className="py-2">
          <Suspense fallback={<PostSkeleton />}>
            <Posts category={"all"} />
          </Suspense>
        </section>
      </div>
      <div className="flex justify-end text-base font-medium leading-6">
        <a
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="All posts"
          href="/posts"
        >
          All Posts →
        </a>
      </div>
    </main>
  );
}
