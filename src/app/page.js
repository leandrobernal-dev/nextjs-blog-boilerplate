import { SOCIALS } from "@/config/config";

import SocialLinks from "@/components/SocialLinks";
import { Suspense } from "react";
import { PostSkeleton } from "@/components/PostSkeleton";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-2 py-2">
        <h1 className="text-xl font-bold">hey, it's lei 👋</h1>
        <p className="text-sm">
          I'm a full stack wizard weaving digital magic! From crafting slick
          interfaces to building rock-solid functionality, I've got you covered.
          When I'm not coding, you might find me tinkering with robots or diving
          into epic anime worlds for inspiration. My passion for robotics fuels
          my creativity, while my love for anime infuses a unique flair into my
          coding adventures. Join me on this journey through tech and
          imagination!
        </p>

        <div>
          {SOCIALS.length > 0 && (
            <p>
              <span className="">Social Links:</span>
              <span className="flex justify-start gap-2 ">
                <SocialLinks />
              </span>
            </p>
          )}
        </div>
      </section>

      <hr className="my-4" />

      <section className="py-2">
        <h2 className="pb-6 text-3xl">Featured</h2>
        <Suspense fallback={<PostSkeleton />}>
          <Posts category={"featured"} />
        </Suspense>
      </section>

      <hr className="my-8 " />

      <section className="py-2">
        <h2 className="pb-6 text-3xl">Recent</h2>
        <Suspense fallback={<PostSkeleton />}>
          <Posts category={"recent"} />
        </Suspense>
      </section>
    </>
  );
}
