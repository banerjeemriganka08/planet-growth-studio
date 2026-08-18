import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { WorkSection } from "@/components/site/sections";
import { CtaSection } from "@/components/site/CtaSection";

const title = "Work — Kreative Planet";
const description =
  "Selected branding, social, advertising, video, website and campaign work built by Kreative Planet for ambitious brands.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const stats = [
    { k: "42+", v: "Brands launched & scaled" },
    { k: "180M+", v: "Organic views generated" },
    { k: "600+", v: "Videos produced" },
    { k: "120+", v: "Creators in network" },
  ];

  return (
    <>
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="kp-eyebrow">Work</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.88] tracking-tighter text-foreground sm:text-7xl lg:text-[7.5rem]">
              Work that speaks <span className="kp-gradient-text">louder.</span>
            </h1>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.k} delay={i * 70}>
                <div className="border-t border-border pt-5">
                  <p className="font-display text-4xl font-bold tracking-tighter text-foreground">
                    {s.k}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WorkSection compact />
      <CtaSection />
    </>
  );
}
