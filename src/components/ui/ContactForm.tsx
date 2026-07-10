import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClasses =
  "w-full rounded-lg border border-border bg-white px-4 py-2.5 font-body text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    // No backend / no API by design — this opens the visitor's own email
    // client with the message pre-filled, rather than pretending to submit
    // to a server that doesn't exist.
    const subject = encodeURIComponent(`New enquiry from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n— ${data.name} (${data.email})`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-body text-sm font-medium text-ink"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className={inputClasses}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1.5 font-body text-xs text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block font-body text-sm font-medium text-ink"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1.5 font-body text-xs text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-body text-sm font-medium text-ink"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="What can we help with?"
          className={inputClasses}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 font-body text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        Send Message
      </Button>

      <p className="text-center font-body text-xs text-muted">
        This opens your email app with your message pre-filled — nothing is
        sent automatically from this page.
      </p>
    </form>
  );
}
