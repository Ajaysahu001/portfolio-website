import JsonLd from "./JsonLd";
import { siteConfig, buildUrl } from "@/lib/seo";
import { projects, experience, education } from "@/lib/data";

/**
 * Root-level JSON-LD structured data (Person + WebSite + ItemList of projects).
 * Injected once in app/layout.tsx so every page inherits it.
 */
export default function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": buildUrl("/#person"),
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Front-end Developer",
    description: siteConfig.description,
    image: buildUrl("/opengraph-image"),
    sameAs: [siteConfig.github, siteConfig.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chitrakoot",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    knowsAbout: [
      "React.js", "Next.js", "JavaScript", "TypeScript",
      "Redux Toolkit", "Context API", "Tailwind CSS", "SCSS",
      "RESTful APIs", "Axios", "Figma", "Webpack", "Vite", "Babel",
      "Node.js", "Express.js", "MongoDB", "MERN Stack",
      "Lazy Loading", "Code Splitting", "Memoization", "SSR", "SSG",
      "Agile", "Scrum", "Front-end Development",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Full-Stack Web Development (MERN Stack)",
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "Ducat India",
          address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh" },
        },
      },
    ],
    alumniOf: education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      location: edu.location,
    })),
    worksFor: experience
      .filter((e) => e.current)
      .map((e) => ({
        "@type": "Organization",
        name: e.company,
        address: { "@type": "PostalAddress", addressLocality: e.location },
      }))[0],
    hasOccupation: {
      "@type": "Occupation",
      name: "Front-end Developer",
      occupationLocation: {
        "@type": "City",
        name: "Ahmedabad",
        containedInPlace: { "@type": "Country", name: "India" },
      },
      skills: "React.js, Next.js, Redux Toolkit, Context API, Tailwind CSS, TypeScript, JavaScript, SCSS, Node.js, MongoDB, Express.js, RESTful APIs, Axios, Figma",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": buildUrl("/#website"),
    url: siteConfig.url,
    name: `${siteConfig.name} Portfolio`,
    description: siteConfig.description,
    inLanguage: "en-IN",
    author: { "@id": buildUrl("/#person") },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Ajay Sahu",
    description: "A curated list of front-end development projects by Ajay Sahu",
    url: buildUrl("/projects"),
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        "@id": buildUrl(`/projects/${project.slug}`),
        name: project.title,
        url: buildUrl(`/projects/${project.slug}`),
        description: project.description,
        datePublished: project.datePublished,
        author: { "@id": buildUrl("/#person") },
        keywords: project.keywords.join(", "),
        programmingLanguage: project.tech,
        image: buildUrl("/opengraph-image"),
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <JsonLd schema={personSchema} />
      <JsonLd schema={websiteSchema} />
      <JsonLd schema={projectListSchema} />
      <JsonLd schema={breadcrumbSchema} />
    </>
  );
}
