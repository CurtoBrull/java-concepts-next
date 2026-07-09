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
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-md group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all">
                J
              </div>
              <span className="font-medium text-zinc-600 group-hover:text-orange-600 transition-colors">
                ← Volver
              </span>
            </Link>
            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${blockInfo.color}`}>
              {blockInfo.label}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Concept header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">
            {concept.title}
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            {concept.description}
          </p>
        </div>

        {/* Code example */}
        {concept.codeExample && (
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden mb-10 shadow-sm">
            <div className="bg-zinc-800 text-zinc-100 text-sm px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-2 text-zinc-400">Ejemplo de Código</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-zinc-800 font-mono whitespace-pre">{concept.codeExample}</code>
            </pre>
          </div>
        )}

        {/* Questions */}
        {concept.questions.length > 0 && (
          <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-10 shadow-sm">
            <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {concept.questions.map((q, i) => (
                <div key={i} className="border-l-4 border-orange-500 bg-zinc-50 rounded-r-lg p-4">
                  <p className="font-medium text-zinc-900 mb-2">{q.question}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">{q.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-concepts */}
        {concept.subConcepts.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Sub-concepts
            </h2>
            <div className="space-y-6">
              {concept.subConcepts
                .sort((a, b) => a.orderIndex - b.orderIndex)
                .map((sub) => (
                  <article
                    key={sub.slug}
                    className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm"
                  >
                    <div className="bg-zinc-50 px-6 py-4 border-b border-zinc-100">
                      <h3 className="text-lg font-semibold text-zinc-900">{sub.title}</h3>
                      <p className="text-sm text-zinc-600 mt-1">{sub.description}</p>
                    </div>

                    {sub.codeExample && (
                      <div className="bg-zinc-800 text-zinc-100">
                        <div className="px-4 py-2 text-xs text-zinc-400 border-b border-zinc-700">
                          Código
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm">
                          <code className="font-mono whitespace-pre">{sub.codeExample}</code>
                        </pre>
                      </div>
                    )}

                    {sub.questions.length > 0 && (
                      <div className="p-6">
                        <div className="space-y-3">
                          {sub.questions.map((q, i) => (
                            <div key={i} className="border-l-4 border-orange-500 bg-zinc-50 rounded-r-lg p-3">
                              <p className="font-medium text-zinc-900 text-sm mb-1">{q.question}</p>
                              <p className="text-zinc-600 text-sm">{q.answer}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Java Concepts
          </Link>
        </div>
      </main>
    </div>
  );
}
