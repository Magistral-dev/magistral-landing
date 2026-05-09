"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { contactsData } from "../lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-primary/90 backdrop-blur-md z-50 border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-accent">MAGISTRAL</span>
            <span className="text-text"> STUDIO</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-text-secondary hover:text-accent transition-colors">
              Services
            </a>
            <a href="#catalog" className="text-text-secondary hover:text-accent transition-colors">
              Catalogue
            </a>
            <a href="#contact" className="text-text-secondary hover:text-accent transition-colors">
              Contact
            </a>
            <WhatsAppButton number={contactsData.whatsappBusiness}>
              Commander
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fade-in">
            <a href="#services" className="text-text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#catalog" className="text-text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
              Catalogue
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