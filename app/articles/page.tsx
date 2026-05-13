import { articles, getAllArticleTags, getPaginatedArticles, type Article } from "@/data/articles";
import { baseUrl } from "@/lib/site-config";
import Link from "next/link";
import React from "react";

type ArticlesPageProps = {
  searchParams: Promise<{
    page?: string;
    tag?: string;
  }>;
};

function buildArticlesHref(page: number, tag?: string): string {
  const params = new URLSearchParams();

  if (page > 1) {
    params.set("page", String(page));
  }

  if (tag) {
    params.set("tag", tag);
  }

  const query = params.toString();
  return query ? `/articles?${query}` : "/articles";
}

function ArticleCard({ article }: { article: Article }): React.JSX.Element {
  return (
    <article className="rounded-2xl border border-navy-lightest bg-navy-light p-6 md:p-8">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-mono text-green">
        <span>{new Date(article.publishedAt).toLocaleDateString("en-NZ")}</span>
        <span aria-hidden="true">•</span>
        <span>{article.readTime}</span>
      </div>

      <h2 className="mb-3 text-2xl font-semibold text-slate-lighter">
        <Link href={`/articles/${article.slug}`} className="transition-colors hover:text-green">
          {article.title}
        </Link>
      </h2>

      <p className="mb-4 text-slate leading-7">{article.summary}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Link
            key={tag}
            href={buildArticlesHref(1, tag)}
            className="inline-flex items-center rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs font-mono text-green transition-colors hover:border-green hover:bg-green/15"
          >
            {tag}
          </Link>
        ))}
      </div>

      <Link
        href={`/articles/${article.slug}`}
        className="inline-flex items-center gap-2 text-sm font-mono text-green transition-colors hover:text-slate-lighter"
      >
        Read article <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export async function generateMetadata({ searchParams }: ArticlesPageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedTag = resolvedSearchParams.tag;

  return {
    title: selectedTag
      ? `${selectedTag} Articles — Eden Park | Software Engineer`
      : "Articles — Eden Park | Software Engineer",
    description:
      "Articles by Eden Park on .NET, Angular, React, AI workflows, and practical software engineering.",
    alternates: { canonical: `${baseUrl}/articles` }
  };
}

export default async function ArticlesPage({
  searchParams
}: ArticlesPageProps): Promise<React.JSX.Element> {
  const resolvedSearchParams = await searchParams;
  const parsedPage = Number.parseInt(resolvedSearchParams.page ?? "1", 10);
  const { items, currentPage, totalPages, selectedTag, totalItems } = getPaginatedArticles({
    page: Number.isNaN(parsedPage) ? 1 : parsedPage,
    tag: resolvedSearchParams.tag
  });

  const allTags = getAllArticleTags();
  const featuredArticle = articles[0];

  return (
    <main className="px-6 lg:px-[150px] py-12 max-w-[1600px] mx-auto">
      <div className="max-w-6xl mx-auto mt-12">
        <header className="mb-10">
          <p className="mb-3 font-mono text-sm text-green">05. Articles</p>
          <h1 className="mb-4 text-4xl md:text-5xl font-semibold text-slate-lighter">
            Notes on building software that lasts
          </h1>
          <p className="max-w-3xl text-lg leading-7 text-slate">
            Writing about practical engineering choices, delivery trade-offs, and the habits that
            make systems easier to evolve.
          </p>
        </header>

        <div className="mb-8 rounded-2xl border border-navy-lightest bg-navy-light p-6 md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-mono text-green">
            <span>Featured</span>
            <span aria-hidden="true">•</span>
            <span>{featuredArticle.readTime}</span>
          </div>
          <h2 className="mb-3 text-2xl font-semibold text-slate-lighter">
            {featuredArticle.title}
          </h2>
          <p className="mb-4 text-slate leading-7">{featuredArticle.summary}</p>
          <Link
            href={`/articles/${featuredArticle.slug}`}
            className="inline-flex items-center gap-2 text-sm font-mono text-green transition-colors hover:text-slate-lighter"
          >
            Read the featured article <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Link
            href="/articles"
            className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-mono transition-colors ${
              !selectedTag
                ? "border-green bg-green/10 text-green"
                : "border-navy-lightest bg-navy-light text-slate-lighter hover:border-green hover:text-green"
            }`}
          >
            All topics
          </Link>
          {allTags.map((tag) => {
            const isSelected = tag === selectedTag;

            return (
              <Link
                key={tag}
                href={buildArticlesHref(1, tag)}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-mono transition-colors ${
                  isSelected
                    ? "border-green bg-green/10 text-green"
                    : "border-navy-lightest bg-navy-light text-slate-lighter hover:border-green hover:text-green"
                }`}
              >
                {tag}
              </Link>
            );
          })}
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-slate">
            Showing {items.length} of {totalItems} article{totalItems === 1 ? "" : "s"}
            {selectedTag ? ` tagged ${selectedTag}` : ""}.
          </p>
          <p className="text-sm font-mono text-slate-lighter">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        <div className="space-y-6">
          {items.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <nav aria-label="Articles pagination" className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href={buildArticlesHref(Math.max(1, currentPage - 1), selectedTag)}
            aria-disabled={currentPage === 1}
            className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-mono transition-colors ${
              currentPage === 1
                ? "pointer-events-none border-navy-lightest text-slate/50"
                : "border-navy-lightest text-slate-lighter hover:border-green hover:text-green"
            }`}
          >
            Previous
          </Link>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <Link
              key={page}
              href={buildArticlesHref(page, selectedTag)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-mono transition-colors ${
                page === currentPage
                  ? "border-green bg-green/10 text-green"
                  : "border-navy-lightest text-slate-lighter hover:border-green hover:text-green"
              }`}
            >
              {page}
            </Link>
          ))}

          <Link
            href={buildArticlesHref(Math.min(totalPages, currentPage + 1), selectedTag)}
            aria-disabled={currentPage === totalPages}
            className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-mono transition-colors ${
              currentPage === totalPages
                ? "pointer-events-none border-navy-lightest text-slate/50"
                : "border-navy-lightest text-slate-lighter hover:border-green hover:text-green"
            }`}
          >
            Next
          </Link>
        </nav>
      </div>
    </main>
  );
}
