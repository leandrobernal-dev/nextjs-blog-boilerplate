"use client";

import HTMLReactParser from "html-react-parser";

export default function Article({ content }) {
  return (
    <article className="prose max-w-none prose-pre:prose-slate dark:prose-invert prose-code:text-orange-500 ">
      {HTMLReactParser(content)}
    </article>
  );
}
