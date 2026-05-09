"use client";
import { motion } from "framer-motion";
import { Rocket, Briefcase, GraduationCap } from "lucide-react";
import { advantagesData } from "../lib/data";

const iconMap = {
  Rocket: Rocket,
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
};

export default function Advantages() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            POURQUOI CHOISIR MAGISTRAL STUDIO ?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantagesData.map((advantage: typeof advantagesData[number], index: number) => {
            const IconComponent = iconMap[advantage.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {IconComponent && <IconComponent className="w-8 h-8 text-accent" />}
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{advantage.title}</h3>
                <p className="text-text-secondary">{advantage.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}