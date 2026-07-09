import type { Metadata } from "next";
import Link from "next/link";
import { BLOCKS } from "@/data/blocks";
import "./globals.css";

export const metadata: Metadata = {
  title: "Java Concepts",
  description: "Referencia de conceptos Java para entrevistas y aprendizaje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-y-auto">
          <div className="sticky top-0">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                  J
                </div>
                <div>
                  <h1 className="font-bold text-zinc-900 dark:text-zinc-50">Java Concepts</h1>
                  <p className="text-xs text-zinc-500">Referencia completa</p>
                </div>
              </Link>
            </div>

            <nav className="p-2">
              {BLOCKS.map((block) => (
                <div key={block.id} className="mb-4">
                  <div className={`px-3 py-1.5 text-xs font-semibold text-white rounded ${block.color}`}>
                    {block.label}
                  </div>
                  <ul className="mt-1 space-y-0.5">
                    {/* Concepts will be loaded client-side */}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
