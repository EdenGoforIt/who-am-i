import { getProjectBySlug, projects } from "@/data/projects";
import { baseUrl } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function ProjectExternalLinks({
  project
}: {
  project: ReturnType<typeof getProjectBySlug>;
}): React.JSX.Element | null {
  if (!project) {
    return null;
  }

  const urls = project.urls;

  const links = [
    urls?.github ? { label: "GitHub", href: urls.github } : null,
    urls?.live ? { label: "Live Site", href: urls.live } : null,
    urls?.web ? { label: "Website", href: urls.web } : null,
    urls?.android ? { label: "Play Store", href: urls.android } : null,
    urls?.ios ? { label: "App Store", href: urls.ios } : null,
    ...(urls?.articles?.map((url, index) => ({
      label: urls.articles!.length > 1 ? `Article ${index + 1}` : "Article",
      href: url
    })) ?? [])
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={`${link.label}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-navy-lightest text-sm font-mono text-slate-lighter bg-navy-light transition-all duration-200 hover:border-green hover:text-green hover:bg-navy"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found."
    };
  }

  return {
    title: `${project.title} — Eden Park | Software Engineer`,
    description: project.description,
    alternates: { canonical: `${baseUrl}/projects/${project.slug}` }
  };
}

export default async function ProjectDetailPage({
  params
}: ProjectPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 lg:px-[150px] py-12 max-w-[1600px] mx-auto">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/projects"
          className="mt-12 inline-flex items-center gap-2 mb-6 text-sm font-mono text-green transition-colors duration-200 hover:text-slate-lighter"
        >
          <span aria-hidden="true">&larr;</span>
          Back to projects
        </Link>

        {/* Project Header */}
        <header className="mb-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-lighter mb-4">
            {project.title}
          </h1>
          <p className="text-justify text-lg leading-7 text-slate">
            {project.companyDescription}&nbsp;{project.description}
          </p>
        </header>

        {/* Links */}
        <div className="mb-4">
          <ProjectExternalLinks project={project} />
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-slate-lighter mb-4">What I did</h2>
          {project.workSections && project.workSections.length > 0 ? (
            <div className="space-y-4">
              {project.workSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-navy-lightest bg-navy-light p-6 md:p-8"
                >
                  <h3 className="text-xl font-semibold text-slate-lighter mb-3">{section.title}</h3>
                  {section.description && (
                    <p className="text-slate text-sm leading-6 mb-3 opacity-80">
                      {section.description}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate leading-7">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {section.images && section.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {section.images.map((src) => (
                        <div
                          key={src}
                          className="relative h-20 w-32 overflow-hidden rounded-lg border border-navy-lightest"
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            className="object-cover transition-opacity duration-200 hover:opacity-80"
                            sizes="128px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {section.urls && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        section.urls.github ? { label: "GitHub", href: section.urls.github } : null,
                        section.urls.live ? { label: "Live Site", href: section.urls.live } : null,
                        section.urls.web ? { label: "Website", href: section.urls.web } : null,
                        section.urls.android
                          ? { label: "Play Store", href: section.urls.android }
                          : null,
                        section.urls.ios ? { label: "App Store", href: section.urls.ios } : null,
                        ...(section.urls.articles?.map((url, i) => ({
                          label:
                            section.urls!.articles!.length > 1 ? `Article ${i + 1}` : "Article",
                          href: url
                        })) ?? [])
                      ]
                        .filter((link): link is { label: string; href: string } => Boolean(link))
                        .map((link) => (
                          <a
                            key={`${link.label}-${link.href}`}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-navy-lightest text-xs font-mono text-slate-lighter bg-navy transition-all duration-200 hover:border-green hover:text-green"
                          >
                            {link.label}
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-navy-lightest bg-navy-light p-6 md:p-8">
              <ul className="space-y-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-slate leading-7">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-slate-lighter mb-4">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md font-mono text-sm text-green bg-green/10 border border-green/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
