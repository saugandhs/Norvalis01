import { Heart } from "lucide-react"

const floatingHearts = [
  { left: "8%", size: 18, delay: "0s", duration: "14s", opacity: 0.5 },
  { left: "20%", size: 12, delay: "3s", duration: "18s", opacity: 0.35 },
  { left: "34%", size: 22, delay: "6s", duration: "16s", opacity: 0.45 },
  { left: "48%", size: 14, delay: "1.5s", duration: "20s", opacity: 0.3 },
  { left: "62%", size: 20, delay: "5s", duration: "15s", opacity: 0.5 },
  { left: "75%", size: 12, delay: "2.5s", duration: "19s", opacity: 0.35 },
  { left: "88%", size: 16, delay: "7s", duration: "17s", opacity: 0.4 },
]

export function WelcomeHero() {
  return (
    <section className="relative w-full max-w-2xl text-center">
      {/* Floating hearts */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {floatingHearts.map((h, i) => (
          <Heart
            key={i}
            className="absolute bottom-0 animate-float-up fill-primary text-primary"
            style={{
              left: h.left,
              width: h.size,
              height: h.size,
              opacity: h.opacity,
              animationDelay: h.delay,
              animationDuration: h.duration,
            }}
          />
        ))}
      </div>

      <div className="animate-gentle-rise">
        <div className="mx-auto mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <Heart className="size-4 fill-primary text-primary" aria-hidden="true" />
          <span>For you</span>
        </div>

        <h1 className="text-balance font-serif text-5xl leading-[1.1] tracking-tight text-foreground sm:text-7xl md:text-8xl">
          I love you, <span className="text-primary">Apeksha</span>
        </h1>

        <p className="mx-auto mt-8 max-w-md text-pretty font-serif text-xl italic leading-relaxed text-muted-foreground sm:text-2xl">
          &ldquo;With you, every sunrise feels like the first page of a story
          I never want to end.&rdquo;
        </p>

        <div
          className="mx-auto mt-10 h-px w-16 bg-primary/40"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
