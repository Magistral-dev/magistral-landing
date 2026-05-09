"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Sparkles, Users, Monitor } from "lucide-react";
import { advantagesData } from "../lib/data";

const iconMap = {
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  Monitor,
};

export default function Advantages() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">POURQUOI MAGISTRAL ?</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-accent"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Un partenariat technique et créatif pour accélérer tes projets avec un design hors du temps et une infrastructure sans faille.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {advantagesData.map((advantage: typeof advantagesData[number], index: number) => {
            const IconComponent = iconMap[advantage.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="futuristic-panel text-center p-6 rounded-[2rem] border border-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {IconComponent && <IconComponent className="w-8 h-8 text-accent" />}
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{advantage.title}</h3>
                <p className="text-text-secondary leading-relaxed">{advantage.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}