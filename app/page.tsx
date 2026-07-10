"use client";

import { BLOCKS } from "@/data/blocks";
import { getConceptsByBlock } from "@/data/concepts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-100">
      {/* Hero */}
      <section className="border-b border-zinc-800">
        <div className="px-8 py-12">
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Java Interview <span className="text-orange-500">Cheatsheet</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl">
            Everything you need to master Java concepts for your next technical interview.
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="px-8 py-10">
        <div className="space-y-14">
          {BLOCKS.map((block) => {
            const blockConcepts = getConceptsByBlock(block.id);
            const anchorId = block.id.toLowerCase();

            return (
              <section key={block.id} id={anchorId}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-3 h-3 rounded-full ${block.color}`} />
                  <h3 className="text-lg font-semibold text-white">{block.label}</h3>
                  <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">
                    {blockConcepts.length}
                  </span>
                </div>

                {/* Cards grid */}
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {blockConcepts.map((concept) => (
                    <Link
                      key={concept.slug}
                      href={`/concept/${concept.slug}`}
                      className="group bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
                    >
                      <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors mb-1">
                        {concept.title}
                      </h4>
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
      <footer className="border-t border-zinc-800 py-6 mt-8">
        <div className="px-8 text-center text-sm text-zinc-500">
          <p>Java Concepts — Built for developers</p>
        </div>
      </footer>
    </div>
  );
}
