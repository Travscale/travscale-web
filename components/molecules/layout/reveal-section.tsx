import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealSectionProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export default function RevealSection({
  children,
  delayMs = 0,
  className,
}: RevealSectionProps) {
  const style: CSSProperties | undefined = delayMs
    ? { transitionDelay: `${delayMs}ms` }
    : undefined;

  return (
    <div className={cn("ts-section", className)} style={style}>
      {children}
    </div>
  );
}
