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
  linkedinLabel: "linkedin.com/in/leon-oruko",
  linkedinCandidate: "https://www.linkedin.com/in/leon-oruko",
  linkedinVerified: true,
  currentRole: "AI Engineer",
  currentCompany: "PixeSci",
  currentRoleStart: "June 2026",
  educationHeadline:
    "Electrical and Electronics Engineering student at JKUAT",
  positioning:
    "I build across mobile, data, backend, and AI-enabled software systems while studying Electrical and Electronics Engineering at JKUAT.",
  summary:
    "I am a Nairobi-based Electrical and Electronics Engineering student at JKUAT and an AI Engineer at PixeSci. My work spans the intersection of software engineering, artificial intelligence, and data-driven systems, with a focus on building practical solutions for real-world challenges. I contribute to the development of AI-powered product features, FastAPI backend services, mobile applications, interactive dashboards, predictive models, and intelligent automation workflows designed to improve efficiency, usability, and decision-making. My interests include applied machine learning, backend architecture, workflow orchestration, data engineering, and creating scalable digital products that bridge engineering principles with modern AI technologies.",
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
