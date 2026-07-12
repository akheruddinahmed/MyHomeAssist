import { useState, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu automatically if the viewport grows past mobile size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <RouterNavLink
            to="/"
            className="flex items-center gap-2.5 font-heading text-lg font-semibold tracking-tight text-ink md:text-xl"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo.png"
              alt={`${SITE.name} logo`}
              className="h-9 w-9 rounded-full md:h-10 md:w-10"
              width={40}
              height={40}
            />
            {SITE.name}
          </RouterNavLink>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <RouterNavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-body text-sm transition-colors ${
                      isActive
                        ? "font-medium text-primary-hover"
                        : "text-muted hover:text-ink"
                    }`
                  }
                >
                  {link.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button to="/pricing" size="md">
              Book Now
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-ink md:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-white md:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <RouterNavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-3 font-body text-base transition-colors ${
                          isActive
                            ? "bg-surface font-medium text-primary-hover"
                            : "text-ink hover:bg-surface"
                        }`
                      }
                    >
                      {link.label}
                    </RouterNavLink>
                  </li>
                ))}
              </ul>
              <div className="pb-6">
                <Button to="/pricing" size="lg" className="w-full">
                  Book Now
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
