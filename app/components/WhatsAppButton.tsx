"use client";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  number: string;
  message?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({ number, message = "", children }: WhatsAppButtonProps) {
  const cleanNumber = number.replace(/\s/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-accent text-primary font-bold px-6 py-3 rounded-xl hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      <MessageCircle className="w-5 h-5" />
      {children || "WhatsApp"}
    </a>
  );
}