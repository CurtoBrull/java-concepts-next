import type { Metadata } from "next";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
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
      <body className="antialiased bg-zinc-950">
        <Sidebar />
        <div className="ml-64 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
