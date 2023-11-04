import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  padTop?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className,
  padTop = true,
}: Props) {
  return (
    <div
      className={classNames(
        className,
        "max-w-7xl mx-auto px-4 pb-8 md:pb-16 md:px-16",
        {
          "pt-0": !padTop,
          "pt-8 md:pt-16": padTop,
        }
      )}
    >
      {children}
    </div>
  );
}
