# Leon Oruko Portfolio

Personal portfolio for Leon Oruko. The public site is written in Leon's voice
and presents his engineering, software, data, mobile, backend, and AI work.

The site is implemented as a single-page Next.js App Router portfolio with
source-backed content from:

- `AGENTS.md`
- `docs/LEON_PORTFOLIO_IMPLEMENTATION_PROMPT.md`
- `docs/Leon_Oruko_CV.pdf`
- `public/assets/profile-picture.jpeg`

## Sections

- Hero / signal panel
- Current engineering focus
- Experience timeline
- GitHub activity map
- Technical stack
- Education
- Contact

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui conventions
- Redux Toolkit / RTK Query ready
- Resend ready for a future contact form

## Commands

```bash
npm run dev
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` in the deployment environment so Open Graph image
URLs resolve to the production domain.
