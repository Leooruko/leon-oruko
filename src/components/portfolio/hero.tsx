import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Phone,
  RadioTower,
} from "lucide-react";

import { ContactDialog } from "@/components/portfolio/contact-dialog";
import { capabilitySignals, heroStats, profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="technical-grid border-b bg-background">
      <div className="portfolio-container py-10 sm:py-12 lg:py-14">
        <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-stretch">
          <div className="panel-card relative overflow-hidden rounded-xl p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:30px_30px]" />
            <div className="relative">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm font-medium text-white/80">
                  <RadioTower aria-hidden="true" className="size-4 text-signal" />
                  Nairobi, Kenya
                </span>
                <span className="inline-flex rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm font-medium text-white/80">
                  AI Engineer at PixeSci
                </span>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-signal">
                Business problem-solving through software and AI
              </p>
              <h1 className="mt-4 max-w-4xl text-balance text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                I solve operational problems with practical software and AI systems.
              </h1>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                {profile.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ContactDialog />
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/16 bg-white/8 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-white/14"
                >
                  <Github aria-hidden="true" className="size-4" />
                  My GitHub
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
                <a
                  href={profile.linkedinCandidate}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/16 bg-white/8 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-white/14"
                >
                  <Linkedin aria-hidden="true" className="size-4" />
                  My LinkedIn
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <aside className="signal-card rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-4 lg:block">
              <div className="relative size-28 shrink-0 overflow-hidden rounded-lg border bg-muted sm:size-36 lg:size-full lg:aspect-square">
                <Image
                  src={profile.avatar}
                  alt={profile.avatarAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, 144px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 lg:mt-5">
                <h2 className="text-2xl font-semibold text-ink">
                  {profile.displayName}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {profile.positioning}
                </p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-10 place-items-center rounded-md border bg-background text-foreground no-underline hover:border-primary hover:text-primary"
                    aria-label="Open GitHub profile"
                  >
                    <Github aria-hidden="true" className="size-4" />
                  </a>
                  <a
                    href={profile.linkedinCandidate}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-10 place-items-center rounded-md border bg-background text-foreground no-underline hover:border-primary hover:text-primary"
                    aria-label="Open LinkedIn profile"
                  >
                    <Linkedin aria-hidden="true" className="size-4" />
                  </a>
                  <a
                    href={profile.phoneHref}
                    className="grid size-10 place-items-center rounded-md border bg-background text-foreground no-underline hover:border-primary hover:text-primary"
                    aria-label="Call me"
                  >
                    <Phone aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-lg border bg-background p-3">
                  <p className="fine-label">{item.label}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-5 signal-card rounded-xl p-4">
          <div className="flex flex-wrap items-center gap-2">
            <MapPin aria-hidden="true" className="size-4 text-primary" />
            <p className="text-sm font-semibold text-ink">Capability map</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {capabilitySignals.map((signal) => (
              <span
                key={signal}
                className="rounded-md border bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
