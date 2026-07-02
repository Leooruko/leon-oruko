export type SkillContext =
  | "current role"
  | "professional experience"
  | "training"
  | "working knowledge"
  | "engineering foundation";

export type SkillGroup = {
  title: string;
  description: string;
  skills: Array<{
    name: string;
    context: SkillContext;
  }>;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI and Backend",
    description:
      "My current PixeSci work across AI services, orchestration, prompts, tool use, and backend APIs.",
    skills: [
      { name: "OpenAI APIs", context: "current role" },
      { name: "Anthropic APIs", context: "current role" },
      { name: "FastAPI", context: "current role" },
      { name: "AI orchestration", context: "current role" },
      { name: "Tool calling", context: "current role" },
      { name: "Prompt design", context: "current role" },
      { name: "Agent logic", context: "current role" },
      { name: "Model evaluation", context: "current role" },
    ],
  },
  {
    title: "Data and Modeling",
    description:
      "Dashboarding, preprocessing, prediction, and machine learning from my training and roles.",
    skills: [
      { name: "Python", context: "working knowledge" },
      { name: "SQL", context: "working knowledge" },
      { name: "Jupyter Notebook", context: "training" },
      { name: "Power BI", context: "professional experience" },
      { name: "Machine Learning", context: "professional experience" },
      { name: "Data Preprocessing", context: "professional experience" },
      { name: "Predictive Modelling", context: "professional experience" },
      { name: "Linear prediction models", context: "professional experience" },
    ],
  },
  {
    title: "Applications",
    description:
      "Mobile and interface development experience, including Google Play Store launch exposure.",
    skills: [
      { name: "React", context: "working knowledge" },
      { name: "React Native", context: "professional experience" },
      { name: "Flutter", context: "professional experience" },
      { name: "JavaScript", context: "working knowledge" },
      { name: "Mobile app development", context: "professional experience" },
      { name: "Debugging", context: "professional experience" },
    ],
  },
  {
    title: "Engineering Foundation",
    description:
      "Electrical and electronics engineering studies connected to communication and digital service systems.",
    skills: [
      { name: "C", context: "engineering foundation" },
      { name: "C++", context: "engineering foundation" },
      { name: "Git", context: "working knowledge" },
      { name: "Azure", context: "working knowledge" },
      { name: "Communication systems", context: "engineering foundation" },
      { name: "Digital infrastructure", context: "engineering foundation" },
    ],
  },
];
