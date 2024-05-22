import PostsPage from "@/app/posts/components/PostsPage";

export default function PostPage({ params }) {
  return <PostsPage page={params.page} />;
}
