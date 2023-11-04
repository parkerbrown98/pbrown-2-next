import Link from "next/link";
import moment from "moment";
import { PortableText } from "@portabletext/react";

type Props = {
  title: string;
  date: string;
  slug: string;
  readTime?: number;
  body: any;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function BlogCard({
  title,
  date,
  slug,
  readTime,
  body,
  ...props
}: Props) {
  const isToday = moment(date).isSame(moment(), "day");

  return (
    <Link href={`/blog/${slug}`} {...props}>
      <article className="block border border-black hover:bg-gray-400/10 h-full">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold leading-tight text-gray-900 truncate">
              {title}
            </h2>
            {isToday && (
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                New
              </span>
            )}
          </div>
          <div className="mt-3 text-base text-gray-500 line-clamp-3">
            <PortableText value={body} />
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <div className="flex gap-x-1 items-center">
                <div>
                  <span className="sr-only">Published on</span>
                  <time dateTime={date}>
                    {moment(date).format("MMMM Do, YYYY")}
                  </time>
                </div>
                {readTime && <span aria-hidden="true">&middot;</span>}
                {readTime && (
                  <div>
                    <span className="sr-only">Read time</span>
                    <span>{readTime} min read</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
