"use client";

import Link from "next/link";
import { BLOCKS, getBlockInfo } from "@/data/blocks";
import { getConceptsByBlock } from "@/data/concepts";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Conceptos Java
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Referencia completa para entrevistas técnicas y aprendizaje
        </p>
      </div>

      <div className="space-y-10">
        {BLOCKS.map((block) => {
          const blockConcepts = getConceptsByBlock(block.id);
          const blockInfo = getBlockInfo(block.id);

          return (
            <section key={block.id}>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-white text-sm font-semibold mb-4 ${block.color}`}>
                {block.label}
                <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded">
                  {blockConcepts.length}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {blockConcepts.map((concept) => (
                  <Link
                    key={concept.slug}
                    href={`/concept/${concept.slug}`}
                    className="block p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-orange-500 dark:hover:border-orange-500 transition-colors group"
                  >
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-orange-500 mb-2">
                      {concept.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      {concept.description}
                    </p>
                    {concept.subConcepts.length > 0 && (
                      <p className="text-xs text-zinc-400 mt-2">
                        {concept.subConcepts.length} sub-concepts
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
