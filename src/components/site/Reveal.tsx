import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string | undefined;
  delay?: number | undefined;
  as?: ElementType | undefined;
}) {
  const ref = useRef<HTMLElement | null>(null);
  // Content stays visible until JS is ready, so SSR output is never blank.
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(armed && "kp-reveal", className)}
    >
      {children}
    </Tag>
  );
}
