import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { baseUrl } from "@/lib/site-config";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const { articles } = await import("@/data/articles");
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found."
    };
  }

  return {
    title: `${article.title} — Eden Park | Software Engineer`,
    description: article.summary,
    alternates: { canonical: `${baseUrl}/articles/${article.slug}` }
  };
}

export default async function ArticleDetailPage({
  params
}: ArticlePageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 2);

  return (
    <main className="px-6 py-16">
      <div className="article-shell mx-auto mt-14">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 mb-8 text-sm font-mono text-slate transition-colors duration-200 hover:text-green"
        >
          <span aria-hidden="true">&larr;</span>
          Back to articles
        </Link>

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.12em] text-slate">
            <span>{new Date(article.publishedAt).toLocaleDateString("en-NZ")}</span>
            <span aria-hidden="true">•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="mb-6 text-4xl md:text-5xl leading-tight font-semibold text-slate-lighter [font-family:Georgia,Charter,Times_New_Roman,serif]">
            {article.title}
          </h1>

          <p className="mb-7 text-xl leading-9 text-slate [font-family:Georgia,Charter,Times_New_Roman,serif]">
            {article.intro}
          </p>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/articles?tag=${encodeURIComponent(tag)}`}
                className="inline-flex items-center rounded-full border border-navy-lightest px-3 py-1 text-xs font-mono text-slate transition-colors hover:border-green hover:text-green"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>

        <div className="article-content">
          {article.sections.map((section) => (
            <div
              key={section.heading}
              className="py-8 border-b border-navy-lightest last:border-b-0"
            >
              <h2>{section.heading}</h2>

              <div>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.highlights && section.highlights.length > 0 && (
                <ul>
                  {section.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              {section.codeSamples && section.codeSamples.length > 0 && (
                <div className="mt-5 space-y-4">
                  {section.codeSamples.map((sample, index) => (
                    <div
                      key={`${section.heading}-${sample.filename ?? sample.language}-${index}`}
                      className="article-code"
                    >
                      <div className="flex items-center justify-between border-b border-navy-lightest px-4 py-2 text-xs font-mono text-slate">
                        <span>{sample.filename ?? "example"}</span>
                        <span>{sample.language}</span>
                      </div>
                      <pre className="overflow-x-auto p-4 text-sm leading-6 text-slate-light font-mono">
                        <code>{sample.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {relatedArticles.length > 0 && (
          <aside className="mt-12 pt-8 border-t border-navy-lightest">
            <h2 className="mb-4 text-2xl font-semibold text-slate-lighter [font-family:Georgia,Charter,Times_New_Roman,serif]">
              Related articles
            </h2>
            <div className="space-y-4">
              {relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.slug}>
                  <Link
                    href={`/articles/${relatedArticle.slug}`}
                    className="text-lg font-semibold text-slate-lighter transition-colors hover:text-green [font-family:Georgia,Charter,Times_New_Roman,serif]"
                  >
                    {relatedArticle.title}
                  </Link>
                  <p className="mt-2 text-slate leading-7 [font-family:Georgia,Charter,Times_New_Roman,serif]">
                    {relatedArticle.summary}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}
