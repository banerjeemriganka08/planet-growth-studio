export function Marquee({ words }: { words: string[] }) {
  const row = [...words, ...words];
  return (
    <div
      className="relative flex overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      aria-hidden="true"
    >
      <div className="flex w-max animate-kp-marquee items-center gap-8 pr-8">
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
              {word}
            </span>
            <span className="h-1.5 w-1.5 rounded-full kp-gradient-bg" />
          </span>
        ))}
      </div>
    </div>
  );
}
