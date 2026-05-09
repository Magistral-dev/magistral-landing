"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { contactsData } from "../lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-primary/90 backdrop-blur-2xl z-50 border-b border-accent/10 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl border border-accent/30 bg-[#090909]/90 flex items-center justify-center shadow-neon-ring overflow-hidden">
              <img src="/logo.png" alt="MAGISTRAL" className="w-9 h-9 object-contain" />
            </div>
            <div className="text-lg md:text-2xl font-black tracking-[0.35em] text-text">
              <span className="text-accent">MAGISTRAL</span>
              <span className="block text-text text-base md:text-xl">STUDIO</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-text-secondary hover:text-accent transition-colors">
              Services
            </a>
            <a href="#catalog" className="text-text-secondary hover:text-accent transition-colors">
              Offres
            </a>
            <a href="#contact" className="text-text-secondary hover:text-accent transition-colors">
              Contact
            </a>
            <WhatsAppButton number={contactsData.whatsappBusiness}>
              Commander
            </WhatsAppButton>
          </div>

          <button className="md:hidden text-text" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fade-in futuristic-panel rounded-3xl">
            <a href="#services" className="text-text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#catalog" className="text-text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
              Offres
            </a>
            <a href="#contact" className="text-text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <WhatsAppButton number={contactsData.whatsappBusiness}>
              Commander
            </WhatsAppButton>
          </div>
        )}
      </nav>
    </header>
  );
}