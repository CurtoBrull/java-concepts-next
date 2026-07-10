import { BLOCKS } from "@/data/blocks";
import { getConceptsByBlock } from "@/data/concepts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 py-8">
      {/* Page title */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Java Interview <span className="text-orange-500">Cheatsheet</span>
        </h1>
        <p className="text-zinc-500 max-w-xl">
          Conceptos esenciales para entrevistas técnicas y referencia diaria.
        </p>
      </div>

      {/* Blocks */}
      <div className="space-y-12">
        {BLOCKS.map((block) => {
          const blockConcepts = getConceptsByBlock(block.id);
          const anchorId = block.id.toLowerCase();

          return (
            <section key={block.id} id={anchorId} style={{ scrollMarginTop: "3.5rem" }}>
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-3 h-3 rounded-full ${block.color}`} />
                <h2 className="text-base font-semibold text-white">{block.label}</h2>
              </div>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {blockConcepts.map((concept) => (
                  <Link
                    key={concept.slug}
                    href={`/concept/${concept.slug}`}
                    className="group bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                  >
                    <h3 className="font-medium text-white group-hover:text-orange-400 transition-colors mb-1.5">
                      {concept.title}
                    </h3>
                    <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                      {concept.description}
                    </p>
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