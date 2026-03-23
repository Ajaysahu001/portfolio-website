import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data";
import { siteConfig, buildUrl } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Ajay Sahu's front-end development projects — React.js, Next.js, Redux, and Tailwind CSS applications built with performance and UX in mind.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Ajay Sahu",
    description:
      "Explore front-end projects built with React.js, Next.js, Redux, and Tailwind CSS.",
    url: buildUrl("/projects"),
    type: "website",
  },
};

export default function ProjectsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: buildUrl("/projects") },
    ],
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <Link href="/" className="hover:text-violet-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white/70" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              All{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              A collection of front-end projects showcasing React.js, Next.js, and modern
              web development practices.
            </p>
          </header>

          {/* Project list */}
          <ul className="grid md:grid-cols-2 gap-6" role="list">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block p-8 rounded-2xl border border-white/10 bg-white/3 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300"
                >
                  <article>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} text-white text-xl font-bold mb-5`}
                      aria-hidden="true"
                    >
                      {project.icon}
                    </div>

                    <h2 className="text-white font-bold text-xl mb-2 group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1 mt-5 text-violet-400 text-sm font-medium group-hover:gap-2 transition-all">
                      <span>View details</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>

          {/* Back link */}
          <div className="mt-16 text-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-white/40 hover:text-violet-400 transition-colors text-sm"
            >
              <span aria-hidden="true">←</span>
              Back to portfolio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
