import { Play } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* PLACEHOLDER — replace this gradient with the real hero photo
          (robots colliding) exported from Figma, e.g. as a background-image
          on this div or an <img> with object-cover. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, hsl(0 70% 15%), transparent 60%), radial-gradient(circle at 80% 60%, hsl(220 60% 12%), transparent 55%), #0a0a0d",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge tone="red" pulse>
            Live
          </Badge>
          <span className="text-sm text-text-secondary">
            Episode 14 · Bengaluru Regionals
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded"
          >
            <Play className="h-3.5 w-3.5" aria-hidden="true" />
            Watch Live
          </button>
        </div>

        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-extrabold uppercase leading-tight tracking-tight text-text-primary md:text-6xl"
        >
          India&rsquo;s Ultimate Robotics Arena
        </h1>
        <p className="mt-5 max-w-xl text-text-secondary">
          Build. Compete. Rank. The national ecosystem for robotics arena.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button variant="primary">Create Account</Button>
          <Button variant="outline">Explore Events</Button>
        </div>
      </div>
    </section>
  );
}
