"use client";

import HTMLReactParser from "html-react-parser";

export default function Article({ content }) {
  return (
    <article className="sm:prose-img:w-[80%] md:prose-img:w-[70%] lg:prose-img:w-1/2">
      {HTMLReactParser(content)}
    </article>
  );
}
