import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/components/site/data";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { ProcessSection } from "@/components/site/sections";

const title = "Services — Kreative Planet";
const description =
  "Social media marketing, video production, creative advertising, website & SEO, creator management and brand × influencer collaborations.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="kp-eyebrow">Services</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-foreground sm:text-7xl lg:text-8xl">
              Everything your brand needs to{" "}
              <span className="kp-gradient-text">grow.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Six capabilities, one team. Strategy, creative and technology working together so
              every piece of content compounds into growth.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={40}>
            <section id={s.id} className="grid gap-8 border-t border-border py-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="font-display text-xs tracking-[0.2em] text-ink-soft">
                  0{i + 1}
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{s.line}</p>
              </div>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 border-b border-border pb-3"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full kp-gradient-bg transition-transform duration-300 group-hover:scale-150" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>

      <ProcessSection />
      <CtaSection />
    </>
  );
}
