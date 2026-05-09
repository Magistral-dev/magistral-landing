"use client";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { servicesData, contactsData, autoMessages } from "../lib/data";
import WhatsAppButton from "./WhatsAppButton";

export default function Catalog() {
  const premiumServices = servicesData.slice(0, 4);
  const videoService = servicesData[4];

  return (
    <section id="catalog" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            NOTRE CATALOGUE
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Des services adaptés à tes besoins, à prix étudiant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {premiumServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-primary rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-text mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
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

        {/* Service Vidéo mis en avant */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-primary to-secondary border border-accent/30 rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-text">{videoService.title}</h3>
              <p className="text-text-secondary">{videoService.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-accent font-bold text-2xl">{videoService.price}</span>
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