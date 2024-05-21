"use client";

import HTMLReactParser from "html-react-parser";

export default function Article({ content }) {
  return (
    <article className="prose prose-gray dark:prose-invert prose-img:w-full prose-img:max-w-2xl dark:prose-headings:text-primary-500">
      {HTMLReactParser(content)}
    </article>
  );
}
