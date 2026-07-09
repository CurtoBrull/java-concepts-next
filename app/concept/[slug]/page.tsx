import Link from "next/link";
import { notFound } from "next/navigation";
import { getConceptBySlug, getAllSlugs } from "@/data/concepts";
import { getBlockInfo } from "@/data/blocks";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ConceptPage({ params }: PageProps) {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);

  if (!concept) {
    notFound();
  }

  const blockInfo = getBlockInfo(concept.block);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-orange-500 hover:underline">
          Java Concepts
        </Link>
        <span className="mx-2 text-zinc-400">/</span>
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-white ${blockInfo.color}`}>
          {blockInfo.label}
        </span>
        <span className="mx-2 text-zinc-400">/</span>
        <span className="text-zinc-600">{concept.title}</span>
      </nav>

      {/* Main concept */}
      <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 mb-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
            {concept.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {concept.description}
          </p>
        </header>

        {concept.codeExample && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
              Ejemplo de Código
            </h3>
            <pre className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-zinc-800 dark:text-zinc-300 font-mono whitespace-pre">
                {concept.codeExample}
              </code>
            </pre>
          </div>
        )}

        {concept.questions.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
              Preguntas Frecuentes
            </h3>
            {concept.questions.map((q, i) => (
              <div key={i} className="border-l-4 border-orange-500 pl-4">
                <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                  {q.question}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        )}
      </article>

      {/* Sub-concepts */}
      {concept.subConcepts.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Sub-concepts
          </h2>
          <div className="space-y-6">
            {concept.subConcepts
              .sort((a, b) => a.orderIndex - b.orderIndex)
              .map((sub) => (
                <article
                  key={sub.slug}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                    {sub.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {sub.description}
                  </p>

                  {sub.codeExample && (
                    <div className="mb-4">
                      <pre className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm text-zinc-800 dark:text-zinc-300 font-mono whitespace-pre">
                          {sub.codeExample}
                        </code>
                      </pre>
                    </div>
                  )}

                  {sub.questions.length > 0 && (
                    <div className="space-y-4 mt-4">
                      {sub.questions.map((q, i) => (
                        <div key={i} className="border-l-4 border-orange-500 pl-4">
                          <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                            {q.question}
                          </p>
                          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            {q.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mt-8">
        <Link
          href="/"
          className="text-orange-500 hover:underline text-sm"
        >
          ← Volver a Java Concepts
        </Link>
      </div>
    </div>
  );
}
