import { WelcomeHero } from "@/components/welcome-hero"

export default function Page() {
  return (
    <main className="relative min-h-svh flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent/40 via-background to-secondary/50 px-6 py-16">
      {/* Soft drifting color glows */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 size-[28rem] animate-glow-drift rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 size-[30rem] animate-glow-drift rounded-full bg-accent/40 blur-3xl"
        style={{ animationDelay: "3s" }}
        aria-hidden="true"
      />
      {/* Subtle dotted texture */}
      <div
        className="bg-dot-texture pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <WelcomeHero />
    </main>
  )
}
