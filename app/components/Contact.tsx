"use client";
import { motion } from "framer-motion";
import { MessageCircle, Copy, Check } from "lucide-react";
import { contactsData, socialLinks, autoMessages } from "../lib/data";
import WhatsAppButton from "./WhatsAppButton";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, number: string) => {
    navigator.clipboard.writeText(text);
    setCopied(number);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">CONTACTER MAGISTRAL</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-accent"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Projet digital, infrastructure IT ou accompagnement réseau ? On construit ensemble un système fiable, esthétique et prêt pour l’avenir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-accent">Contactez-nous</h3>
            
            {/* WhatsApp Business */}
            <div className="bg-secondary p-4 rounded-xl border border-border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-text-secondary text-sm">WhatsApp Business</p>
                  <p className="text-text font-semibold text-lg">{contactsData.whatsappBusiness}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(contactsData.whatsappBusiness, "wb")}
                    className="p-2 bg-primary rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    {copied === "wb" ? <Check className="w-5 h-5 text-accent" /> : <Copy className="w-5 h-5 text-text-secondary" />}
                  </button>
                  <WhatsAppButton number={contactsData.whatsappBusiness} message={autoMessages.welcome}>
                    <MessageCircle className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-secondary p-4 rounded-xl border border-border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-text-secondary text-sm">WhatsApp</p>
                  <p className="text-text font-semibold text-lg">{contactsData.whatsapp}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(contactsData.whatsapp, "wa")}
                    className="p-2 bg-primary rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    {copied === "wa" ? <Check className="w-5 h-5 text-accent" /> : <Copy className="w-5 h-5 text-text-secondary" />}
                  </button>
                  <WhatsAppButton number={contactsData.whatsapp} message={autoMessages.welcome}>
                    <MessageCircle className="w-4 h-4" />
                  </WhatsAppButton>
                </div>
              </div>
            </div>

            {/* Téléphone */}
            <div className="bg-secondary p-4 rounded-xl border border-border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-text-secondary text-sm">Téléphone</p>
                  <p className="text-text font-semibold text-lg">{contactsData.phone}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(contactsData.phone, "phone")}
                  className="p-2 bg-primary rounded-lg hover:bg-accent/10 transition-colors"
                >
                  {copied === "phone" ? <Check className="w-5 h-5 text-accent" /> : <Copy className="w-5 h-5 text-text-secondary" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Auto Messages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-accent">Suivez-nous</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 text-center text-text hover:text-accent"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Messages Automatiques */}
            {/* <div className="mt-8">
              <h3 className="text-2xl font-bold text-accent mb-4">Messages Automatiques</h3>
              <div className="space-y-4">
                <div className="bg-secondary p-4 rounded-xl border border-border">
                  <p className="text-accent font-semibold mb-2">📩 Message d'accueil</p>
                  <p className="text-text-secondary text-sm whitespace-pre-line">{autoMessages.welcome}</p>
                </div>
                <div className="bg-secondary p-4 rounded-xl border border-border">
                  <p className="text-accent font-semibold mb-2">🔄 Message de relance</p>
                  <p className="text-text-secondary text-sm whitespace-pre-line">{autoMessages.reminder}</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}