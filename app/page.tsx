"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-primary">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <Catalog />
      <Contact />
      <Footer />
    </main>
  );
}