import { notFound } from "next/navigation";
import { SITE } from "@/config/config";
import getPosts from "@/utils/getPosts";
import Article from "@/components/Article";
import Tags from "@/components/Tags";
import Header from "@/components/Header";

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;
  const query = {
    query: `
          {
            post(id: "/${slug}", idType: SLUG) {
              title
              content
              excerpt
              tags {
                nodes {
                  name
                  id
                  slug
                }
              }
            }
          }
        `,
  };
  const queryResult = await getPosts(query);
  const post = queryResult.post;
  const tags = post.tags.nodes.map((tag) => tag.name);

  if (!post) {
    notFound();
  }

  return {
    title: post.title + " | " + SITE.title,
    description: String(post.excerpt).replace(/<\/?p>/g, ""),
    keywords: tags,
  };
}

export default async function BlogPage({ params }) {
  const slug = params.slug;
  const query = {
    query: `
          {
            post(id: "/${slug}", idType: SLUG) {
              title
              content
              date
              tags {
                nodes {
                  name
                  id
                  slug
                }
              }
            }
          }
        `,
  };

  const queryResult = await getPosts(query);
  const post = queryResult.post;

  return (
    <main className="mb-auto">
      <Header post={post} />
      <Article content={post.content} />
      <Tags tags={post.tags.nodes} />
    </main>
  );
}
