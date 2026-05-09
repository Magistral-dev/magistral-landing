"use client";
import { motion } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  ShieldCheck,
  Globe,
  Sparkles,
} from "lucide-react";
import { servicesData } from "../lib/data";

const iconMap = {
  Laptop,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  ShieldCheck,
  Globe,
  Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">SERVICES MAGISTRAL</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-accent"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Un catalogue complet de solutions digitales, IT et réseau, conçu pour les entreprises qui veulent dominer leur marché.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="futuristic-panel p-7 rounded-[2rem] border border-accent/10 hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-3xl bg-accent/10 flex items-center justify-center mb-5 text-accent">
                  {IconComponent && <IconComponent className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-accent font-semibold text-lg">{service.price}</span>
                  <span className="text-text-secondary text-sm uppercase tracking-[0.2em]">{service.tag}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}