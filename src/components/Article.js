"use client";

import HTMLReactParser from "html-react-parser";

export default function Article({ content }) {
  return (
    <article className="prose dark:prose-invert prose-img:w-full prose-img:max-w-2xl">
      {HTMLReactParser(content)}
    </article>
  );
}
