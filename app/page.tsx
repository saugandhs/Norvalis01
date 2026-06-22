import { Heart } from "lucide-react"
import { WelcomeHero } from "@/components/welcome-hero"

// Soft, blurred hearts of varying sizes scattered around the edges,
// deliberately kept clear of the center so the message stays crisp.
const scatteredHearts = [
  { top: "8%", left: "6%", size: 88, blur: 6, opacity: 0.18, rotate: -18, from: 0.12, to: 0.24, duration: "11s", delay: "0s" },
  { top: "16%", left: "16%", size: 40, blur: 2, opacity: 0.3, rotate: 12, from: 0.2, to: 0.42, duration: "8s", delay: "1.5s" },
  { top: "6%", right: "9%", size: 64, blur: 4, opacity: 0.22, rotate: 16, from: 0.14, to: 0.3, duration: "10s", delay: "2.5s" },
  { top: "22%", right: "5%", size: 34, blur: 1, opacity: 0.32, rotate: -10, from: 0.22, to: 0.46, duration: "7.5s", delay: "0.8s" },
  { bottom: "10%", left: "8%", size: 52, blur: 3, opacity: 0.26, rotate: 8, from: 0.16, to: 0.34, duration: "9.5s", delay: "3s" },
  { bottom: "20%", left: "20%", size: 30, blur: 1, opacity: 0.3, rotate: -14, from: 0.2, to: 0.4, duration: "8.5s", delay: "1s" },
  { bottom: "8%", right: "12%", size: 96, blur: 7, opacity: 0.16, rotate: 20, from: 0.1, to: 0.22, duration: "12s", delay: "2s" },
  { bottom: "24%", right: "7%", size: 44, blur: 2, opacity: 0.28, rotate: -6, from: 0.18, to: 0.38, duration: "9s", delay: "3.5s" },
]

export default function Page() {
  return (
    <main className="relative min-h-svh flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent/40 via-background to-secondary/50 px-6 py-16">
      {/* Soft drifting color glows */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 size-[26rem] animate-glow-drift rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 size-[28rem] animate-glow-drift rounded-full bg-accent/30 blur-3xl"
        style={{ animationDelay: "3s" }}
        aria-hidden="true"
      />

      {/* Scattered, blurred hearts framing the message */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {scatteredHearts.map((h, i) => (
          <Heart
            key={i}
            className="absolute animate-soft-pulse fill-primary text-primary"
            style={{
              top: h.top,
              left: h.left,
              right: h.right,
              bottom: h.bottom,
              width: h.size,
              height: h.size,
              opacity: h.opacity,
              filter: `blur(${h.blur}px)`,
              transform: `rotate(${h.rotate}deg)`,
              animationDuration: h.duration,
              animationDelay: h.delay,
              ["--pulse-from" as string]: h.from,
              ["--pulse-to" as string]: h.to,
            }}
          />
        ))}
      </div>

      <WelcomeHero />
    </main>
  )
}
