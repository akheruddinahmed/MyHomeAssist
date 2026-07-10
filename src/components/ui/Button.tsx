import { forwardRef } from "react";
import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes, Ref } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg font-heading font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "bg-white text-ink border border-border hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-ink hover:text-primary",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");
}

// Motion-enhanced primitives. Wrapping once here means every Button variant
// gets identical, subtle press feedback with zero repeated animation code.
const MotionLink = motion.create(Link);
const MotionAnchor = motion.a;
const MotionButton = motion.button;
const tap = { whileTap: { scale: 0.97 } };

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

/** Internal navigation, e.g. <Button to="/pricing">View Pricing</Button> */
type InternalLinkProps = CommonProps &
  Omit<LinkProps, "className"> & { to: LinkProps["to"]; href?: undefined };

/** External link (always opens in a new tab), e.g. Book Now -> Google Form */
type ExternalLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
    to?: undefined;
  };

/** Native button, e.g. form submits or accordion toggles */
type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    to?: undefined;
    href?: undefined;
  };

export type ButtonProps = InternalLinkProps | ExternalLinkProps | NativeButtonProps;

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const cls = classes(variant, size, className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ExternalLinkProps;
    return (
      <MotionAnchor
        {...tap}
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...anchorRest}
      >
        {children}
      </MotionAnchor>
    );
  }

  if ("to" in rest && rest.to) {
    const { to, ...linkRest } = rest as InternalLinkProps;
    return (
      <MotionLink
        {...tap}
        ref={ref as Ref<HTMLAnchorElement>}
        to={to}
        className={cls}
        {...linkRest}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      {...tap}
      ref={ref as Ref<HTMLButtonElement>}
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </MotionButton>
  );
});

Button.displayName = "Button";
