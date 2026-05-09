"use client";
import { motion } from "framer-motion";
import { FileText, Star, Layers, Palette, Video } from "lucide-react";
import { servicesData } from "../lib/data";

const iconMap = {
  FileText: FileText,
  Star: Star,
  Layers: Layers,
  Palette: Palette,
  Video: Video,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            NOS SERVICES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-primary p-6 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="w-6 h-6 text-accent" />}
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{service.title}</h3>
                <p className="text-text-secondary mb-4">{service.description}</p>
                <p className="text-accent font-bold text-2xl">{service.price}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}