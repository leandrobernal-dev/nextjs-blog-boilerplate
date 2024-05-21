import About from "@/app/about/About";
import { PostSkeleton } from "@/components/PostSkeleton";
import { SITE } from "@/config/config";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "About | " + SITE.title,
  };
}

export default async function AboutPage() {
  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <img
              alt="avatar"
              loading="lazy"
              width="192"
              height="192"
              decoding="async"
              data-nimg="1"
              className="h-48 w-48 rounded-full bg-transparent"
              src="/logo.png"
            />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              {SITE.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              {SITE.author_title}
            </div>
            <div className="flex space-x-3 pt-6">
              <Link
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:address@yoursite.com"
              >
                <span className="sr-only">mail</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="h-8 w-8 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400"
                >
                  <title>Mail</title>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </Link>
              <Link
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={SITE.github}
              >
                <span className="sr-only">github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400"
                >
                  <title>Github</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </Link>
            </div>
          </div>
          <article className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <Suspense fallback={<PostSkeleton />}>
              <About />
            </Suspense>
          </article>
        </div>
      </div>
    </main>
  );
}
