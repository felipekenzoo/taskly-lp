import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridProps extends React.ComponentProps<"div"> {
  children: ReactNode;
}

export function Grid({ children, className, ...props }: GridProps) {
  const mergedClassName = twMerge("w-full max-w-[1216px] mx-auto px-3", className);
  return <div className={mergedClassName} {...props}>{children}</div>;
}