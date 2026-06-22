import { WelcomeHero } from "@/components/welcome-hero"

export default function Page() {
  return (
    <main className="relative min-h-svh flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent/40 via-background to-secondary/50 px-6 py-16">
      <WelcomeHero />
    </main>
  )
}
