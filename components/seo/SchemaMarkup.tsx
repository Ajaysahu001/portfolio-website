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
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "RESTful APIs",
      "Performance Optimization",
      "Front-end Development",
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
      skills: "React.js, Next.js, Redux, Tailwind CSS, TypeScript, JavaScript",
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
