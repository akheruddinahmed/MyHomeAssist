import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Every section on the site wraps its content in this, so page width and
 * gutter spacing stay consistent without repeating classes everywhere.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-width)] px-6 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
