import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  IntroStrip,
  ServicesSection,
  AdvertisingFeature,
  VideoSection,
  CreatorSection,
  CollabSection,
  WorkSection,
  ProcessSection,
  AboutSection,
} from "@/components/site/sections";
import { CtaSection } from "@/components/site/CtaSection";

const title = "Kreative Planet — Creative & Digital Growth Agency";
const description =
  "Kreative Planet is a 360° creative and digital growth agency: social media, video production, creative advertising, websites, SEO and creator collaborations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kreative Planet",
          description,
          slogan: "We Create. You Grow.",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <ServicesSection />
      <AdvertisingFeature />
      <VideoSection />
      <CreatorSection />
      <CollabSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}
