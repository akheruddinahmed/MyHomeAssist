import { Container } from "@/components/ui/Container";

type PagePlaceholderProps = {
  title: string;
  milestone: string;
};

/**
 * Temporary placeholder used by every route in Milestone 1 so the router,
 * layout, navbar, and footer can be tested end-to-end before each page's
 * real content is built in its dedicated milestone. Every usage below is
 * intentional — none of these are meant to reach production.
 */
export function PagePlaceholder({ title, milestone }: PagePlaceholderProps) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-heading text-3xl font-semibold text-ink">{title}</h1>
      <p className="mt-3 font-body text-muted">{milestone}</p>
    </Container>
  );
}
