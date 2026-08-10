import { CaseStudyTeaser } from "@/components/portfolio/case-study-teaser";
import { Contact } from "@/components/portfolio/contact";
import { CurrentFocus } from "@/components/portfolio/current-focus";
import { Education } from "@/components/portfolio/education";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { GitHubActivity } from "@/components/portfolio/github-activity";
import { Hero } from "@/components/portfolio/hero";
import { SkillMatrix } from "@/components/portfolio/skill-matrix";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { profile } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.displayName,
  image: profile.avatar,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "Kenya",
  },
  jobTitle: profile.currentRole,
  description: profile.positioning,
  sameAs: [profile.github, profile.linkedinCandidate],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CurrentFocus />
        <ExperienceTimeline />
        <CaseStudyTeaser />
        <GitHubActivity />
        <SkillMatrix />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
