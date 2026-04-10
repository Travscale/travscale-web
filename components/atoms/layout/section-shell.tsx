import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionShell({
  children,
  className,
}: SectionShellProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 md:px-12", className)}>
      {children}
    </div>
  );
}
