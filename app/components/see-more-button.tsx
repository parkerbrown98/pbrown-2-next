import { ArrowRightIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function SeeMoreButton({
  className,
  href,
  text,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={classNames(className, "inline-block text-black font-semibold tracking-tight hover:underline")}
      {...props}
    >
      {text}
      <ArrowRightIcon className="inline-block w-4 h-4 ml-1 -mt-1" />
    </Link>
  );
}
