// Central SEO configuration — update BASE_URL when deploying
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ajaysahu.dev";

export const siteConfig = {
  name: "Ajay Sahu",
  url: BASE_URL,
  title: "Ajay Sahu — Front-end Developer | React.js & Next.js Expert",
  shortTitle: "Ajay Sahu",
  description:
    "Front-end Developer with 3+ years of experience building high-performance, responsive web applications using React.js and Next.js. Expert in Redux, Tailwind CSS, TypeScript, and RESTful API integration.",
  tagline: "Crafting exceptional digital experiences",
  locale: "en_IN",
  twitterHandle: "@ajaysahu001",
  email: "ajay.sahuchitrakoot@gmail.com",
  github: "https://github.com/Ajaysahu001",
  linkedin: "https://linkedin.com/in/ajaysahu001",
  location: "Chitrakoot, Madhya Pradesh, India",
  keywords: [
    "Ajay Sahu",
    "Front-end Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Redux",
    "Tailwind CSS",
    "SCSS",
    "RESTful API",
    "Web Developer India",
    "Frontend Engineer",
    "UI Developer",
    "React Portfolio",
    "Next.js Portfolio",
    "Performance Optimization",
    "State Management",
    "Responsive Web Design",
    "Lucent Innovation",
  ],
};

export function buildUrl(path: string) {
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
