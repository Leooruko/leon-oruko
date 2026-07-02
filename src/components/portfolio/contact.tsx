import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

import { profile } from "@/data/profile";

import { ContactDialog } from "./contact-dialog";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-14 sm:py-16">
      <div className="portfolio-container">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Contact"
            title="Let us connect"
            description="For software, data, mobile, and AI engineering opportunities, reach me by email or review my public GitHub profile."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="panel-card rounded-lg p-5">
              <ContactDialog
                variant="icon"
                ariaLabel="Send Leon a message"
                className="border-white/16 bg-white/8 text-signal hover:border-signal hover:text-white"
              >
                <Mail aria-hidden="true" className="size-5" />
              </ContactDialog>
              <h3 className="mt-5 font-semibold">Email</h3>
              <p className="mt-2 break-words text-sm text-white/72">
                {profile.email}
              </p>
              <ContactDialog
                buttonLabel="Send a message"
                variant="secondary"
                className="mt-5 border-white/16 bg-white/8 text-white hover:border-signal hover:text-signal"
              />
            </div>
            <a
              href={profile.phoneHref}
              className="panel-card rounded-lg p-5 no-underline hover:border-signal"
            >
              <Phone aria-hidden="true" className="size-5 text-signal" />
              <h3 className="mt-5 font-semibold">Phone</h3>
              <p className="mt-2 text-sm text-white/72">{profile.phone}</p>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="panel-card rounded-lg p-5 no-underline hover:border-signal"
            >
              <Github aria-hidden="true" className="size-5 text-signal" />
              <div className="mt-5 flex items-center gap-2">
                <h3 className="font-semibold">GitHub</h3>
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </div>
              <p className="mt-2 break-words text-sm text-white/72">
                github.com/Leooruko
              </p>
            </a>
            <a
              href={profile.linkedinCandidate}
              target="_blank"
              rel="noreferrer"
              className="panel-card rounded-lg p-5 no-underline hover:border-signal"
            >
              <Linkedin aria-hidden="true" className="size-5 text-signal" />
              <div className="mt-5 flex items-center gap-2">
                <h3 className="font-semibold">LinkedIn</h3>
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </div>
              <p className="mt-2 break-words text-sm text-white/72">
                {profile.linkedinLabel}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
