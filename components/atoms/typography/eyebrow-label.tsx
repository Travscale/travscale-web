import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowLabelProps = {
  children: ReactNode;
  className?: string;
  as?: "span" | "p";
};

export default function EyebrowLabel({
  children,
  className,
  as = "span",
}: EyebrowLabelProps) {
  const Component = as;
  return (
    <Component className={cn("ts-eyebrow", className)}>{children}</Component>
  );
}
