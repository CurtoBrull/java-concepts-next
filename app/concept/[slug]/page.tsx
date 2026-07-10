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
    <div className="min-h-screen text-zinc-100">
      {/* Header */}
      <header className="h-14 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-6">
        <Link href="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>All Concepts</span>
        </Link>
        <span className="mx-3 text-zinc-700">/</span>
        <span className={`px-2 py-0.5 rounded text-xs font-medium text-white ${blockInfo.color}`}>
          {blockInfo.label}
        </span>
        <span className="mx-3 text-zinc-700">/</span>
        <span className="text-sm text-zinc-300">{concept.title}</span>
      </header>

      {/* Content */}
      <main className="px-8 py-8 max-w-5xl">
        {/* Concept header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
            {concept.title}
          </h1>
          <p className="text-zinc-400 leading-relaxed">
            {concept.description}
          </p>
        </div>

        {/* Code example */}
        {concept.codeExample && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mb-8">
            <div className="px-4 py-2.5 border-b border-zinc-800 bg-zinc-800/30">
              <span className="text-xs text-zinc-500 font-medium">EXAMPLE</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-zinc-300 font-mono whitespace-pre leading-relaxed">{concept.codeExample}</code>
            </pre>
          </div>
        )}

        {/* Questions */}
        {concept.questions.length > 0 && (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-8">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">
              FAQ
            </h2>
            <div className="space-y-4">
              {concept.questions.map((q, i) => (
                <div key={i} className="border-l-2 border-orange-500 pl-4">
                  <p className="font-medium text-white mb-2">{q.question}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{q.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-concepts */}
        {concept.subConcepts.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-white mb-5">Sub-concepts</h2>
            <div className="space-y-5">
              {concept.subConcepts
                .sort((a, b) => a.orderIndex - b.orderIndex)
                .map((sub) => (
                  <article
                    key={sub.slug}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
                  >
                    <div className="px-5 py-4 border-b border-zinc-800">
                      <h3 className="font-medium text-white">{sub.title}</h3>
                      <p className="text-sm text-zinc-500 mt-1">{sub.description}</p>
                    </div>

                    {sub.codeExample && (
                      <div className="bg-zinc-950 border-t border-zinc-800">
                        <div className="px-4 py-2 text-xs text-zinc-500 bg-zinc-900/50 border-b border-zinc-800">
                          CODE
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm">
                          <code className="text-zinc-300 font-mono whitespace-pre leading-relaxed">{sub.codeExample}</code>
                        </pre>
                      </div>
                    )}

                    {sub.questions.length > 0 && (
                      <div className="p-5">
                        <div className="space-y-3">
                          {sub.questions.map((q, i) => (
                            <div key={i} className="border-l-2 border-orange-500 pl-4">
                              <p className="font-medium text-white text-sm mb-1">{q.question}</p>
                              <p className="text-zinc-400 text-sm">{q.answer}</p>
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
        <div className="mt-10 pt-6 border-t border-zinc-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Java Concepts
          </Link>
        </div>
      </main>
    </div>
  );
}
