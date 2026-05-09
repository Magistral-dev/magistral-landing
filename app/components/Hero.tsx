"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { contactsData, autoMessages } from "../lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-text">MAGISTRAL</span>
            <span className="text-accent"> STUDIO</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-accent font-semibold mb-4"
          >
            ON NE TE PRÉSENTE PAS...
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-text mb-8"
          >
            ON TE POSITIONNE.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto"
          >
            CV PRO · LOGO · MONTAGE VIDÉO
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <WhatsAppButton number={contactsData.whatsappBusiness} message={autoMessages.welcome}>
              Commander maintenant
              <ArrowRight className="w-4 h-4" />
            </WhatsAppButton>
            
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-accent text-accent font-semibold px-6 py-3 rounded-xl hover:bg-accent/10 transition-all duration-300"
            >
              Découvrir nos services
            </a>
          </motion.div>
        </motion.div>
        
        {/* Floating badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="text-text-secondary text-sm">↓ Scroller ↓</div>
        </motion.div>
      </div>
    </section>
  );
}