import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { PAGE_META } from "@/config/seo";

export function Component() {
  useDocumentMeta(PAGE_META.notFound);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-heading text-6xl font-semibold text-primary">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm font-body text-muted">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button to="/" size="md" className="mt-6">
        Back to Home
      </Button>
    </Container>
  );
}
