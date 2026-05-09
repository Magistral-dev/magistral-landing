"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Globe, Phone } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { contactsData, autoMessages } from "../lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-16 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-10 top-28 w-60 h-60 rounded-full bg-accent/5 blur-2xl" />
        <div className="absolute left-1/2 bottom-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="futuristic-panel p-10 rounded-[3rem] border border-accent/10 shadow-[0_40px_120px_rgba(245,180,66,0.15)]"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-accent text-sm uppercase tracking-[0.5em] font-semibold">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                  MAGISTRAL - Générateur Digital
                </div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-text leading-tight tracking-[-0.04em]">
                  Technologie futuriste pour vos applications web, mobiles, desktop et réseaux.
                </h1>
                <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
                  MAGISTRAL conçoit des solutions digitales ultra professionnelles, en combinant design orbital et ingénierie IT robuste : sites, apps, systèmes, réseaux, maintenance et conseil.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Applications Web & SaaS",
                    "Apps Mobiles & Desktop",
                    "Réseaux & Infrastructure",
                    "Installation & Maintenance",
                  ].map((item) => (
                    <div key={item} className="rounded-3xl border border-accent/10 bg-[#101010]/80 p-4">
                      <p className="text-text font-semibold">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                  <WhatsAppButton number={contactsData.whatsappBusiness} message={autoMessages.welcome}>
                    Commander
                    <ArrowRight className="w-4 h-4" />
                  </WhatsAppButton>
                  <a
                    href="#catalog"
                    className="inline-flex items-center gap-2 text-accent border border-accent/30 px-6 py-3 rounded-3xl hover:bg-accent/10 transition-all duration-300"
                  >
                    Voir nos offres
                    <Sparkles className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.9 }}
                className="rounded-[2.5rem] border border-accent/10 bg-[#080808]/90 p-8 shadow-[0_48px_120px_rgba(245,180,66,0.12)]"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-text-secondary uppercase tracking-[0.3em] text-xs">Système MAGISTRAL</p>
                    <h2 className="text-2xl font-bold text-text">Niveau stratégique</h2>
                  </div>
                  <div className="rounded-2xl border border-accent/20 p-3 bg-[#111111]/90">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent/10 text-accent">
                      <Globe className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-text font-semibold">Présence digitale</p>
                      <p className="text-text-secondary text-sm">Sites haut de gamme, boutiques et applications SaaS.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent/10 text-accent">
                      <Cpu className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-text font-semibold">Infrastructure & sécurité</p>
                      <p className="text-text-secondary text-sm">Réseaux, serveurs, maintenance et supervision durable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent/10 text-accent">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-text font-semibold">Design galaxie</p>
                      <p className="text-text-secondary text-sm">Branding, logos et motion design d'une modernité cosmique.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}