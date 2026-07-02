export type Experience = {
  company: string;
  role?: string;
  location?: string;
  period: string;
  current?: boolean;
  domains: string[];
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "PixeSci",
    role: "AI Engineer",
    period: "June 2026-present",
    current: true,
    domains: ["AI", "Backend", "Automation"],
    summary:
      "I build AI-powered product features, backend services, orchestration flows, and model evaluation workflows.",
    highlights: [
      "I implement AI-powered features with OpenAI and Anthropic APIs.",
      "I develop FastAPI backend services for AI workflows and application services.",
      "I design orchestration pipelines that coordinate model calls, application logic, and backend services.",
      "I build structured prompts, tool-calling workflows, and agent logic for more reliable AI behavior.",
      "I prototype screen-control and computer-interaction modules for workflow automation.",
      "I evaluate new models and APIs, then document implementation choices for engineering teams.",
    ],
    stack: [
      "OpenAI APIs",
      "Anthropic APIs",
      "FastAPI",
      "Tool calling",
      "Prompt design",
      "AI orchestration",
    ],
  },
  {
    company: "Tunyce Media Company",
    role: "Application Developer",
    location: "Nairobi",
    period: "2023-2025",
    domains: ["Mobile", "Product", "Debugging"],
    summary:
      "I worked on a TV streaming application released on Google Play Store, with Flutter and React Native feature work.",
    highlights: [
      "I developed and launched a TV streaming application on Google Play Store.",
      "I built application features using Flutter and React Native.",
      "I collaborated with a development team to enhance app functionality.",
      "I diagnosed and resolved technical issues affecting user experience.",
    ],
    stack: ["Flutter", "React Native", "Mobile development"],
  },
  {
    company: "Bright Com Investments Limited",
    role: "Data Application Developer",
    location: "Nairobi",
    period: "2025-2026",
    domains: ["Data", "Mobile", "Prediction"],
    summary:
      "I built customer behavior dashboards, mobile tracking tools, and linear prediction workflows for data applications.",
    highlights: [
      "I built Power BI dashboards to analyze customer behavior trends.",
      "I developed a mobile application to track client behavior.",
      "I worked with non-technical staff to improve usability of data applications.",
      "I integrated linear prediction models to analyze customer behavior.",
    ],
    stack: ["Power BI", "Mobile application", "Predictive modelling"],
  },
  {
    company: "Green Com Enterprise Solutions",
    role: "Data and Machine Learning Contributor",
    location: "Thika Road",
    period: "2025-present",
    current: true,
    domains: ["Data Preparation", "Machine Learning"],
    summary:
      "I prepare client datasets for analysis and develop models to examine behavioral patterns in client data.",
    highlights: [
      "I cleaned and prepared client datasets for analysis.",
      "I developed machine learning models using client datasets to analyze behavioral patterns.",
    ],
    stack: ["Data preprocessing", "Machine learning", "Behavioral analysis"],
  },
];
