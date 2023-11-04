import { getPosts } from "@/lib/sanity";
import BasicSlider from "./components/basic-slider";
import BlogCard from "./components/blog-card";
import Container from "./components/container";
import Heading from "./components/heading";

export default async function HomePage() {
  const { posts } = await getPosts({ page: 1, pageSize: 4 });

  return (
    <>
      <Container padTop={false}>
        <div className="space-y-8">
          <Heading as="h2">Latest Blog Posts</Heading>
          <BasicSlider>
            {posts.map((post) => (
              <div key={post.slug.current} className="w-max max-w-md">
                <BlogCard
                  title={post.title}
                  readTime={post.readTime}
                  date={post._createdAt}
                  slug={post.slug.current}
                  body={post.body}
                />
              </div>
            ))}
          </BasicSlider>
        </div>
      </Container>
      <Container>
        <Heading as="h2">Latest Projects</Heading>
      </Container>
    </>
  );
}
