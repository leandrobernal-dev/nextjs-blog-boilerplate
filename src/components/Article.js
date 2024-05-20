"use client";

import HTMLReactParser from "html-react-parser";

export default function Article({ content }) {
  return <article>{HTMLReactParser(content)}</article>;
}
