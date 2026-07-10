"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BLOCKS } from "@/data/blocks";
import { getConceptsByBlock } from "@/data/concepts";

export default function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <aside
      className="fixed left-0 top-0 h-full w-60 border-r border-zinc-800 z-50"
      style={{ backgroundColor: "#18181b" }}
    >
      {/* Logo header */}
      <div className="h-14 flex items-center gap-3 px-4 border-b border-zinc-800">
        <Link href="/" className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          J
        </Link>
        <Link href="/" className="font-bold text-white text-sm">
          Java Concepts
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-2 overflow-y-auto h-[calc(100vh-3.5rem)]">
        {BLOCKS.map((block) => {
          const blockConcepts = getConceptsByBlock(block.id);
          const anchorId = block.id.toLowerCase();
          const blockHref = isHome ? `#${anchorId}` : `/#${anchorId}`;

          return (
            <div key={block.id} className="mb-4">
              <Link
                href={blockHref}
                className="flex items-center gap-2 px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-white transition-colors"
              >
                <div className={`w-2 h-2 rounded-full ${block.color} flex-shrink-0`} />
                <span>{block.label}</span>
              </Link>

              <div className="mt-1 space-y-0.5">
                {blockConcepts.map((concept) => (
                  <Link
                    key={concept.slug}
                    href={`/concept/${concept.slug}`}
                    className="flex items-center px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
                  >
                    {concept.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}