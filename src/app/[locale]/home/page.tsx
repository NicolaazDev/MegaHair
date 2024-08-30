"use client";

import React from "react";

import Hero from "@/components/hero";
import ProductsSection from "@/components/products";
import BenefitsSection from "@/components/beneficios";
import FloatingWhatsAppButton from "@/components/whatsappTrigger";
import GallerySection from "@/components/galeria";
import AboutSection from "@/components/about";
import FAQSection from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("whatsapp");

  return (
    <main className="relative bg-background">
      <FloatingWhatsAppButton
        phoneNumber="+3519274441193"
        message={t("text")}
        position="bottom-right"
        bgColor="#25D366"
        iconSize={60}
      />
      <Hero />
      <ProductsSection />
      <BenefitsSection />
      <GallerySection />
      <AboutSection />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
