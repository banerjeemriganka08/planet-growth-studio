import { Link } from "@tanstack/react-router";
import { useRef, useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gradient" | "outline" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-medium tracking-tight transition-[transform,background-color,color,box-shadow] duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const sizes = "px-6 py-3.5";

const variants: Record<Variant, string> = {
  gradient: "kp-gradient-bg text-primary-foreground hover:shadow-[var(--shadow-lift)]",
  outline: "kp-gradient-border bg-background text-foreground hover:bg-secondary",
  ghost: "text-foreground hover:text-kp-magenta px-0 py-1",
};

function useMagnet() {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlers = {
    onMouseMove: (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setOffset({
        x: (e.clientX - (r.left + r.width / 2)) * 0.18,
        y: (e.clientY - (r.top + r.height / 2)) * 0.28,
      });
    },
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
  };

  return { ref, style: { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }, handlers };
}

export function MagneticLink({
  children,
  variant = "gradient",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  const { ref, style, handlers } = useMagnet();
  return (
    <Link
      {...props}
      ref={ref as never}
      style={style}
      {...handlers}
      className={cn(base, variant !== "ghost" && sizes, variants[variant], className)}
    >
      {children}
    </Link>
  );
}

export function MagneticButton({
  children,
  variant = "gradient",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  const { ref, style, handlers } = useMagnet();
  return (
    <button
      {...props}
      ref={ref as never}
      style={style}
      {...handlers}
      className={cn(base, variant !== "ghost" && sizes, variants[variant], className)}
    >
      {children}
    </button>
  );
}
