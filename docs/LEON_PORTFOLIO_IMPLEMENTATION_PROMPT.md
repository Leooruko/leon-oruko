# Leon Oruko Portfolio Master Implementation Prompt

Use this prompt to implement Leon Oruko's portfolio in `/home/japheth-oruko/projects/Leon_Portfolio`.

This is an implementation prompt for a later build phase. It is not the implementation itself. The current repository may still be a starter project. When this prompt is used, the implementation agent should build a complete portfolio from the source material in this repository while respecting every boundary below.

This prompt is deliberately detailed. Its job is to reduce guesswork, prevent invented claims, keep the design distinct from nearby reference portfolios, and give a future agent enough product, content, design, and engineering guidance to ship a credible portfolio.

## Absolute First Instruction

Before implementing anything, read these files:

- `/home/japheth-oruko/projects/Leon_Portfolio/AGENTS.md`
- `/home/japheth-oruko/projects/Leon_Portfolio/docs/LEON_PORTFOLIO_IMPLEMENTATION_PROMPT.md`
- `/home/japheth-oruko/projects/Leon_Portfolio/docs/Leon_Oruko_CV.pdf`
- `/home/japheth-oruko/projects/Leon_Portfolio/README.md`
- `/home/japheth-oruko/projects/Leon_Portfolio/package.json`
- `/home/japheth-oruko/projects/Leon_Portfolio/components.json`
- `/home/japheth-oruko/projects/Leon_Portfolio/src/app/layout.tsx`
- `/home/japheth-oruko/projects/Leon_Portfolio/src/app/page.tsx`
- `/home/japheth-oruko/projects/Leon_Portfolio/src/app/globals.css`

Then inspect the current repository with:

```bash
git status --short
rg --files
```

Preserve user changes. Do not overwrite work blindly.

## Current Repository Snapshot

At the time this prompt was expanded, the project is a minimal Next.js starter with:

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/lib/utils.ts`
- starter component, feature, and store folders
- `docs/Leon_Oruko_CV.pdf`
- `docs/LEON_PORTFOLIO_IMPLEMENTATION_PROMPT.md`
- `AGENTS.md`
- `README.md`
- `components.json`
- Tailwind CSS 4
- Next.js 16
- React 19
- TypeScript
- shadcn/ui conventions
- Redux Toolkit / RTK Query dependencies
- Resend dependencies
- lucide-react already installed

Do not assume the repo is still exactly in this state. Inspect before editing.

## Project Objective

Build a modern personal portfolio for Leon Oruko, a Nairobi-based engineering student, software/data enthusiast, mobile application developer, data application developer, and AI engineer.

The site should establish credibility through:

- evidence from his CV
- user-supplied PixeSci AI Engineer responsibilities
- education path
- technology skills
- work history
- public GitHub profile when verified
- clear contact details
- practical technical storytelling

The portfolio should make these points clear within the first screen or first meaningful scroll:

- Leon Oruko is based in Nairobi, Kenya.
- He studies Electrical and Electronics Engineering at JKUAT.
- He works across software development, data analysis, mobile applications, AI tooling, and backend APIs.
- His current role includes AI Engineer at PixeSci from June 2026 onward.
- His experience includes mobile streaming application work, Power BI dashboards, client behavior tracking, predictive modeling, dataset preparation, and machine learning model development.
- He is early-career but already hands-on.

## Strategic Outcome

The final portfolio should help Leon with:

- internship applications
- junior developer roles
- junior AI engineering roles
- software/data engineering opportunities
- university and scholarship reviews
- startup collaborations
- technical networking
- GitHub profile discovery
- direct contact from recruiters or founders

The site should not be a vanity page. It should work as a practical professional artifact.

## Non-Negotiable Boundaries

Do not implement a clone of `/home/japheth-oruko/projects/japheth-oruko-portfolio`.

You may study that repository for:

- documentation depth
- project organization
- quality bar
- responsive testing habits
- data-driven content patterns
- implementation discipline
- careful agent instructions

You must not copy:

- Japheth's personal content
- Japheth's name, biography, social links, resume, screenshots, or role history
- Japheth's project case studies
- Japheth's metrics
- Japheth's visual structure
- Japheth's full section order
- Japheth's colors
- Japheth's profile layout
- Japheth's copy style
- any component composition that makes both portfolios feel like sibling skins

Leon’s site should feel like a young engineer’s command center, not a product-design profile clone.

## Source Material

### Local Source Files

Use these files as source material:

- `docs/Leon_Oruko_CV.pdf`
- `public/assets/profile-picture.jpeg`
- `AGENTS.md`
- this implementation prompt
- `README.md`
- current code files
- future user-provided notes

Use the PDF as the factual baseline for identity, education, skills, experience, and languages.

### Profile Image Source

The user supplied Leon's profile picture for the portfolio.

Use this asset:

- File path: `public/assets/profile-picture.jpeg`
- Public URL path: `/assets/profile-picture.jpeg`
- Image characteristics at time of documentation: JPEG, 460x460
- Recommended alt text: `Portrait of Leon Oruko`

Use the image where a real portrait improves the portfolio:

- hero/profile header
- compact identity card
- contact/profile section
- generated Open Graph composition if one is created

Do not replace this image with stock photography, AI-generated portraits, or reference-portfolio assets unless the user explicitly asks.

### CV Extracted Facts

The CV identifies Leon as:

- `Leon Oruko`
- `Engineering Student | Software and Data Enthusiast`
- `Nairobi, Kenya`
- `+254 711 223 713`
- `orukoleon94@gmail.com`
- LinkedIn text: `linkedin.com/in/leon -oruko`

The CV professional summary says Leon is:

- an Electrical and Electronics Engineering student at JKUAT
- interested in communication systems, digital infrastructure, and software development
- skilled in programming, data analysis, and application development
- interested in building technology solutions that support modern communication and digital services

Rewrite the summary for web presentation. Do not paste it verbatim unless it reads best in context.

### Education Facts

Include:

- Jomo Kenyatta University of Agriculture and Technology, Bachelor of Engineering in Electrical and Electronics Engineering, 2024-2029
- Explore AI Academy, Data Science Program, 2023-2024
- Modcom Digital Literacy Institute, Computer Programming, 2023
- Agoro Sare High School, High School Education, 2019-2022

Education should support the career narrative. It should not dominate the page.

### Technical Skill Facts

CV skill groups:

- Programming: Python, SQL, JavaScript, C, C++
- Software Development: React, React Native, Flutter
- Data Science and AI: Machine Learning, Data Preprocessing, Predictive Modelling, Agent Programming
- Tools and Platforms: Jupyter Notebook, Git, Azure, Power BI

User-supplied PixeSci role adds:

- OpenAI APIs
- Anthropic APIs
- FastAPI
- backend APIs
- AI orchestration pipelines
- prompt design
- structured prompts
- tool-calling workflows
- agent logic
- model evaluation
- AI-driven screen control
- computer interaction modules
- AI services
- application workflows
- technical documentation
- implementation specifications
- scalable deployment support

Do not use fake proficiency meters. Use grouping, context, and evidence.

### Experience Facts

The portfolio must include:

- AI Engineer at PixeSci, June 2026-present
- Application Developer at Tunyce Media Company, Nairobi, 2023-2025
- Data Application Developer at Bright Com Investments Limited, Nairobi, 2025-2026
- Green Com Enterprise Solutions, Thika Road, 2025-present

The experience section should make overlapping dates understandable. Do not force a false linear full-time chronology.

## PixeSci Role Detail

### Role Metadata

- Company: `PixeSci`
- Role: `AI Engineer`
- Dates: `June 2026-present`
- Status: current role

### User-Supplied Responsibilities

Use the following as source material:

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

### PixeSci Homepage Framing

For a homepage card, compress the responsibilities into strong bullets:

- Building AI-powered product features with OpenAI and Anthropic APIs.
- Developing FastAPI backend services that support AI workflows.
- Designing orchestration pipelines that coordinate model calls, application logic, and backend services.
- Implementing structured prompts, tool calling, and agent logic for more reliable AI behavior.
- Prototyping screen-control and computer-interaction modules for workflow automation.
- Evaluating new models and APIs, then documenting implementation choices for engineering teams.

### PixeSci Tone Rules

Do:

- make the role visible
- present it as current
- show real technical scope
- show collaboration with product and engineering teams
- show backend and AI orchestration exposure

Do not:

- overstate seniority
- claim he leads the whole AI platform unless user says so
- claim public product outcomes unless supplied
- claim production scale metrics unless supplied
- invent internal architecture details

## Tunyce Media Company Detail

### Role Metadata

- Company: `Tunyce Media Company`
- Location: `Nairobi`
- Role: `Application Developer`
- Dates: `2023-2025`

### CV Responsibilities

- Developed and launched a TV streaming application on Google Play Store.
- Built seamless application features using Flutter and React Native.
- Collaborated with a development team to enhance app functionality.
- Diagnosed and resolved technical issues to improve user experience.

### Portfolio Framing

Present this as practical mobile app experience:

- mobile streaming application development
- Google Play Store launch experience
- Flutter and React Native feature implementation
- debugging and UX improvement
- team collaboration

### Do Not Invent

Do not invent:

- app name
- download count
- rating
- revenue
- user count
- client list
- screenshots
- streaming licensing details

## Bright Com Investments Limited Detail

### Role Metadata

- Company: `Bright Com Investments Limited`
- Location: `Nairobi`
- Role: `Data Application Developer`
- Dates: `2025-2026`

### CV Responsibilities

- Built Power BI dashboards to analyze customer behavior trends.
- Developed a mobile application to track client behavior.
- Worked with non-technical staff to improve usability of data applications.
- Integrated linear prediction models to analyze customer behavior.

### Portfolio Framing

Present this as data application and analytics experience:

- Power BI dashboard development
- customer behavior trend analysis
- mobile app for client behavior tracking
- predictive modeling with linear prediction models
- collaboration with non-technical users
- usability improvements for data tools

### Do Not Invent

Do not invent:

- exact business outcomes
- customer numbers
- revenue impact
- dashboard screenshots
- model accuracy
- data source names

## Green Com Enterprise Solutions Detail

### Role Metadata

- Company: `Green Com Enterprise Solutions`
- Location: `Thika Road`
- Dates: `2025-present`
- Exact title: not visible in extracted CV

### CV Responsibilities

- Cleaned and prepared client datasets for analysis.
- Developed machine learning models using client datasets to analyze behavioral patterns.

### Portfolio Framing

Present this carefully:

- dataset cleaning and preparation
- machine learning models on client datasets
- behavioral pattern analysis
- data quality and modeling exposure

### Title Handling

Preferred:

- display company and responsibility cluster without a formal title

Acceptable if UI requires a title:

- `Data and Machine Learning Contributor`

If using that title, treat it as derived from responsibilities, not an official title.

Better future action:

- ask the user for the exact title before final content polish

## GitHub Policy

GitHub URL:

- `https://github.com/Leooruko`

Before referencing specific repositories:

- verify the profile is reachable
- verify repo names
- verify repo descriptions
- verify languages
- verify deployment links
- verify pinned or recently updated work

If network access is unavailable:

- do not invent project names
- do not invent repo details
- do not write fake pinned repositories
- create a `projects.ts` data model with TODO entries or CV-backed work entries
- write visible UI that does not pretend unavailable GitHub data exists

Preferred GitHub project selection:

- pinned repositories
- recent repositories
- repositories matching CV skills
- repositories with meaningful READMEs
- repositories with live demos
- repositories that show Flutter, React Native, React, Python, SQL, ML, FastAPI, AI agents, data preprocessing, or dashboards

Project card fields:

- `name`
- `summary`
- `status`
- `source`
- `stack`
- `repoUrl`
- `liveUrl`
- `role`
- `problem`
- `implementationNotes`
- `whatItShows`
- `verificationStatus`

## Contact And Link Policy

Required contact paths:

- email: `orukoleon94@gmail.com`
- GitHub: `https://github.com/Leooruko`
- phone: `+254 711 223 713`

LinkedIn:

- CV text has spacing artifact: `linkedin.com/in/leon -oruko`
- likely normalized candidate: `https://www.linkedin.com/in/leon-oruko`
- verify before linking as final
- if unverified, display `linkedin.com/in/leon-oruko` as a conservative label or omit link until confirmed

Contact form:

- optional
- only implement if scope includes it
- use Resend only for real sending
- do not build fake production contact behavior

## Recommended Information Architecture

Build a polished one-page portfolio unless the user requests detail pages.

Primary route:

- `/`

Possible future routes:

- `/resume`
- `/projects/[slug]`
- `/api/contact`

Recommended one-page sections:

1. `Hero / Signal Panel`
2. `Current Focus`
3. `Experience Timeline`
4. `Selected Work / Verified Projects`
5. `Technical Stack`
6. `Education`
7. `Contact`

Optional sections if useful:

- `Engineering Foundation`
- `AI Workflow Notes`
- `Mobile and Data Work`
- `GitHub Snapshot`
- `Availability`
- `Download CV`

Do not add many routes unless content justifies them.

## Section: Hero / Signal Panel

The hero must answer:

- Who is Leon?
- What does he build?
- What makes his background distinctive?
- What is he doing now?
- How can someone assess or contact him?

Required hero content:

- profile picture from `/assets/profile-picture.jpeg`
- `Leon Oruko`
- Nairobi, Kenya
- Electrical and Electronics Engineering student at JKUAT
- AI Engineer at PixeSci
- mobile, data, backend, and AI systems positioning
- primary contact CTA
- GitHub link
- optional LinkedIn link after verification

Avoid:

- generic `Hi, I'm...`
- oversized empty hero
- hero copy that sounds senior beyond evidence
- giant portrait dependency if no portrait exists
- decorative gradient background as the main design idea

Possible hero headline directions:

- `Software, data, and AI systems from an engineering lens.`
- `Engineering student building mobile, data, backend, and AI workflows.`
- `AI, mobile, and data applications shaped by an engineering foundation.`
- `A Nairobi-based engineering student building practical software and AI systems.`

Possible hero supporting copy:

- `Leon Oruko studies Electrical and Electronics Engineering at JKUAT and works across mobile applications, data tools, backend APIs, and AI-enabled product workflows. His experience spans Flutter and React Native apps, Power BI dashboards, predictive models, FastAPI services, and AI orchestration at PixeSci.`

Use this as guidance, not mandatory exact copy.

Hero UI ideas:

- left column with identity and copy
- right column with signal/status panel
- compact status rows: Location, Current role, Education, GitHub
- capability matrix: AI, Mobile, Data, Backend
- small technical rail showing current focus
- CSS-built signal paths or circuit-like separators

## Section: Current Focus

Create a concise section showing what Leon is currently focused on.

Include:

- AI-powered feature implementation
- FastAPI backend APIs
- model/API evaluation
- agent workflows and tool calling
- mobile and data applications
- electrical/electronics engineering studies

This section should connect:

- PixeSci current work
- JKUAT engineering studies
- earlier mobile and data application roles

Possible title:

- `Current Engineering Focus`
- `Where Leon Is Building Now`
- `Current Signal`

Suggested cards:

- `AI product workflows`
- `Backend APIs`
- `Mobile applications`
- `Data and prediction`
- `Engineering systems`

Each card should include one or two specific lines, not buzzwords.

## Section: Experience Timeline

The experience timeline should be specific, scannable, and honest.

Requirements:

- include all roles
- include dates
- include location where available
- show overlap clearly
- do not imply a clean full-time sequence if roles overlap
- make PixeSci current role visible

Possible timeline treatments:

- vertical signal rail
- overlapping horizontal date bars
- grouped cards by domain: AI Engineering, Mobile Development, Data Applications
- compact role cards with expandable details
- badges for AI, Mobile, Data, Backend

Recommended ordering:

- PixeSci first because current and most relevant to AI/backend positioning
- then Tunyce, Bright Com, Green Com chronologically or grouped by domain

Example role summary format:

```ts
{
  company: "PixeSci",
  role: "AI Engineer",
  period: "June 2026-present",
  location: "Remote / Nairobi context if confirmed",
  domain: ["AI", "Backend", "Automation"],
  summary: "Builds AI-powered product features, backend services, orchestration flows, and model evaluation workflows.",
  highlights: [...]
}
```

Do not invent location for PixeSci unless confirmed.

## Section: Selected Work / Projects

This section is high-risk because project data may be incomplete. Build it carefully.

Allowed project sources:

- verified GitHub repositories
- CV-backed work examples
- user-supplied projects
- future screenshots/assets supplied by the user

Do not invent public projects.

If GitHub is unavailable, use a `Selected Work` section based on verified experience:

- `TV streaming mobile application` from Tunyce role
- `Customer behavior dashboards` from Bright Com role
- `Client behavior tracking mobile application` from Bright Com role
- `Behavioral modeling with client datasets` from Green Com role
- `AI orchestration and backend workflows` from PixeSci role

These should be described as professional work entries, not public portfolio projects, unless links are verified.

Possible entry format:

- title
- source role
- time period
- context
- contribution
- technologies
- proof status

Example:

```ts
{
  title: "TV streaming mobile application",
  source: "Tunyce Media Company",
  verification: "CV-backed role detail",
  summary: "Application development work on a TV streaming app released on Google Play Store.",
  contributions: [
    "Built Flutter and React Native features.",
    "Collaborated with the development team on app functionality.",
    "Diagnosed and resolved technical issues affecting user experience."
  ],
  stack: ["Flutter", "React Native", "Mobile"]
}
```

If real GitHub repos are verified, merge them with or replace CV-backed entries.

## Section: Technical Stack

Group the stack around Leon’s actual capabilities.

Recommended groups:

### AI And Backend

- OpenAI APIs
- Anthropic APIs
- FastAPI
- AI orchestration
- prompt design
- tool calling
- agent logic
- backend APIs
- model evaluation

### Data And Modeling

- Python
- SQL
- Jupyter Notebook
- Power BI
- machine learning
- data preprocessing
- predictive modelling
- linear prediction models

### Applications

- React
- React Native
- Flutter
- JavaScript
- mobile app development
- Google Play Store launch exposure

### Engineering Foundation

- C
- C++
- Git
- Azure
- electrical/electronics engineering
- communication systems interest
- digital infrastructure interest

Use icons sparingly. `lucide-react` is already installed and suitable for interface icons.

Do not overuse vendor logos unless assets are available and legally usable.

## Section: Education

Keep education compact.

Possible framing:

- `Engineering Foundation`
- `Software and Data Training`
- `Academic Path`

Each education entry should include:

- institution
- credential/program
- dates
- why it matters in one compact phrase if useful

Do not make high school visually equal to current engineering degree unless the layout is a simple timeline.

## Section: Contact

The contact section should be direct and functional.

Minimum:

- email link
- GitHub link
- phone link if appropriate
- LinkedIn link only if verified or clearly normalized

Optional:

- contact form using Resend
- downloadable CV if a public copy is added to `public/`
- short availability statement if user supplies it

Contact copy should be practical:

- `Open to software, data, mobile, and AI engineering opportunities.`
- `Available for internships, junior roles, and technical collaborations.` only if user approves or if this is an appropriate inferred career direction

Avoid claiming specific availability if user has not supplied it.

## Visual Design Direction

The site should feel like a precise engineering portfolio, not a startup marketing landing page.

Recommended attributes:

- neutral base
- strong contrast
- crisp borders
- subtle depth
- compact technical labels
- signal/circuit/grid references used sparingly
- stable responsive cards
- strong but not oversized typography
- visible proof over decorative flourish

Avoid:

- generic purple/blue gradient portfolios
- floating decorative blobs
- one-note dark slate interface
- beige-only visual system
- giant empty hero
- stock engineering imagery
- fake terminal aesthetic that makes content harder to read
- visual clutter that obscures career evidence

Possible palette:

- background: off-white or near-black graphite
- text: ink/graphite or warm white
- surfaces: light gray, dark charcoal, or near-white
- accent: signal green, cyan, amber, or lime
- secondary accent: muted red or blue only if restrained

Use color to support hierarchy, not dominate the page.

## Layout Guidance

Mobile-first layout:

- stacked sections
- compact nav
- large enough touch targets
- cards at readable widths
- no horizontal scrolling
- no sticky elements that consume too much vertical space

Desktop layout:

- max-width content container
- asymmetric sections where useful
- side status rail or anchored nav if it improves scanning
- timeline that communicates overlap
- skill matrix with clear columns
- project/work grid with stable card heights

Wide desktop:

- do not stretch text lines too wide
- keep content bounded
- avoid empty hero wasteland
- show a hint of next section in first viewport if using hero-heavy layout

## Motion Guidance

Motion should be restrained.

Use:

- hover states
- focus states
- subtle reveal if implemented accessibly
- CSS transitions
- reduced motion support

Avoid:

- heavy animation frameworks unless approved
- animated backgrounds that distract
- motion required to understand content
- scroll-jacking
- text constantly changing while user is reading

## Technical Stack To Use

Use the installed stack:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui conventions
- lucide-react
- class-variance-authority
- clsx
- tailwind-merge
- tw-animate-css
- Redux Toolkit / RTK Query if justified
- Resend if contact form is implemented
- react-hook-form and zod if contact form is implemented

Server components by default.

Client components only for:

- mobile navigation
- theme toggle
- copy buttons
- contact form
- tabs
- accordions/collapsibles if the primitive requires client behavior
- filtered project views
- Redux provider if needed

Do not make the whole page a client component.

## Next.js 16 App Router Requirements

Before changing App Router-sensitive behavior, read installed docs in `node_modules/next/dist/docs/`.

Read docs before touching:

- metadata
- route handlers
- server actions
- caching
- revalidation
- image optimization
- font loading
- sitemap
- robots
- Open Graph images
- dynamic routes

Use modern App Router patterns:

- `src/app/layout.tsx` for root layout and base metadata
- `src/app/page.tsx` for homepage composition
- `src/app/api/contact/route.ts` for contact route if implemented
- route-level metadata where needed
- server-only utilities for secrets and email

## File Organization

Recommended final structure:

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
      selected-work.tsx
      skill-matrix.tsx
      education.tsx
      contact.tsx
      section-heading.tsx
    site/
      site-header.tsx
      site-footer.tsx
      mobile-nav.tsx
    ui/
      button.tsx
      badge.tsx
      card.tsx
      ...
  data/
    profile.ts
    experience.ts
    education.ts
    skills.ts
    projects.ts
    navigation.ts
  lib/
    utils.ts
    seo.ts
    mail.ts
  lib/api/
    github-api.ts
  store/
    index.ts
```

Only create what is needed.

Do not create architecture theater.

## Data Modeling Requirements

Move repeated content into typed data modules.

Recommended types:

```ts
type VerificationStatus = "cv-backed" | "user-supplied" | "github-verified" | "needs-verification";

type Experience = {
  company: string;
  role?: string;
  derivedRole?: boolean;
  location?: string;
  period: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  domains: string[];
  summary: string;
  highlights: string[];
  stack?: string[];
  verification: VerificationStatus;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Array<{
    name: string;
    context: "current role" | "professional experience" | "training" | "working knowledge";
  }>;
};

type SelectedWork = {
  title: string;
  source: string;
  summary: string;
  contributions: string[];
  stack: string[];
  links?: {
    repo?: string;
    live?: string;
  };
  verification: VerificationStatus;
};
```

Use types to prevent vague or unsourced content.

## Static Data Baseline

Create profile data similar to:

```ts
export const profile = {
  firstName: "Leon",
  lastName: "Oruko",
  displayName: "Leon Oruko",
  avatar: "/assets/profile-picture.jpeg",
  avatarAlt: "Portrait of Leon Oruko",
  location: "Nairobi, Kenya",
  email: "orukoleon94@gmail.com",
  phone: "+254 711 223 713",
  github: "https://github.com/Leooruko",
  linkedinCandidate: "https://www.linkedin.com/in/leon-oruko",
  linkedinVerified: false,
  currentRole: "AI Engineer",
  currentCompany: "PixeSci",
  currentRoleStart: "June 2026",
  educationHeadline: "Electrical and Electronics Engineering student at JKUAT",
  positioning: "Engineering student building mobile, data, backend, and AI-enabled software systems.",
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Intermediate reading and listening" }
  ]
};
```

Adjust as implementation needs, but do not lose source constraints.

## Copywriting Rules

Tone:

- precise
- credible
- technical
- direct
- ambitious but not inflated
- evidence-led

Preferred style:

- short sentences
- concrete nouns
- active verbs
- clear dates
- clear technology references
- clear role boundaries

Avoid:

- `passionate developer`
- `innovative solutions`
- `cutting-edge technology`
- `world-class`
- `expert`
- `guru`
- `visionary`
- `transforming the future`
- `full-stack wizard`
- empty hype

Good copy patterns:

- `Builds mobile, data, backend, and AI workflows from an engineering foundation.`
- `Developed and launched a TV streaming application on Google Play Store.`
- `Creates backend APIs and orchestration flows for AI-enabled product workflows.`
- `Works with dashboards, predictive models, and client-facing data applications.`
- `Studies electrical and electronics engineering while applying software to communication and digital service problems.`

Do not include lorem ipsum or visible TODO copy in final UI.

## Claims And Evidence Matrix

Use this matrix to decide what can be stated.

### Safe Claims

- Leon is based in Nairobi, Kenya.
- Leon studies Electrical and Electronics Engineering at JKUAT.
- Leon has training from Explore AI Academy.
- Leon has programming training from Modcom Digital Literacy Institute.
- Leon has worked with Python, SQL, JavaScript, C, C++, React, React Native, Flutter, Jupyter Notebook, Git, Azure, and Power BI according to the CV.
- Leon worked as Application Developer at Tunyce Media Company from 2023-2025.
- Leon developed and launched a TV streaming application on Google Play Store.
- Leon worked as Data Application Developer at Bright Com Investments Limited from 2025-2026.
- Leon built Power BI dashboards for customer behavior trends.
- Leon developed a mobile application for client behavior tracking.
- Leon worked with non-technical staff to improve data application usability.
- Leon integrated linear prediction models for customer behavior analysis.
- Leon worked with Green Com Enterprise Solutions from 2025-present on dataset preparation and ML models.
- Leon is AI Engineer at PixeSci from June 2026-present based on user-supplied instructions.
- Leon works with OpenAI APIs, Anthropic APIs, FastAPI, AI orchestration, tool calling, prompt design, and model evaluation in the PixeSci role based on user-supplied instructions.

### Claims Requiring Verification

- specific GitHub repository names
- GitHub language statistics
- live deployment URLs
- LinkedIn URL validity
- exact PixeSci product details beyond supplied responsibilities
- exact Green Com title
- specific app name from Tunyce
- screenshots
- user counts
- model accuracy
- business outcomes
- availability for contract/full-time work
- resume download path unless a public PDF is added

### Prohibited Claims Unless User Supplies Proof

- senior AI engineer
- lead engineer
- founder
- enterprise-scale platform owner
- millions of users
- revenue impact
- app store ratings
- model accuracy percentages
- awards
- certifications not listed
- client names beyond CV employers
- testimonials
- publications

## SEO Requirements

Use accurate metadata.

Potential title:

- `Leon Oruko | Software, Data & AI Engineer`

Alternative title:

- `Leon Oruko | Engineering Student, AI & Data Applications`

Potential description:

- `Nairobi-based Electrical and Electronics Engineering student building mobile, data, backend, and AI-enabled software systems.`

Potential keywords:

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
- OpenAI API
- Anthropic API

If adding JSON-LD:

- use `Person`
- use verified sameAs links only
- include `email` if appropriate
- include `jobTitle` carefully, such as `AI Engineer`
- include `alumniOf` only for completed or current education with dates if represented accurately
- do not add unsupported awards, affiliations, or credentials

## Accessibility Requirements

Implementation must include:

- semantic `header`
- semantic `nav`
- semantic `main`
- semantic `section`
- semantic `footer`
- logical heading order
- visible focus states
- accessible names for icon buttons
- accessible names for external links
- sufficient contrast
- keyboard operability
- reduced motion support
- meaningful `alt` text for meaningful images
- decorative images with empty `alt`
- no hover-only essential interactions
- no color-only status indicators
- comfortable touch targets

Check keyboard navigation manually if possible.

## Responsive Requirements

Verify at:

- 360px
- 390px
- 768px
- 1024px
- 1440px

Look for:

- clipped text
- overlapped UI
- cards too narrow
- buttons wrapping badly
- fixed-height traps
- sticky nav covering anchors
- timeline unreadability
- skill tags causing horizontal scroll
- contact links too small
- project cards uneven in a jarring way

Use stable dimensions for:

- nav items
- icon buttons
- status chips
- project cards
- skill cards
- timeline entries

## Performance Requirements

Keep the site light.

Do:

- use CSS where possible
- use server components for static content
- avoid unnecessary client JavaScript
- avoid heavy animation dependencies
- optimize local images if added
- keep data local unless external fetching is needed

Do not:

- add analytics without user request
- add CMS
- add database
- add auth
- add complex state management for static content
- load giant remote images

## Contact Form Implementation Details

Only implement a contact form if explicitly included in the build scope.

If implemented:

- create `src/app/api/contact/route.ts`
- use `zod` for validation
- use `resend` server-side
- use environment variables:
  - `RESEND_API_KEY`
  - `CONTACT_FROM_EMAIL`
  - `CONTACT_TO_EMAIL`
- return clear JSON responses
- avoid leaking stack traces
- handle missing env variables gracefully
- rate limiting is ideal but not required unless requested
- use `react-hook-form` for client form handling if using a client form
- provide accessible loading, success, and error states

If not implemented:

- include mailto link
- include GitHub link
- include phone link if appropriate
- include LinkedIn after verification

## Theme Guidance

A theme toggle is optional.

If implementing both light and dark:

- both must be fully designed
- both must pass contrast
- both must be tested
- avoid dark-mode-only thinking
- persist preference only in a client component
- do not create a flash that makes content unreadable

If implementing one theme:

- make it polished
- ensure it does not look like a default starter
- avoid one-note color families

## Navigation Guidance

Use compact navigation.

Possible nav links:

- Focus
- Experience
- Work
- Stack
- Education
- Contact

Requirements:

- usable on mobile
- accessible labels
- visible focus
- no hover-only menus
- no giant nav covering content
- anchor offsets considered if nav is sticky

Mobile nav:

- use a simple menu/dialog if needed
- keep tap targets large
- close on link click
- label the menu button

## Component Guidance

Recommended components:

- `Hero`
- `SignalPanel`
- `CurrentFocus`
- `ExperienceTimeline`
- `ExperienceItem`
- `SelectedWork`
- `WorkCard`
- `SkillMatrix`
- `SkillGroup`
- `EducationTimeline`
- `ContactPanel`
- `SiteHeader`
- `SiteFooter`
- `SectionHeading`

Keep components small enough to read.

Avoid:

- one giant homepage component
- prop drilling that makes data hard to follow
- deeply nested cards
- generic component names that hide intent

## Styling Guidance

Use Tailwind CSS 4 and local CSS variables.

In `globals.css`:

- define base theme tokens
- define typography defaults
- define focus ring behavior
- define reduced motion rules
- define body background and text

Use utility classes for layout and component styling.

Avoid:

- inline styles unless necessary
- global CSS for component-specific details unless reusable
- magical viewport font scaling
- negative letter spacing
- one-off arbitrary values everywhere without pattern

## shadcn/ui Usage

Use shadcn/ui conventions but keep the site custom.

Already present:

- `components.json`
- utility helper likely in `src/lib/utils.ts`
- dependencies for common primitives

Use primitives only when needed:

- Button
- Badge
- Card
- Tabs
- Accordion
- Dialog
- Form

Do not add components just because they exist.

Cards should be for:

- repeated project entries
- repeated experience entries
- framed status tools
- compact skill groups

Do not make every page section a floating card.

## Redux Toolkit / RTK Query Usage

Do not use Redux for static portfolio data.

Use Redux only if:

- client-side GitHub search/filtering is added
- shared client state becomes meaningful
- RTK Query is used for GitHub API or another external API
- the user requests state-managed interactions

If not needed, leave `src/store` unused or minimal.

## Implementation Sequence

Follow this sequence:

1. Run `git status --short`.
2. Read `AGENTS.md`.
3. Read this prompt.
4. Extract or inspect `docs/Leon_Oruko_CV.pdf`.
5. Inspect current code and package files.
6. Read relevant Next.js docs before framework-sensitive edits.
7. Decide information architecture.
8. Decide visual concept.
9. Create typed data modules.
10. Establish global styling and theme tokens.
11. Build site shell.
12. Build hero.
13. Build current focus section.
14. Build experience timeline.
15. Build selected work/project section.
16. Build skill matrix.
17. Build education section.
18. Build contact section.
19. Add metadata and SEO.
20. Add contact route only if in scope.
21. Test responsive layouts.
22. Run `npm run lint`.
23. Run `npm run build`.
24. Report results and any limitations.

## Phase 0: Pre-Implementation Audit

Before coding, answer these internally:

- Are dependencies installed?
- Does `node_modules/next/dist/docs/` exist?
- What Next.js version is installed?
- What Tailwind version is installed?
- Does `components.json` match the expected aliases?
- Does `src/lib/utils.ts` already provide `cn`?
- Are there existing components to preserve?
- Is there any user work in git status?
- Are there untracked files that matter?
- Is a public resume copy needed?
- Is `public/assets/profile-picture.jpeg` present and usable as Leon's profile image?
- Is GitHub accessible?
- Is LinkedIn verified?
- Is contact form in scope?

Do not skip this audit on a non-trivial implementation.

## Phase 1: Data Foundation

Create typed data first.

Files likely needed:

- `src/data/profile.ts`
- `src/data/experience.ts`
- `src/data/education.ts`
- `src/data/skills.ts`
- `src/data/projects.ts`
- `src/data/navigation.ts`

Data should be imported by components.

Do not bury content in JSX.

Include verification metadata internally where useful.

## Phase 2: Visual Foundation

Establish:

- page background
- text color
- accent color
- border color
- focus ring
- section spacing
- typography scale
- responsive container
- reduced motion behavior

Do this before building many sections so the UI feels coherent.

## Phase 3: Homepage Composition

Build `src/app/page.tsx` as a server component that composes section components.

Example:

```tsx
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CurrentFocus />
        <ExperienceTimeline />
        <SelectedWork />
        <SkillMatrix />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
```

Do not include all section markup directly in `page.tsx` unless the project remains extremely small.

## Phase 4: Verification

Run:

```bash
npm run lint
npm run build
```

If errors occur:

- fix implementation errors
- do not hide errors
- do not disable rules without a good reason
- report unresolved issues clearly

If browser verification is feasible:

- start dev server
- inspect desktop
- inspect mobile
- capture screenshots if necessary
- fix layout issues

## Content Drafts

Use these as starting points, not mandatory final copy.

### Hero Draft

`Leon Oruko builds mobile, data, backend, and AI-enabled software systems from an electrical and electronics engineering foundation. Based in Nairobi, he studies at JKUAT and works as an AI Engineer at PixeSci, where he contributes to AI features, FastAPI services, model orchestration, tool-calling workflows, and automation modules.`

### Current Focus Draft

`Current work sits across AI product engineering, backend APIs, structured prompt and tool-calling workflows, model evaluation, and practical automation. Earlier experience adds mobile application development, Power BI dashboards, predictive modeling, and client-facing data tools.`

### PixeSci Draft

`Designs and implements AI-powered product features with OpenAI and Anthropic APIs, develops FastAPI services for AI workflows, and builds orchestration logic that coordinates model interactions, backend services, and application behavior.`

### Tunyce Draft

`Worked on a TV streaming application released on Google Play Store, building Flutter and React Native features, collaborating with the development team, and resolving technical issues that affected user experience.`

### Bright Com Draft

`Built Power BI dashboards and a mobile behavior-tracking application, collaborated with non-technical staff on usability, and integrated linear prediction models for customer behavior analysis.`

### Green Com Draft

`Prepared client datasets for analysis and developed machine learning models to examine behavioral patterns in client data.`

### Contact Draft

`For software, data, mobile, and AI engineering opportunities, reach Leon by email or review his public GitHub work.`

Only use contact availability language if it is appropriate and not misleading.

## Selected Work Draft Structure

If GitHub verification is not available, use this structure:

### AI Orchestration And Backend Workflows

- Source: PixeSci role
- Verification: user-supplied role detail
- Stack: OpenAI APIs, Anthropic APIs, FastAPI, backend APIs, structured prompts, tool calling
- Contribution: AI feature implementation, model/API evaluation, orchestration pipelines, documentation

### TV Streaming Mobile Application

- Source: Tunyce Media Company role
- Verification: CV-backed
- Stack: Flutter, React Native
- Contribution: mobile app features, Google Play launch involvement, debugging, UX improvements

### Customer Behavior Data Tools

- Source: Bright Com Investments Limited role
- Verification: CV-backed
- Stack: Power BI, mobile application, predictive modeling
- Contribution: dashboards, behavior tracking app, linear prediction models, staff usability collaboration

### Behavioral Pattern Modeling

- Source: Green Com Enterprise Solutions role
- Verification: CV-backed
- Stack: data preprocessing, machine learning
- Contribution: dataset cleaning, model development, behavioral pattern analysis

If GitHub repositories are verified, add them as public projects with links.

## Anti-Pattern Checklist

Do not ship the portfolio if it contains:

- lorem ipsum
- placeholder visible text
- fake metrics
- fake testimonials
- invented project names
- copied Japheth content
- default Next.js starter styling
- inaccessible icon buttons
- horizontal overflow on mobile
- hidden contact paths
- giant client component for static content
- unverified GitHub claims
- broken LinkedIn link
- contact form pretending to send email
- lint failures
- build failures

## Final Acceptance Criteria

The implementation is successful when:

- the site is clearly Leon Oruko's portfolio
- the design is distinct from the reference portfolio
- the hero communicates who Leon is and what he builds
- the PixeSci AI Engineer role is visible and accurately framed
- all CV roles are represented
- education is present and compact
- skills are grouped meaningfully
- project/work entries are sourced and not invented
- contact paths are easy to find
- metadata is accurate
- layout is responsive
- accessibility basics are met
- `npm run lint` passes
- `npm run build` passes
- no unrelated user changes were reverted

## Final Reporting Requirements

When implementation is complete, report:

- files changed
- main sections built
- data sources used
- verification commands run
- any commands that failed
- any unverified content left intentionally conservative
- any recommended follow-up, such as verifying LinkedIn, confirming whether to use a different profile photo, adding GitHub project screenshots, or confirming the Green Com title

Keep the final report concise.

## Future Content Questions For The User

If the user wants a final polish pass, ask for:

- verified LinkedIn URL
- exact Green Com Enterprise Solutions title
- whether Leon wants phone number visible
- whether Leon wants direct availability language
- whether the supplied profile photo at `/assets/profile-picture.jpeg` should be replaced or retouched
- whether a downloadable CV should be exposed publicly
- which GitHub repositories should be featured
- whether the Tunyce TV streaming app can be named
- whether any project screenshots are available
- whether PixeSci details can include public product links

Do not block the initial build on these questions unless required by the requested scope.
