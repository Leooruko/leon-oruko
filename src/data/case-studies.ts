export type CaseStudyStage = {
  stage: string;
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  oneLiner: string;
  stages: CaseStudyStage[];
  related: {
    label: string;
    description: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "conversational-ai-for-lending-operations",
    title: "Conversational AI for Lending Operations",
    client: "A Kenyan lending / microfinance business",
    oneLiner:
      "Giving a lending business a plain-language, action-taking interface to its own operational data.",
    stages: [
      {
        stage: "Problem",
        heading: "Operational answers were locked behind SQL and a developer's time",
        body: [
          "The client is a Kenyan lending/microfinance business. Like most operations of its kind, the day-to-day questions that actually mattered — who's overdue, what does this week's exposure look like, has a given client's status changed — lived inside a database and an ERP system that only technical staff could query directly.",
          "Getting an answer meant one of three things: someone learned enough SQL to ask it themselves, a developer got pulled off other work to run a query, or an operator dug through a fixed dashboard that usually didn't ask the question they actually had that day. None of those scale well, and all three create a lag between \"I need to know this\" and \"I know this\" that a lending operation, where timing on follow-up matters, can't really afford.",
        ],
      },
      {
        stage: "What I discovered",
        heading: "Answering the question was only half the job",
        body: [
          "Before building anything, the actual constraint wasn't technical capability — LLMs answering questions about a database is a well-understood pattern by now. The constraint was that an operator who learns an account is overdue doesn't just want that fact; they want to do something about it — send a reminder, place a call, flag it for follow-up.",
          "If the system that answers the question can't also take the action, the operator is right back to switching tools and losing time. That reframed the problem from \"build a chatbot over a database\" to \"build an agent that can both answer and act, inside the channels the business already uses to communicate with its clients.\"",
        ],
      },
      {
        stage: "Why this solution",
        heading: "A tool-calling agent, not a dashboard or a single-purpose bot",
        body: [
          "A static dashboard or a report generator was ruled out early — neither closes the loop between \"here's the answer\" and \"here's the action taken.\" A narrower, single-purpose bot (an SMS-only reminder tool, for example) would have solved one channel and left the broader \"ask a plain-language question about operations\" need unaddressed.",
          "A tool-calling LLM agent architecture — where the model decides which capability to invoke, rather than being hardcoded to one workflow — was the shape that covered both the question-answering and the action-taking needs without building a separate single-purpose tool for every case.",
        ],
      },
      {
        stage: "What I built",
        heading: "An internal, staff-facing agent connected to live operational data",
        body: [
          "An internal AI agent platform that the business's own operators and management use to interact with its live operational data in plain language, and act on what it finds. It's built from a small number of cooperating pieces rather than one monolithic script:",
          "A tool-calling agent sits at the entry point of every conversation, deciding which capability to invoke rather than following a fixed script. A natural-language-to-SQL layer translates an operator's question into a real query against the live database — not a cached export or a pre-built report. Multi-channel action tools let the agent send SMS, send email, create calendar events, and — per recent, verified commit history — place outbound calls through a voice pipeline built around speech-to-text and text-to-speech. A background monitoring and escalation engine watches for conditions worth flagging, such as an account crossing a risk threshold, and surfaces them without being asked, rather than the system being purely request-driven.",
        ],
      },
      {
        stage: "How it worked",
        heading: "Built and refined over ten weeks of real use, not a one-shot demo",
        body: [
          "The most consequential engineering decision, visible directly in the commit history, was a mid-project restructuring. The system's earlier version was built with its core logic as flat, root-level modules. As the system grew, that structure stopped scaling, and the codebase was refactored into a layered architecture that separates agents, engines, model access, services, and integrations from each other — a migration the project's own documentation still describes as real but not finished, which is a more honest signal than a rewrite that claims to be complete when it isn't.",
          "The second deliberate choice was scoping this to internal staff rather than the business's own customers. A customer-facing lending chatbot is a harder trust and compliance problem — it exposes an LLM directly to clients and their financial data. Scoping to internal operators first got a working, useful system into real use without taking on that risk before the core pattern was proven.",
          "This isn't a demo running against sample data. The agent queries the business's live operational database directly, and its action tools reach real communication channels the business already uses with real clients. The system has been in sustained, iterative development over roughly ten weeks, through a normal pull-request workflow with multiple merged changes — not a single \"finished\" commit, which is a common tell for something that was actually used and refined based on what came up.",
        ],
      },
      {
        stage: "What became possible",
        heading: "A capability that didn't exist before, now in active use",
        body: [
          "Before this existed, getting an answer about operational status required either technical skill or a developer's time, and taking action on that answer meant switching to a separate tool or workflow. With it, an operator can ask a plain-language question and, in the same conversation, act on the answer — through SMS, email, calendar, or an in-progress voice channel — without leaving the interface or waiting on someone else.",
          "There's no time-saved metric or adoption percentage attached to this, because none exists in the evidence available. The honest claim is a capability that didn't exist before now exists and is in active use — not a quantified business result.",
        ],
      },
      {
        stage: "Engineering tradeoffs",
        heading: "Being direct about the maturity ceiling",
        body: [
          "Documentation lags the code — the system's own README describes an older layout than what's actually in the repository, a real gap that's also a normal symptom of active development outpacing documentation upkeep.",
          "Natural-language-to-SQL carries inherent risk: translating a plain-language question into a database query isn't infallible, and there's no formal query-validation layer beyond the agent's own reasoning. The voice/calling capability is the least mature piece — real work exists toward it, but it hasn't been verified as fully production-ready end to end.",
          "This was built and iterated by one person, not a team with dedicated QA or a separate security review process, which is both the reason it could move quickly and a reason to be direct about the maturity ceiling that implies.",
        ],
      },
      {
        stage: "Related experience",
        heading: "Part of a repeatable pattern, not a one-off",
        body: [
          "The same client's loan-management platform — a separate frontend/backend system, not the AI agent above — shows sustained full-stack delivery over several months: a mobile client, two backend generations, a database migration in progress, and real production concerns like proxy configuration, SSL, and a reporting integration.",
          "A second, independent project follows the same underlying pattern — an agent connected to a business's own operational data — for a different client in a different domain, and is live-deployed. Two separate clients, two separate domains, same core approach: the strongest available evidence that this is a repeatable way of working, not a lucky one-off.",
        ],
      },
    ],
    related: [
      {
        label: "Full-stack delivery, same client",
        description:
          "A separate loan-management platform for the same business: mobile client, two backend generations, an in-progress database migration, and production concerns like SSL and reporting integration.",
      },
      {
        label: "Same pattern, different domain",
        description:
          "A second, independently built agent connected to a different business's own operational data — live-deployed, for a dairy-processing operation.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((entry) => entry.slug === slug);
}
