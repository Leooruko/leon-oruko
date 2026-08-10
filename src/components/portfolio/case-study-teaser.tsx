import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { caseStudies } from "@/data/case-studies";

import { SectionHeading } from "./section-heading";

export function CaseStudyTeaser() {
  const featured = caseStudies[0];

  return (
    <section id="case-study" className="section-band bg-card">
      <div className="portfolio-container">
        <SectionHeading
          eyebrow="Case Study"
          title="Proof of problem-solving, not a list of technologies"
          description="A closer look at one real engagement: the business problem, what I investigated, why I built what I built, and what became possible because of it."
        />

        <article className="signal-card mt-10 grid gap-4 rounded-xl p-6 sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">
            {featured.client}
          </p>
          <h3 className="text-xl font-semibold text-ink sm:text-2xl">
            {featured.title}
          </h3>
          <p className="text-pretty leading-7 text-muted-foreground">
            {featured.oneLiner}
          </p>
          <p className="text-sm text-muted-foreground">
            Built for internal use against a live operational database — not a prototype running on sample data.
          </p>
          <Link
            href={`/case-studies/${featured.slug}`}
            className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary no-underline hover:underline"
          >
            Read the full case study
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </article>
      </div>
    </section>
  );
}
