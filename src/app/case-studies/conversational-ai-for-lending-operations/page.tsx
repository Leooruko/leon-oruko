import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { DataArtifact } from "@/components/portfolio/data-artifact";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getCaseStudy } from "@/data/case-studies";

const caseStudy = getCaseStudy("conversational-ai-for-lending-operations")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} — Case Study`,
  description: caseStudy.oneLiner,
};

export default function CaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-band bg-card">
          <div className="portfolio-container">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link href="/" className="no-underline hover:text-foreground">
                Portfolio
              </Link>
              <span className="mx-2">/</span>
              <span>Case Studies</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">{caseStudy.title}</span>
            </nav>

            <p className="fine-label mt-6">Case Study</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-ink sm:text-4xl">
              {caseStudy.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {caseStudy.oneLiner}
            </p>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              {caseStudy.client}
            </p>

            <Link
              href="/#experience"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary no-underline hover:underline"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back to portfolio
            </Link>
          </div>
        </section>

        {caseStudy.stages.map((stage, index) => (
          <section
            key={stage.stage}
            className={`section-band ${index % 2 === 0 ? "bg-background" : "bg-card"}`}
          >
            <div className="portfolio-container max-w-3xl">
              <p className="fine-label">{stage.stage}</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                {stage.heading}
              </h2>
              <div className="mt-5 grid gap-4">
                {stage.body.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-pretty leading-7 text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section-band bg-card">
          <div className="portfolio-container max-w-3xl">
            <DataArtifact
              title="Loan portfolio data layer — sanitized sample"
              description="A sanitized sample of the operational data layer behind this system: the shape of records after they move from the business's ERP into a normalized PostgreSQL database, enriched with a derived operational field. Real customer-identifying fields are excluded entirely, not just masked."
              csvUrl="/data/lending-ops/lending-ops-loan-portfolio-sample.csv"
              csvDownloadName="lending-ops-loan-portfolio-sample.csv"
              pdfUrl="/data/lending-ops/lending-ops-data-pipeline-documentation.pdf"
              pdfDownloadName="lending-ops-data-pipeline-documentation.pdf"
              note="60 sample rows across 15 columns. Values are synthetically generated for demonstration; loan statuses and repayment-cycle options match the production schema."
            />
          </div>
        </section>

        <section className="section-band bg-background">
          <div className="portfolio-container">
            <p className="fine-label">Related Evidence</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              Same pattern, different engagements
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {caseStudy.related.map((item) => (
                <article key={item.label} className="signal-card rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-ink">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground no-underline hover:opacity-90"
            >
              Discuss a similar problem
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
