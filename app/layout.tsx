import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magistral Studio - On ne te présente pas, on te positionne",
  description: "CV Professionnel, Logo Moderne, Montage Vidéo - Livraison rapide 24h - Prix étudiant",
  keywords: "CV, logo, montage vidéo, Cameroun, étudiant, professionnel",
  authors: [{ name: "Magistral Studio" }],
  openGraph: {
    title: "Magistral Studio",
    description: "Boost ton image professionnelle avec Magistral Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}