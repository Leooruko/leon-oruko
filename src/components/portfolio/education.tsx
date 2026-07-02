import { GraduationCap, Languages } from "lucide-react";

import { education } from "@/data/education";
import { profile } from "@/data/profile";

import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="section-band bg-card">
      <div className="portfolio-container">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeading
              eyebrow="Education"
              title="Engineering foundation with data and programming training"
              description="My academic path supports the way I approach software, data, and AI engineering work."
            />

            <div className="mt-8 rounded-lg border bg-background p-5">
              <div className="flex items-center gap-3">
                <Languages aria-hidden="true" className="size-5 text-primary" />
                <h3 className="font-semibold text-ink">Languages</h3>
              </div>
              <div className="mt-4 grid gap-3">
                {profile.languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between gap-3 rounded-md border bg-card px-3 py-2 text-sm"
                  >
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted-foreground">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {education.map((item) => (
              <article key={item.institution} className="signal-card rounded-xl p-5">
                <div className="flex gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                    <GraduationCap aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {item.period}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-ink">
                      {item.institution}
                    </h3>
                    <p className="mt-1 font-medium text-foreground">
                      {item.program}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
