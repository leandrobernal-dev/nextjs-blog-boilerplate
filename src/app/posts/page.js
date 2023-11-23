import Posts from "@/components/Posts";
import { headers } from "next/headers";

export default function PostsPage(req) {
  const headerList = headers();
  const ip = headerList.get("x-forwarded-for");
  console.log(ip);
  return (
    <div>
      <h1 className="pb-4 text-3xl font-bold">Posts</h1>

      <ul className="flex flex-col gap-8">
        <Posts category={"all"} />
      </ul>
    </div>
  );
}
