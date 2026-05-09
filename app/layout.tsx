import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAGISTRAL Studio — Générateur Digital | Web, Mobile, Desktop, Réseaux",
  description:
    "MAGISTRAL crée des expériences digitales futuristes : applications web, mobiles, desktop, sites web, réseaux, installation et maintenance IT.",
  keywords:
    "MAGISTRAL, application web, application mobile, desktop, site web, installation système, maintenance IT, réseaux, consultation, cybersécurité",
  authors: [{ name: "MAGISTRAL" }],
  openGraph: {
    title: "MAGISTRAL Studio",
    description:
      "Design futuriste, technologie avancée et services IT complets pour entreprises ambitieuses.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={orbitron.className}>
      <body>{children}</body>
    </html>
  );
}