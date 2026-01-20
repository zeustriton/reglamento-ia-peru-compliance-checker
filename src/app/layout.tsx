import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reglamento de Inteligencia Artificial del Perú - RIA Compliance Checker",
  description: "Plataforma corporativa de análisis y cumplimiento del Reglamento de Inteligencia Artificial de Perú. Herramientas C-Level para evaluación de conformidad y gestión de plazos.",
  keywords: ["Perú", "Inteligencia Artificial", "Ley 31814", "Compliance", "Reglamento IA", "Decreto Supremo 115-2025-PCM", "C-Level", "Corporate", "RIA"],
  authors: [{ name: "Roberto Puyó - Kepler Blacklock" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Reglamento de Inteligencia Artificial del Perú - RIA Compliance Checker",
    description: "Plataforma corporativa para el análisis y cumplimiento del Reglamento de IA de Perú",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reglamento de Inteligencia Artificial del Perú - RIA Compliance Checker",
    description: "Análisis y cumplimiento del Reglamento de IA de Perú para empresas C-Level",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
