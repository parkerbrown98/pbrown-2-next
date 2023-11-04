import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function BackButton({
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
      <ArrowLeftIcon className="inline-block w-4 h-4 mr-1 -mt-1" />
      {text}
    </Link>
  );
}
