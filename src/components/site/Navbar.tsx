import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { MagneticLink } from "./MagneticLink";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/creators", label: "Creators" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:h-20 sm:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative font-display text-sm text-ink-soft transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 kp-gradient-bg transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <MagneticLink to="/contact" className="hidden sm:inline-flex">
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </MagneticLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top overflow-hidden bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex h-[calc(100dvh-4rem)] flex-col px-5 pt-6">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="border-b border-border py-5 font-display text-3xl font-bold tracking-tight text-foreground"
              activeProps={{ className: "kp-gradient-text" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <MagneticLink to="/contact" className="mt-8 w-full" onClick={() => setOpen(false)}>
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </MagneticLink>
        </nav>
      </div>
    </header>
  );
}
