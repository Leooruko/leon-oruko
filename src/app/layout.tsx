import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const themeScript = `
(() => {
  const storedTheme = localStorage.getItem("theme") || "system";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = storedTheme === "dark" || (storedTheme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.dataset.theme = storedTheme;
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Leon Oruko | Software, Data & AI Engineer",
  description:
    "Nairobi-based Electrical and Electronics Engineering student building mobile, data, backend, and AI-enabled software systems.",
  keywords: [
    "Leon Oruko",
    "Nairobi",
    "Kenya",
    "JKUAT",
    "Electrical and Electronics Engineering",
    "AI Engineer",
    "Software Developer",
    "Data Applications",
    "Mobile Developer",
    "React Native",
    "Flutter",
    "FastAPI",
    "Python",
    "Power BI",
    "Machine Learning",
    "OpenAI API",
    "Anthropic API",
  ],
  authors: [{ name: "Leon Oruko" }],
  openGraph: {
    title: "Leon Oruko | Software, Data & AI Engineer",
    description:
      "Engineering student building mobile, data, backend, and AI-enabled software systems from Nairobi, Kenya.",
    type: "website",
    images: [
      {
        url: "/assets/profile-picture.jpeg",
        width: 460,
        height: 460,
        alt: "Portrait of Leon Oruko",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
