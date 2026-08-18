import { ArrowUpRight } from "lucide-react";
import { MagneticLink } from "./MagneticLink";
import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-28 sm:px-8 sm:py-36">
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full kp-gradient-bg opacity-30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-24 h-[24rem] w-[24rem] rounded-full kp-gradient-bg opacity-25 blur-[110px]"
      />
      <div className="relative mx-auto max-w-[1100px] text-center">
        <Reveal>
          <h2 className="font-display text-[13vw] font-bold uppercase leading-[0.9] tracking-tighter text-background sm:text-7xl lg:text-8xl">
            Have a brand
            <br />
            <span className="kp-gradient-text">to build?</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-xl text-base text-background/70">
            Let&apos;s turn your next idea into something people remember.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticLink to="/contact">
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </MagneticLink>
          <MagneticLink
            to="/contact"
            hash="talk"
            variant="outline"
            className="bg-transparent text-background hover:bg-background/10"
          >
            Talk to Us
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}
