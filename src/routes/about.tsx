import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { AboutSection, ProcessSection } from "@/components/site/sections";
import { CtaSection } from "@/components/site/CtaSection";

const title = "About — Kreative Planet";
const description =
  "Kreative Planet combines strategy, creativity, technology, culture and growth for brands that want to think differently and grow faster.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const beliefs = [
    {
      t: "Ideas before formats",
      d: "We start with the thought, then decide whether it becomes a reel, a film, a page or a campaign.",
    },
    {
      t: "Culture is the media plan",
      d: "Brands grow faster when the work sits inside what people already care about.",
    },
    {
      t: "Creative accountable to numbers",
      d: "Every deliverable ties back to reach, retention or revenue — not vanity metrics.",
    },
  ];

  return (
    <>
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="kp-eyebrow">About</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-bold uppercase leading-[0.88] tracking-tighter text-foreground sm:text-7xl lg:text-[7rem]">
              A creative studio with a{" "}
              <span className="kp-gradient-text">growth engine.</span>
            </h1>
          </Reveal>
          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {beliefs.map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <div className="border-t border-border pt-6">
                  <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {b.t}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
