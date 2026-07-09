"use client";

import Link from "next/link";
import { BLOCKS, getBlockInfo } from "@/data/blocks";
import { getConceptsByBlock } from "@/data/concepts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">
                J
              </div>
              <div>
                <h1 className="text-xl font-bold text-zinc-900">Java Concepts</h1>
                <p className="text-sm text-zinc-500">Referencia para entrevistas y aprendizaje</p>
              </div>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="#java-core" className="text-zinc-600 hover:text-orange-600 transition-colors">Java Core</a>
              <a href="#spring" className="text-zinc-600 hover:text-orange-600 transition-colors">Spring</a>
              <a href="#apis" className="text-zinc-600 hover:text-orange-600 transition-colors">APIs</a>
              <a href="#tools" className="text-zinc-600 hover:text-orange-600 transition-colors">Tools</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Domina los conceptos Java</h2>
          <p className="text-orange-100 text-lg max-w-2xl">
            Guía completa con explicaciones, ejemplos de código y preguntas frecuentes
            para preparar entrevistas técnicas y mejorar tu conocimiento.
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {BLOCKS.map((block) => {
            const blockConcepts = getConceptsByBlock(block.id);
            const blockInfo = getBlockInfo(block.id);

            // Create anchor ID based on block
            const anchorId = block.id.toLowerCase().replace('_', '-');

            return (
              <section key={block.id} id={anchorId}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1.5 h-8 rounded-full ${block.color}`} />
                  <h3 className="text-2xl font-bold text-zinc-900">{block.label}</h3>
                  <span className="text-sm text-zinc-500 bg-zinc-200 px-2 py-1 rounded-full">
                    {blockConcepts.length} conceptos
                  </span>
                </div>

                {/* Cards grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {blockConcepts.map((concept) => (
                    <Link
                      key={concept.slug}
                      href={`/concept/${concept.slug}`}
                      className="group bg-white rounded-xl border border-zinc-200 p-5 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors">
                          {concept.title}
                        </h4>
                        <svg
                          className="w-5 h-5 text-zinc-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-zinc-600 line-clamp-2 mb-3">
                        {concept.description}
                      </p>
                      {concept.subConcepts.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {concept.subConcepts.slice(0, 3).map((sub) => (
                            <span
                              key={sub.slug}
                              className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded"
                            >
                              {sub.title}
                            </span>
                          ))}
                          {concept.subConcepts.length > 3 && (
                            <span className="text-xs text-zinc-400">
                              +{concept.subConcepts.length - 3}
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
      <footer className="bg-zinc-900 text-zinc-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <p>Java Concepts — Referencia educativa para desarrolladores Java</p>
        </div>
      </footer>
    </div>
  );
}
