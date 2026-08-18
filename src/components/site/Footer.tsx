import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const pages = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/creators", label: "Creators" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-display text-2xl font-bold tracking-tight text-foreground">
              We Create. <span className="kp-gradient-text">You Grow.</span>
            </p>
          </div>
          <nav aria-label="Footer pages" className="flex flex-col gap-3">
            <p className="kp-eyebrow">Explore</p>
            {pages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="text-sm text-ink-soft transition-colors hover:text-foreground"
              >
                {p.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Social" className="flex flex-col gap-3">
            <p className="kp-eyebrow">Follow</p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-ink-soft transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-14 h-px w-full kp-gradient-bg opacity-60" />
        <p className="mt-6 text-xs text-ink-soft">
          © 2026 Kreative Planet. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
