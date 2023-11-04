import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import { getPost, getPosts } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import moment from "moment";
import Image from "next/image";
import classNames from "classnames";
import CopyLinkButton from "@/app/components/copy-link";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const { posts } = await getPosts({ page: 1, pageSize: 1000 });

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  const formattedDate = moment(post._createdAt).format("MMMM Do, YYYY");

  return (
    <div
      className={classNames({
        "": post.mainImage,
      })}
    >
      <Container padTop={false}>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="max-w-prose">
            <Heading as="h1">{post.title}</Heading>
            <div className="text-sm md:text-xl">
              {formattedDate} • {post.readTime} min read
            </div>
          </div>
          <div className="flex-shrink-0">
            <CopyLinkButton />
          </div>
        </div>
        {post.mainImage && (
          <div className="relative h-64 md:h-96 mt-8">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt}
              className="object-cover object-center w-full h-full -z-10"
              priority
              fill
            />
          </div>
        )}
        <div className="prose lg:prose-lg mt-8">
          <PortableText value={post.body} />
        </div>
      </Container>
    </div>
  );
}
