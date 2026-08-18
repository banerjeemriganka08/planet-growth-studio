import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CreatorSection, CollabSection } from "@/components/site/sections";
import { CtaSection } from "@/components/site/CtaSection";

const title = "Creators — Kreative Planet";
const description =
  "Join the Kreative Planet creator network: influencer management, editing support, creator branding and brand × creator collaborations.";

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/creators" },
    ],
    links: [{ rel: "canonical", href: "/creators" }],
  }),
  component: CreatorsPage,
});

function CreatorsPage() {
  const support = [
    "Creator branding & positioning",
    "Content & editing support",
    "Brand deal negotiation",
    "Campaign coordination",
    "Growth & analytics reviews",
    "UGC production pipelines",
  ];

  return (
    <>
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="kp-eyebrow">Creator Network</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.88] tracking-tighter text-foreground sm:text-7xl lg:text-[7rem]">
              Built for creators who want to{" "}
              <span className="kp-gradient-text">go further.</span>
            </h1>
          </Reveal>
          <ul className="mt-16 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {support.map((s, i) => (
              <Reveal key={s} delay={i * 60} as="li">
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="h-1.5 w-1.5 rounded-full kp-gradient-bg" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CreatorSection />
      <CollabSection />
      <CtaSection />
    </>
  );
}
