import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  background?: "white" | "surface";
  children: ReactNode;
  className?: string;
};

/**
 * Every homepage section (Benefits, Pricing, How It Works, etc.) wraps its
 * content in this, so section padding and the alternating white/surface
 * background rhythm stay consistent without repeating classes everywhere.
 */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  background = "white",
  children,
  className = "",
}: SectionProps) {
  const bgClass = background === "surface" ? "bg-surface" : "bg-white";

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            {eyebrow && (
              <span className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-hover">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 font-body text-muted">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
