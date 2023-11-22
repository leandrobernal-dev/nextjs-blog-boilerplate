import Posts from "@/components/Posts";

export default function PostsPage() {
  return (
    <div>
      <h1 className="pb-4 text-3xl font-bold">Posts</h1>

      <ul className="flex flex-col gap-8">
        <Posts category={"all"} />
      </ul>
    </div>
  );
}
