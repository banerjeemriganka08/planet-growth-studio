import { Link } from "@tanstack/react-router";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="relative grid h-8 w-8 place-items-center">
        <span className="absolute inset-0 rounded-full kp-gradient-bg opacity-90" />
        <span className="absolute inset-[3px] rounded-full bg-background" />
        <span className="absolute inset-0 rounded-full border border-transparent kp-gradient-border animate-kp-spin-slow" />
        <span className="relative h-2 w-2 rounded-full kp-gradient-bg" />
      </span>
      <span className="font-display text-[0.95rem] font-bold uppercase tracking-[0.14em] text-foreground">
        Kreative<span className="kp-gradient-text">Planet</span>
      </span>
    </Link>
  );
}
