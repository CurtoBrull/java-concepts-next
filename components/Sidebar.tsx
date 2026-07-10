"use client";

import Link from "next/link";
import { useState } from "react";
import { BLOCKS } from "@/data/blocks";
import { getConceptsByBlock } from "@/data/concepts";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-zinc-900 border-r border-zinc-800 transition-all duration-300 z-50 overflow-hidden ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-800">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
              J
            </div>
            <span className="font-bold text-white">Java Concepts</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
        >
          <svg
            className={`w-5 h-5 transition-transform ${collapsed ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
        {BLOCKS.map((block) => {
          const blockConcepts = getConceptsByBlock(block.id);
          const anchorId = block.id.toLowerCase();

          return (
            <div key={block.id} className="mb-3">
              <a
                href={`#${anchorId}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  collapsed ? "justify-center" : ""
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${block.color} flex-shrink-0`} />
                {!collapsed && <span className="text-zinc-100">{block.label}</span>}
                {!collapsed && (
                  <span className="ml-auto text-xs text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded-full">
                    {blockConcepts.length}
                  </span>
                )}
              </a>

              {!collapsed && (
                <div className="ml-4 mt-1 space-y-0.5">
                  {blockConcepts.slice(0, 5).map((concept) => (
                    <Link
                      key={concept.slug}
                      href={`/concept/${concept.slug}`}
                      className="flex items-center gap-2 pl-4 pr-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                      <span className="truncate">{concept.title}</span>
                    </Link>
                  ))}
                  {blockConcepts.length > 5 && (
                    <span className="block pl-4 pr-2 py-1 text-xs text-zinc-600">
                      +{blockConcepts.length - 5} more
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
