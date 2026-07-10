"use client";

import Link from "next/link";
import { BLOCKS, getBlockInfo } from "@/data/blocks";
import { getConceptsByBlock } from "@/data/concepts";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/20">
                J
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Java Concepts</h1>
                <p className="text-xs text-zinc-500">Interview Reference</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm">
              {BLOCKS.slice(0, 4).map((block) => (
                <a
                  key={block.id}
                  href={`#${block.id.toLowerCase()}`}
                  className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  {block.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Java Interview <span className="text-orange-500">Cheatsheet</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Everything you need to master Java concepts for your next technical interview.
              Concise explanations, code examples, and common questions.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {BLOCKS.map((block) => {
            const blockConcepts = getConceptsByBlock(block.id);
            const anchorId = block.id.toLowerCase();

            return (
              <section key={block.id} id={anchorId}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${block.color}`} />
                  <h3 className="text-xl font-semibold text-white">{block.label}</h3>
                  <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">
                    {blockConcepts.length}
                  </span>
                </div>

                {/* Cards grid */}
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {blockConcepts.map((concept) => (
                    <Link
                      key={concept.slug}
                      href={`/concept/${concept.slug}`}
                      className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors">
                          {concept.title}
                        </h4>
                        <svg
                          className="w-4 h-4 text-zinc-600 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                        {concept.description}
                      </p>
                      {concept.subConcepts.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {concept.subConcepts.slice(0, 2).map((sub) => (
                            <span
                              key={sub.slug}
                              className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                            >
                              {sub.title}
                            </span>
                          ))}
                          {concept.subConcepts.length > 2 && (
                            <span className="text-xs text-zinc-600">
                              +{concept.subConcepts.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-500">
          <p>Java Concepts — Built for developers, by developers</p>
        </div>
      </footer>
    </div>
  );
}
