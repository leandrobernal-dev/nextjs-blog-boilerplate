import PostsPage from "@/app/posts/page/components/PostsPage";

export default function PostPage({ params }) {
  return <PostsPage page={params.page} />;
}
