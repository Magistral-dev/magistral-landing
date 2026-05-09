"use client";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { servicesData, contactsData, autoMessages } from "../lib/data";
import WhatsAppButton from "./WhatsAppButton";

export default function Catalog() {
  const featuredServices = servicesData.slice(0, 6);
  const highlightedService = servicesData[0];

  return (
    <section id="catalog" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">OFFRES & PACKS</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-accent"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Des solutions sur mesure pour startup, entreprise et projets ambitieux, avec un style futuriste et une livraison maîtrisée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="futuristic-panel rounded-[2rem] overflow-hidden border border-accent/10 hover:border-accent/40 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-text mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-accent font-bold text-2xl">{service.price}</span>
                  <WhatsAppButton
                    number={contactsData.whatsappBusiness}
                    message={`Bonjour, je suis intéressé(e) par ${service.title} à ${service.price}`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="futuristic-panel border border-accent/30 rounded-[2rem] p-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-text-secondary uppercase tracking-[0.35em] text-xs mb-2">Offre phare</p>
              <h3 className="text-2xl font-bold text-text">{highlightedService.title}</h3>
              <p className="text-text-secondary mt-3 max-w-2xl">{highlightedService.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-accent font-bold text-3xl">{highlightedService.price}</span>
              <WhatsAppButton
                number={contactsData.whatsappBusiness}
                message={autoMessages.welcome}
              >
                Commander
              </WhatsAppButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}