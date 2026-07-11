import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

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
      <body className="antialiased" style={{ backgroundColor: "#09090b" }}>
        <div className="flex min-h-screen">
          {/* Sidebar fixed */}
          <Sidebar />

          {/* Content offset by sidebar width (w-60 = 15rem) */}
          <div className="flex-1 ml-60 flex flex-col">
            {/* Top navbar */}
            <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-40" style={{ backgroundColor: "#18181b" }}>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-zinc-500">Java</span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-300">Interview Reference</span>
              </div>
            </header>

            {/* Main content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}