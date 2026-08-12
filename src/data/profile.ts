export const profile = {
  firstName: "Leon",
  lastName: "Oruko",
  displayName: "Leon Oruko",
  title: "Engineering Student | Software and Data Enthusiast",
  avatar: "/assets/profile-picture.jpeg",
  avatarAlt: "Portrait of Leon Oruko",
  location: "Nairobi, Kenya",
  email: "orukoleon94@gmail.com",
  phone: "+254 711 223 713",
  phoneHref: "tel:+254711223713",
  github: "https://github.com/Leooruko",
  resumeUrl: "/resume/Leon-Oruko-Resume.pdf",
  linkedinLabel: "linkedin.com/in/leon-oruko",
  linkedinCandidate: "https://www.linkedin.com/in/leon-oruko",
  linkedinVerified: true,
  currentRole: "AI Engineer",
  currentCompany: "PixeSci",
  currentRoleStart: "June 2026",
  educationHeadline:
    "Electrical and Electronics Engineering student at JKUAT",
  positioning:
    "I investigate operational problems, then build the systems that solve them.",
  summary:
    "The problems I look at are usually the same shape: business data trapped in a database, ERP, or spreadsheet that only a few people can use, workflows that never got automated, and tools that don't talk to each other. I investigate what's actually happening before proposing what to build, then choose the backend system, internal tool, or AI system that fits — not the other way around. That approach sits on top of an engineering background (Electrical and Electronics Engineering at JKUAT) and current work as an AI Engineer at PixeSci.",
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Intermediate reading and listening" },
  ],
} as const;

export const heroStats = [
  { label: "Role", value: "AI Engineer at PixeSci" },
  { label: "Location", value: "Nairobi, Kenya" },
  { label: "Education", value: "Electrical and Electronics Engineering, JKUAT" },
  { label: "I build", value: "AI workflows, mobile apps, data tools, backend APIs" },
] as const;

export const capabilitySignals = [
  "AI product workflows",
  "FastAPI services",
  "Mobile applications",
  "Power BI dashboards",
  "Predictive modelling",
  "Engineering systems",
] as const;
