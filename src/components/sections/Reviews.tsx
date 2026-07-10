import { Section } from "@/components/ui/Section";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { REVIEWS } from "@/data/reviews";

export function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Reviews"
      title="What customers are saying"
      subtitle="Sample layout shown below — real customer reviews will replace these as bookings complete."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </Section>
  );
}
