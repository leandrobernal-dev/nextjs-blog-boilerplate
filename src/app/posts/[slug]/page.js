import Content from "@/models/Content";
import Post from "@/models/Post";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Calendar } from "lucide-react";

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;
  const post = await Post.findOne({ slug });

  if (!post) {
    notFound();
  }
  return {
    title: post.title,
  };
}

export default async function BlogPage({ params }) {
  const slug = params.slug;

  const post = await Post.findOne({ slug }).populate({
    path: "content",
    model: Content,
  });

  return (
    <article className="prose prose-zinc dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="flex items-center gap-2 text-sm italic text-zinc-400">
        <Calendar /> {"September 23, 2022 |  at 03:22 PM"}
      </p>
      <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {post.content[0].content}
      </Markdown>
    </article>
  );
}
