import Content from "@/models/Content";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { content, title, description, slug, featured } = await req.json();

  const post = new Post({
    title,
    description,
    slug,
    featured,
  });
  const newContent = new Content({
    post,
    content,
  });
  await post.save();
  await newContent.save();
  return NextResponse.json({ msg: "success", post, newContent, featured });
};
