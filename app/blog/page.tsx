import { getPosts } from "@/lib/sanity";
import Container from "../components/container";
import Heading from "../components/heading";
import { Metadata } from "next";
import BlogPreview from "../components/blog-preview";
import Paginator from "../components/paginator";

export const metadata: Metadata = {
  title: "blog | pbrown.dev",
  description: "Welcome to my blog. I like to build things and write about it.",
};

type Props = {
  searchParams: {
    p: number;
  };
};

export default async function BlogPage({ searchParams }: Props) {
  const page = searchParams.p ? parseInt(searchParams.p.toString()) : 1;
  const { posts, totalPages } = await getPosts({ page, pageSize: 5 });

  return (
    <Container padTop={false}>
      <Heading as="h1">Welcome to my blog.</Heading>
      <div className="divide-y divide-black space-y-4 lg:space-y-8 mt-8">
        {posts.map((post) => (
          <div key={post.slug.current} className="pt-4 lg:pt-8">
            <BlogPreview
              title={post.title}
              date={post._createdAt}
              slug={post.slug.current}
              body={post.body}
              readTime={post.readTime}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 lg:mt-8">
        <Paginator currentPage={page} totalPages={totalPages} />
      </div>
    </Container>
  );
}
