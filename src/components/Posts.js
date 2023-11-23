import dbConnect from "@/db/database";
import Content from "@/models/Content";
import Post from "@/models/Post";

import { Calendar } from "lucide-react";
import Link from "next/link";

const PostElements = ({ posts }) => {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li className="flex flex-col gap-2" key={"featured" + post.id}>
          <Link href={`/posts/${post.slug}`}>
            <h2 className="text-xl text-orange-500">{post.title}</h2>
          </Link>
          <p className="flex items-center gap-2 text-sm italic text-zinc-400">
            <Calendar />

            {new Date(post.createdAt).toLocaleDateString("en-us", {
              month: "long",
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default async function Posts({ category, searchQuery }) {
  await dbConnect();

  let posts;

  if (searchQuery) {
    posts = await Post.find({
      $or: [
        { title: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search by title
        { description: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search by description
      ],
    });
    const contentMatchingQuery = await Content.find({
      content: { $regex: searchQuery, $options: "i" },
    }).populate({ path: "post", model: Post });

    // Create a map to store unique posts
    const uniquePostsMap = new Map();

    posts.forEach((post) => {
      uniquePostsMap.set(post._id.toString(), post);
    });
    contentMatchingQuery.forEach((content) => {
      uniquePostsMap.set(content.post._id.toString(), content.post);
    });
    const uniquePosts = Array.from(uniquePostsMap.values());
    return (
      <>
        <p className="py-4">
          Found {uniquePosts.length} results for '{searchQuery}'{" "}
        </p>

        <PostElements posts={uniquePosts} />
      </>
    );
  }

  const firstDayOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1,
  );
  const lastDayOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
    23,
    59,
    59,
    999,
  );

  switch (category) {
    case "all":
      posts = await Post.find();
      break;
    case "featured":
      posts = await Post.find({ featured: true });
      break;
    case "recent":
      posts = await Post.find({
        createdAt: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
      });
      break;
  }

  return <PostElements posts={posts} />;
}
