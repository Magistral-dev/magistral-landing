"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary text-sm">
              MAGISTRAL - Génératrice d'innovation digitale et d'infrastructures performantes.
            </p>
            <p className="text-text-secondary text-xs mt-2 flex items-center justify-center gap-1">
              Créé avec <Heart className="w-3 h-3 text-accent" /> pour des projets hors du commun.
            </p>
            <p className="text-text-secondary text-xs mt-4">
              © {new Date().getFullYear()} MAGISTRAL. Tous droits réservés.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}