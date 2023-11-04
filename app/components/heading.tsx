import classNames from "classnames";
import { ElementType, ReactNode } from "react";

type Props<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  [x: string]: any; // This is to allow any other props
};

export default function Heading<T extends ElementType = "h1">({
  as,
  children,
  className,
  ...props
}: Props<T>) {
  const Component: ElementType = as || "h1";
  return (
    <Component
      className={classNames("font-bold", className, {
        "text-4xl md:text-5xl": Component === "h1",
        "text-3xl md:text-4xl": Component === "h2",
        "text-2xl md:text-3xl": Component === "h3",
        "text-xl md:text-2xl": Component === "h4",
        "text-lg md:text-xl": Component === "h5",
        "text-base md:text-lg": Component === "h6",
      })}
      {...props}
    >
      {children}
    </Component>
  );
}
