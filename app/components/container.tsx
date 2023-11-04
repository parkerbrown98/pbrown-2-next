import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  padTop?: boolean;
};

export default function Container({ children, padTop = true }: Props) {
  return (
    <div
      className={classNames("max-w-7xl mx-auto px-4 pb-4 md:pb-16 md:px-16", {
        "pt-0": !padTop,
        "pt-4 md:pt-16": padTop,
      })}
    >
      {children}
    </div>
  );
}
