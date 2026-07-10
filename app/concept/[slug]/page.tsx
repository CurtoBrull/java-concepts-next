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
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                J
              </div>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                ← All Concepts
              </span>
            </Link>
            <span className={`px-2.5 py-1 rounded text-xs font-medium text-white ${blockInfo.color}`}>
              {blockInfo.label}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Concept header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            {concept.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {concept.description}
          </p>
        </div>

        {/* Code example */}
        {concept.codeExample && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-10">
            <div className="bg-zinc-800/50 px-4 py-2.5 border-b border-zinc-800 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-zinc-500 ml-2">Example</span>
            </div>
            <pre className="p-5 overflow-x-auto text-sm">
              <code className="text-zinc-300 font-mono whitespace-pre leading-relaxed">{concept.codeExample}</code>
            </pre>
          </div>
        )}

        {/* Questions */}
        {concept.questions.length > 0 && (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10">
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
            <h2 className="text-lg font-semibold text-white mb-6">Sub-concepts</h2>
            <div className="space-y-6">
              {concept.subConcepts
                .sort((a, b) => a.orderIndex - b.orderIndex)
                .map((sub) => (
                  <article
                    key={sub.slug}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-zinc-800">
                      <h3 className="text-lg font-medium text-white">{sub.title}</h3>
                      <p className="text-sm text-zinc-500 mt-1">{sub.description}</p>
                    </div>

                    {sub.codeExample && (
                      <div className="bg-zinc-900 border-t border-zinc-800">
                        <div className="px-4 py-2 text-xs text-zinc-500 border-b border-zinc-800 bg-zinc-800/30">
                          Code
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
        <div className="mt-12 pt-8 border-t border-zinc-800">
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
