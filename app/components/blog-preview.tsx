import Link from "next/link";
import Heading from "./heading";
import moment from "moment";
import { PortableText } from "@portabletext/react";

type Props = {
  title: string;
  date: string;
  slug: string;
  readTime?: number;
  body: any;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function BlogPreview({
  title,
  date,
  slug,
  body,
  readTime,
  ...props
}: Props) {
  const formattedDate = moment(date).format("MMMM Do, YYYY");

  return (
    <Link className="block" href={`/blog/${slug}`} {...props}>
      <article className="flex flex-col gap-y-4">
        <div>
          <Heading as="h2">{title}</Heading>
          <time dateTime={date} className="text-gray-500 text-lg lg:text-xl">
            {formattedDate}
          </time>
        </div>
        <div className="text-base tracking-tight leading-tight line-clamp-5 max-w-prose">
          <PortableText value={body} />
        </div>
      </article>
    </Link>
  )
}
