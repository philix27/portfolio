import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://philix.vercel.app"),
  title: { default: "Felix Eligbue — Backend Software Engineer", template: "%s | Felix Eligbue" },
  description:
    "Backend software engineer with 5+ years building fintech and enterprise systems in Go, .NET and TypeScript. Founder of Synchro9ice.",
};

export const viewport: Viewport = { themeColor: "#08090a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
