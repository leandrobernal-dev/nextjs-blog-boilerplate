"use client";

import HTMLReactParser from "html-react-parser";

export default function Article({ content }) {
  return (
    <div className="prose prose-gray max-w-none pb-8 pt-10 dark:prose-invert prose-img:w-full  dark:prose-headings:text-primary-500">
      {HTMLReactParser(content)}
    </div>
  );
}
