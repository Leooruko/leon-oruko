<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This repository uses a modern Next.js 16 App Router stack. Next APIs, metadata conventions, route behavior, and caching semantics may differ from older training data. Before changing framework-sensitive code, read the installed documentation in `node_modules/next/dist/docs/` for the specific API you touch after dependencies are installed.
<!-- END:nextjs-agent-rules -->

# Leon Oruko Portfolio Agent Guide

## Purpose Of This Guide

This file is the operating guide for every agent or developer working in `/home/japheth-oruko/projects/Leon_Portfolio`.

The project is intentionally early in its life. Treat this guide and `docs/LEON_PORTFOLIO_IMPLEMENTATION_PROMPT.md` as product, content, design, and engineering constraints for the eventual portfolio build.

When this guide conflicts with generic portfolio instincts, follow this guide.

When this guide conflicts with newer explicit user instructions, follow the user and update this guide if the new direction should persist.

## Project Purpose

This repository is Leon Oruko's personal developer portfolio. It should present Leon as an early-career but already hands-on engineering student, software/data practitioner, mobile application developer, and AI engineer.

The site should communicate that Leon is not a generic freelancer and not a senior executive persona. He is a Nairobi-based Electrical and Electronics Engineering student at JKUAT with practical experience across:

- mobile application development
- data applications and dashboards
- machine learning workflows
- AI-enabled engineering work
- backend API development
- software development for digital services
- modern communication and digital infrastructure interests

The portfolio should give recruiters and collaborators a clear answer to:

- who Leon is
- what he is studying
- what he has built or contributed to
- what roles he has held
- what tools he can work with
- why his engineering background matters
- how to contact him
- how to inspect his public GitHub work when verified

## Strategic Positioning

Leon should be positioned as:

- an Electrical and Electronics Engineering student at Jomo Kenyatta University of Agriculture and Technology
- a software and data enthusiast with hands-on application work
- an AI Engineer at PixeSci from June 2026 onward
- a builder with practical exposure to mobile apps, Power BI dashboards, predictive models, FastAPI services, AI APIs, and agent-style workflows
- a junior or emerging engineer with credible technical range, not an overclaimed expert

The site should not present him as:

- a generic web designer
- a generic freelancer landing-page persona
- a senior AI architect
- a founder or executive unless the user supplies that fact
- a cloned version of Japheth Oruko's portfolio
- a person with unverifiable business metrics or outcomes

## Primary Audience

Design and write for these readers:

- technical recruiters evaluating early-career software and AI engineering potential
- engineering managers looking for junior software, data, or AI engineering talent
- startup founders looking for someone who can prototype apps and AI-enabled workflows
- university, internship, scholarship, or research reviewers scanning for practical engineering evidence
- product and engineering collaborators who need clarity on Leon's skills, tools, and project history
- technical peers assessing whether Leon can contribute to mobile, data, backend, or AI projects

Every section should make scanning easy for these audiences.

## Source Of Truth

Use the current repository and user-supplied instructions as the source of truth unless the user provides newer details.

Primary local files:

- `AGENTS.md`
- `README.md`
- `docs/LEON_PORTFOLIO_IMPLEMENTATION_PROMPT.md`
- `docs/Leon_Oruko_CV.pdf`
- `package.json`
- `components.json`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

Before writing framework-sensitive code, inspect:

- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- `postcss.config.mjs`
- installed Next.js docs in `node_modules/next/dist/docs/`

Before writing portfolio content, inspect:

- `docs/Leon_Oruko_CV.pdf`
- this file
- `docs/LEON_PORTFOLIO_IMPLEMENTATION_PROMPT.md`
- any newer user-provided notes in the active conversation

## Known Identity Details

Use these facts from Leon's CV unless the user provides an update:

- Name: `Leon Oruko`
- Location: `Nairobi, Kenya`
- Phone: `+254 711 223 713`
- Email: `orukoleon94@gmail.com`
- GitHub: `https://github.com/Leooruko`
- LinkedIn label from CV: `linkedin.com/in/leon -oruko`
- Normalized LinkedIn candidate: `https://www.linkedin.com/in/leon-oruko`
- Current education: Bachelor of Engineering in Electrical and Electronics Engineering at Jomo Kenyatta University of Agriculture and Technology, 2024-2029
- Prior education: Explore AI Academy Data Science Program, 2023-2024
- Prior education: Modcom Digital Literacy Institute Computer Programming, 2023
- Prior education: Agoro Sare High School, 2019-2022
- Languages: English fluent; Spanish intermediate reading and listening

The LinkedIn value in the PDF has an extraction spacing artifact. Do not present the normalized URL as verified unless it resolves or the user confirms it. It is acceptable to show it as a text label or link only after validation.

## Known Profile Image

The user supplied Leon's profile picture for the portfolio.

Use this local asset path:

- File path: `public/assets/profile-picture.jpeg`
- Public URL path for Next.js rendering: `/assets/profile-picture.jpeg`
- Image characteristics at time of documentation: JPEG, 460x460
- Recommended alt text: `Portrait of Leon Oruko`

This image should be treated as Leon-owned portfolio source material. Use it in the hero, profile header, Open Graph image composition, or contact/profile areas where it improves credibility. Do not replace it with stock imagery, AI-generated portraits, or images from the reference portfolio unless the user explicitly asks for a different profile photo.

## Known Professional Summary

The CV describes Leon as an Electrical and Electronics Engineering student at JKUAT with interests in communication systems, digital infrastructure, and software development.

It also says he is skilled in programming, data analysis, and application development, and is interested in building technology solutions that support modern communication and digital services.

Portfolio copy should sharpen that source material. Preserve the meaning, but avoid generic phrasing.

Good direction:

- `Leon builds at the intersection of software, data, AI, and engineering systems.`
- `His electrical and electronics engineering path gives him a practical lens on communication infrastructure and digital services.`
- `His work history shows hands-on exposure to mobile applications, dashboards, predictive modeling, backend APIs, and AI workflows.`

Avoid:

- `passionate developer`
- `innovative solutions`
- `world-class AI engineer`
- `expert in everything`
- any claim that is not supported by the CV, GitHub, or user instructions

## Known Technical Skills

Use the CV skills as the baseline:

- Programming: Python, SQL, JavaScript, C, C++
- Software development: React, React Native, Flutter
- Data science and AI: Machine Learning, Data Preprocessing, Predictive Modelling, Agent Programming
- Tools and platforms: Jupyter Notebook, Git, Azure, Power BI

Use the user-supplied PixeSci role to add current AI/backend skills:

- FastAPI
- OpenAI APIs
- Anthropic APIs
- prompt design
- tool-calling workflows
- AI orchestration
- backend APIs
- model evaluation
- AI-driven automation modules
- screen control and computer interaction modules
- technical documentation and implementation specifications

Do not imply mastery of all skills. Prefer evidence-based labels:

- `current role`
- `hands-on`
- `project experience`
- `working knowledge`
- `training`
- `engineering foundation`

Do not use fake percentage bars.

## Known Experience

The experience section must include all CV roles and the user-supplied PixeSci role.

### AI Engineer, PixeSci

Dates: `June 2026-present`

Use the user-supplied responsibility source material:

- Designed and implemented AI-powered features using OpenAI and Anthropic APIs.
- Evaluated and prototyped emerging AI capabilities for integration into the PixeSci platform.
- Developed scalable backend APIs using FastAPI to support AI services and application workflows.
- Built AI orchestration pipelines that coordinate model interactions, application logic, and backend services.
- Implemented AI-driven screen control and computer interaction modules for automating complex user workflows.
- Collaborated with engineering and product teams to translate product requirements into AI-enabled solutions.
- Designed structured prompts, tool-calling workflows, and agent logic to improve AI reliability and performance.
- Researched and tested new AI models, APIs, and techniques to identify opportunities for product innovation.
- Produced technical documentation and implementation specifications for AI features and engineering workflows.
- Assisted in designing backend architecture supporting AI integrations and scalable deployment.

For homepage copy, compress these into a readable story. Do not paste all ten bullets into a cramped card unless the layout supports an expanded resume view.

Recommended summary:

- AI feature development with OpenAI and Anthropic APIs
- FastAPI backend services for AI workflows
- agent orchestration, structured prompts, tool calling, and reliability improvements
- AI-driven screen control and computer interaction modules
- model/API evaluation and technical documentation

Spell the company name as `PixeSci` unless the user provides a different brand source.

### Application Developer, Tunyce Media Company

Location: `Nairobi`

Dates: `2023-2025`

CV responsibilities:

- Developed and launched a TV streaming application on Google Play Store.
- Built application features using Flutter and React Native.
- Collaborated with a development team to enhance app functionality.
- Diagnosed and resolved technical issues to improve user experience.

Portfolio framing:

- mobile streaming product development
- Flutter and React Native implementation
- Google Play Store launch experience
- debugging and user experience improvements

Do not invent download counts, ratings, user counts, or revenue.

### Data Application Developer, Bright Com Investments Limited

Location: `Nairobi`

Dates: `2025-2026`

CV responsibilities:

- Built Power BI dashboards to analyze customer behavior trends.
- Developed a mobile application to track client behavior.
- Worked with non-technical staff to improve usability of data applications.
- Integrated linear prediction models to analyze customer behavior.

Portfolio framing:

- customer behavior analytics
- Power BI dashboarding
- mobile data tracking application
- predictive modeling
- collaboration with non-technical users

Avoid claiming business impact unless supplied later.

### Green Com Enterprise Solutions

Location: `Thika Road`

Dates: `2025-present`

CV responsibilities:

- Cleaned and prepared client datasets for analysis.
- Developed machine learning models using client datasets to analyze behavioral patterns.

The CV extraction does not show a job title. Do not invent a confident title. Use one of these approaches:

- show the company and responsibilities without a title
- use `Data and Machine Learning Contributor` only as a clearly derived label
- ask the user for the exact title in a later content pass

## Education

Include education, but keep it compact. It should support the technical narrative without becoming a long resume block.

Required entries:

- Jomo Kenyatta University of Agriculture and Technology, Bachelor of Engineering in Electrical and Electronics Engineering, 2024-2029
- Explore AI Academy, Data Science Program, 2023-2024
- Modcom Digital Literacy Institute, Computer Programming, 2023
- Agoro Sare High School, High School Education, 2019-2022

Good framing:

- `Engineering foundation`
- `Data science training`
- `Programming fundamentals`
- `Academic timeline`

## GitHub Source Policy

Leon provided:

- `https://github.com/Leooruko`

Before referencing specific repositories, public activity, pinned projects, commit activity, languages, demos, or repository names, verify them through GitHub or local user-provided data.

If network access is unavailable:

- do not invent repository names
- do not invent descriptions
- do not invent screenshots
- build a project data model with TODO comments for verified GitHub projects
- use CV-backed work examples instead of fake public projects

When GitHub data is available, prioritize:

- pinned repositories
- recently updated repositories
- repositories with deployed demos
- projects matching Leon's skills: Flutter, React Native, React, Python, machine learning, dashboards, FastAPI, AI agents, data preprocessing, SQL

Each project entry should include only verified details:

- name
- description
- stack
- repository URL
- live URL if available
- role
- problem solved
- implementation notes
- what the project demonstrates

## Inspiration Boundaries

The local project `/home/japheth-oruko/projects/japheth-oruko-portfolio` may be studied as an example of documentation depth, implementation planning, and portfolio quality.

Allowed inspiration:

- thorough documentation and agent guidance style
- strong source-of-truth discipline
- careful section planning
- data-driven portfolio architecture
- responsive testing habits
- quality bar for visual hierarchy
- generic implementation patterns that fit this repository

Do not copy:

- Japheth's personal content
- Japheth's name, bio, roles, links, project case studies, metrics, screenshots, or achievements
- the same homepage structure
- the same visual rhythm
- the same colors
- the same layout composition
- a profile system that makes both portfolios feel like variants of the same template
- claims that Leon has not provided

Leon’s portfolio should feel like a technical command center or engineering signal map, not a product design portfolio clone.

## Design Direction

The portfolio should be:

- technical
- clean
- credible
- creative
- compact where useful
- responsive
- evidence-led
- visibly distinct from the reference portfolio

Recommended concept:

- a young engineer’s command center
- signal-map visual language
- compact status rails
- timeline rails for overlapping roles
- data-rich skill groupings
- project cards with technical metadata
- restrained circuit, signal, or system references
- crisp typography and measured borders

Avoid:

- generic purple/blue gradient portfolios
- decorative orbs, bokeh blobs, or floating abstract shapes
- oversized empty hero sections
- fake dashboard metrics
- fake testimonials
- fake clients
- stock-like engineering imagery
- resume dumping without hierarchy
- copy that exaggerates seniority

## Visual System Guidance

Use a restrained, technical visual system.

Palette direction:

- neutral base such as off-white, soft gray, graphite, or charcoal
- one or two intentional accents such as green, cyan, amber, lime, or signal red
- enough tonal contrast for accessibility
- avoid one-note palettes
- avoid dominant purple/purple-blue gradients
- avoid beige-only or dark-slate-only monotony

Layout direction:

- mobile-first
- asymmetric desktop layouts where useful
- compact status panels
- readable timeline
- stable project cards
- skill matrix instead of tag soup
- clear section boundaries
- no cards inside cards
- no floating card sections for every block

Typography direction:

- crisp and technical
- readable before decorative
- no viewport-width font scaling
- no negative letter spacing
- reserve large type for genuine hero-level information
- use smaller, tighter headings inside cards and panels

Motion direction:

- use CSS transitions where possible
- use restrained motion to clarify state, not entertain
- support `prefers-reduced-motion`
- do not add a heavy animation framework unless the user approves it

## Technical Expectations

Use the current starter stack:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui conventions
- `src` folder
- Resend for contact email handling when implemented
- Redux Toolkit and RTK Query only where a real client-side data layer justifies it
- Server components by default
- Client components only for interactivity, forms, theme controls, animation, or Redux providers

Current dependencies already include:

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `@tailwindcss/postcss`
- `lucide-react`
- `@reduxjs/toolkit`
- `react-redux`
- `resend`
- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `tw-animate-css`

Do not add a CMS, database, authentication system, external analytics, or heavy animation framework unless the user explicitly asks.

Before adding any dependency:

- check whether it is already installed
- explain why existing dependencies are insufficient
- ask the user unless the user already requested the addition

## Next.js Rules

This project uses modern Next.js App Router. Do not rely on stale Next.js assumptions.

Before changing the following, read the installed docs in `node_modules/next/dist/docs/`:

- metadata conventions
- route handlers
- server actions
- caching and revalidation
- `next/image`
- `next/font`
- dynamic routes
- sitemap or robots metadata
- App Router layout behavior
- environment variables in server/client contexts

Prefer:

- server components for static portfolio sections
- route handlers for contact submission
- metadata in `src/app/layout.tsx` or route-specific metadata exports
- JSON-LD where useful for identity and portfolio SEO
- strict TypeScript data modules for content

Avoid:

- making the whole page a client component
- putting secrets in client components
- fetching public GitHub data on the client unless interactivity requires it
- bypassing App Router conventions with outdated Pages Router patterns

## Redux Toolkit And RTK Query Guidance

Do not add Redux just to store static portfolio content.

Static identity, experience, education, skills, and project content should live in typed data modules and render through server components.

Use Redux Toolkit or RTK Query only if the implementation introduces:

- client-side GitHub repository browsing
- project filtering/search that benefits from shared client state
- a future admin/editing workflow
- non-trivial contact form or UI state shared across components
- a real API slice for external data

If GitHub data is fetched server-side, no Redux store is needed.

If client-side GitHub browsing is implemented:

- place API slices in `src/lib/api`
- place store setup in `src/store`
- add a provider only around the client subtree that needs it
- handle loading, empty, and error states

## shadcn/ui Guidance

Use shadcn/ui conventions as a foundation for accessible primitives.

Appropriate primitives:

- Button
- Badge
- Card only for repeated items or truly framed tools
- Tabs for skill or project categories
- Accordion or Collapsible for dense experience details
- Dialog only if project details need modal expansion
- Form components for contact

Do not:

- make every section a card
- place cards inside cards
- let the site look like a default component demo
- add components that are not used
- run shadcn generators without understanding the local `components.json`

## Contact Form Guidance

Use Resend only when implementing a real contact form.

If implementing contact:

- validate input with `zod`
- use `react-hook-form` only in a client form component
- submit to a route handler or server action
- keep `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in environment variables
- never expose secrets to the client
- provide accessible success, loading, and error states
- fail gracefully when environment variables are missing
- avoid fake success in production code

If contact form implementation is out of scope, provide direct links:

- `mailto:orukoleon94@gmail.com`
- phone link if appropriate
- GitHub
- LinkedIn after verification

## Recommended File Organization

Prefer this structure as the portfolio grows:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    api/
      contact/
        route.ts
  components/
    portfolio/
      hero.tsx
      current-focus.tsx
      experience-timeline.tsx
      project-grid.tsx
      skill-matrix.tsx
      education.tsx
      contact.tsx
    site/
      site-header.tsx
      site-footer.tsx
      mobile-nav.tsx
    ui/
      ...
  data/
    profile.ts
    experience.ts
    education.ts
    skills.ts
    projects.ts
  lib/
    utils.ts
    seo.ts
    mail.ts
  lib/api/
    github-api.ts
  store/
    index.ts
```

Only create files that the implementation needs.

Keep repeated content data-driven. Do not embed long arrays of experience, skills, or projects directly in JSX.

## Content Rules

Use plain, specific, evidence-led copy.

Write for credibility:

- show what Leon has worked on
- show what tools he has used
- show how his engineering education connects to software, data, and AI
- make dates clear
- make current role clear
- keep claims proportional to evidence

Do not:

- use lorem ipsum
- include placeholder sample words in final visible UI
- invent outcomes
- invent metrics
- invent testimonials
- invent certifications
- invent project names
- invent public GitHub activity
- overstate seniority
- present unverified links as verified

Preferred verbs when backed by evidence:

- built
- developed
- implemented
- designed
- evaluated
- prototyped
- collaborated
- documented
- cleaned
- prepared
- integrated
- diagnosed
- resolved

Avoid filler:

- passionate
- innovative
- cutting-edge
- world-class
- dynamic
- scalable if no scale details exist
- revolutionizing
- transforming unless clearly true

## Required Content Coverage

The final portfolio must cover:

- hero identity and positioning
- current PixeSci AI Engineer role
- mobile development experience at Tunyce Media Company
- data application experience at Bright Com Investments Limited
- Green Com Enterprise Solutions data/ML work
- JKUAT engineering education
- Explore AI Academy training
- Modcom programming training
- technical skills grouped meaningfully
- contact links
- GitHub link
- LinkedIn link only after cleaning or verification
- project or selected-work section based on verified data or CV-backed work

## Recommended Information Architecture

Default to a single-page portfolio unless the user requests more pages.

Recommended homepage sections:

1. Hero / signal panel
2. Current focus
3. Experience timeline
4. Selected work or GitHub projects
5. Technical stack
6. Education and credentials
7. Contact

Possible anchors:

- `#home`
- `#focus`
- `#experience`
- `#work`
- `#stack`
- `#education`
- `#contact`

The section order can change if the concept is stronger, but the content coverage must remain.

## Accessibility Rules

The portfolio must be usable and accessible.

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Keep heading order logical.
- Ensure every interactive control has an accessible name.
- Preserve visible focus states.
- Maintain sufficient contrast.
- Do not rely on animation or color alone to communicate meaning.
- Respect reduced-motion preferences.
- Use meaningful `alt` text for meaningful images.
- Use empty `alt` only for decorative images.
- Ensure keyboard navigation works.
- Keep touch targets comfortable.
- Avoid layout shift during interaction.

## Responsive Rules

Design mobile first.

Verify at minimum:

- 360px mobile width
- 390px mobile width
- 768px tablet width
- 1024px laptop width
- 1440px desktop width

Check:

- navigation does not overlap content
- hero text wraps cleanly
- status rails do not collapse awkwardly
- timeline remains readable
- cards do not create one-word lines
- buttons do not clip text
- project cards stay balanced
- contact links remain tappable
- fixed-format UI elements have stable dimensions

Avoid viewport-height traps. The first viewport may be immersive, but users must see a hint that more content exists.

## SEO And Metadata Guidance

Use metadata that accurately describes Leon.

Suggested title direction:

- `Leon Oruko | Software, Data & AI Engineer`
- `Leon Oruko | Engineering Student, AI & Data Applications`

Suggested description direction:

- `Nairobi-based Electrical and Electronics Engineering student building mobile, data, backend, and AI-enabled software systems.`

Include only accurate keywords:

- Leon Oruko
- Nairobi
- Kenya
- JKUAT
- Electrical and Electronics Engineering
- AI Engineer
- Software Developer
- Data Applications
- Mobile Developer
- React Native
- Flutter
- FastAPI
- Python
- Power BI
- Machine Learning

If JSON-LD is added:

- use `Person`
- use verified sameAs links only
- do not include unverified employers or credentials beyond provided facts
- use `/assets/profile-picture.jpeg` as the profile image if the design includes Leon's portrait

## Verification Rules

Before finishing implementation work, run:

- `npm run lint`
- `npm run build`

If package installation has not been completed, install dependencies first if the user has authorized network/dependency work or if it is necessary and permitted.

If a command cannot run because of network, dependency, or environment restrictions, report that clearly.

If a contact route is implemented, verify:

- missing environment variables fail gracefully
- invalid form input is rejected
- success and error states are accessible

If GitHub fetching is implemented, verify:

- loading state
- empty state
- error state
- rate-limit or unavailable network behavior

For visual implementation, inspect desktop and mobile layouts with browser screenshots when feasible.

## Git Hygiene

- Run `git status --short` before and after significant work.
- Do not revert user changes.
- Do not use destructive git commands unless explicitly requested.
- Keep edits scoped to the requested phase.
- Do not commit unless the user asks.
- Do not include generated caches or build artifacts.
- Ignore unrelated dirty files.

## Implementation Discipline

When implementing:

- read existing files first
- preserve user changes
- prefer small, coherent components
- keep data separate from rendering
- keep copy specific and sourced
- avoid unnecessary dependencies
- use TypeScript types for content models
- verify responsive behavior
- run lint and build

When uncertain:

- use the CV and user instructions as the factual boundary
- leave TODO comments only in developer-facing data files, not visible UI
- ask the user for missing facts that would otherwise require invention

## Success Criteria

The portfolio work is successful when:

- it is clearly Leon Oruko's portfolio
- it presents him as an engineering student and emerging software/data/AI engineer
- it includes all CV roles and the PixeSci AI Engineer role
- it makes his current capabilities easy to scan
- it avoids invented achievements
- it does not look like a clone of the reference portfolio
- it uses the requested stack appropriately
- it is accessible, responsive, and production-buildable
- it contains no placeholder visible copy
- it provides clear contact paths
