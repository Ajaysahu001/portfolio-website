import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import { siteConfig, buildUrl } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

// ─── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ─── Per-page metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    keywords: project.keywords,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Ajay Sahu`,
      description: project.description,
      url: buildUrl(`/projects/${project.slug}`),
      type: "article",
      publishedTime: project.datePublished,
      authors: [siteConfig.url],
      tags: project.keywords,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.title} — Ajay Sahu`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Ajay Sahu`,
      description: project.description,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectIdx = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[projectIdx - 1] ?? null;
  const nextProject = projects[projectIdx + 1] ?? null;

  // Structured data for this project page
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": buildUrl(`/projects/${project.slug}`),
    name: project.title,
    url: buildUrl(`/projects/${project.slug}`),
    description: project.longDescription,
    datePublished: project.datePublished,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: project.keywords.join(", "),
    programmingLanguage: project.tech,
    image: buildUrl("/opengraph-image"),
    mainEntityOfPage: { "@type": "WebPage", "@id": buildUrl(`/projects/${project.slug}`) },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: buildUrl("/projects") },
      { "@type": "ListItem", position: 3, name: project.title, item: buildUrl(`/projects/${project.slug}`) },
    ],
  };

  return (
    <>
      <JsonLd schema={projectSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/projects" className="hover:text-violet-400 transition-colors">Projects</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white/70" aria-current="page">{project.title}</li>
            </ol>
          </nav>

          {/* Article */}
          <article itemScope itemType="https://schema.org/CreativeWork">
            {/* Project icon + header */}
            <header className="mb-12">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} text-white text-2xl font-bold mb-6 shadow-lg`}
                aria-hidden="true"
              >
                {project.icon}
              </div>

              {/* Date */}
              <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
                <time dateTime={project.datePublished} itemProp="datePublished">
                  {new Date(project.datePublished).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </p>

              <h1
                className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
                itemProp="name"
              >
                {project.title}
              </h1>

              <p className="text-white/60 text-lg leading-relaxed" itemProp="description">
                {project.description}
              </p>
            </header>

            {/* Tech stack */}
            <section aria-label="Technologies used" className="mb-10">
              <h2 className="text-white/40 text-xs uppercase tracking-widest mb-3">
                Technologies
              </h2>
              <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium"
                    itemProp="keywords"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            {/* Highlights */}
            <section aria-label="Project highlights" className="mb-10">
              <h2 className="text-white/40 text-xs uppercase tracking-widest mb-3">
                Highlights
              </h2>
              <ul className="grid grid-cols-2 gap-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-white/60 text-sm">
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mt-1.5 shrink-0`}
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Long description */}
            <section aria-label="Project details" className="mb-12">
              <h2 className="text-white/40 text-xs uppercase tracking-widest mb-4">
                Overview
              </h2>
              <p
                className="text-white/60 leading-relaxed text-base"
                itemProp="abstract"
              >
                {project.longDescription}
              </p>
            </section>

            {/* Links */}
            <section aria-label="Project links" className="flex flex-wrap gap-4 mb-16">
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                  aria-label={`Live demo of ${project.title}`}
                >
                  Live Demo
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:border-violet-400/50 hover:text-white transition-all"
                  aria-label={`View source code for ${project.title} on GitHub`}
                >
                  View Code
                  <span aria-hidden="true">⌥</span>
                </a>
              )}
            </section>
          </article>

          {/* Prev / Next navigation */}
          <nav aria-label="Project navigation" className="border-t border-white/10 pt-10">
            <div className="flex justify-between gap-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex flex-col gap-1 max-w-[45%]"
                  rel="prev"
                >
                  <span className="text-white/30 text-xs uppercase tracking-widest">← Previous</span>
                  <span className="text-white/70 text-sm font-medium group-hover:text-violet-400 transition-colors line-clamp-1">
                    {prevProject.title}
                  </span>
                </Link>
              ) : <div />}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex flex-col gap-1 text-right max-w-[45%]"
                  rel="next"
                >
                  <span className="text-white/30 text-xs uppercase tracking-widest">Next →</span>
                  <span className="text-white/70 text-sm font-medium group-hover:text-violet-400 transition-colors line-clamp-1">
                    {nextProject.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
          </nav>

        </div>
      </main>
    </>
  );
}
