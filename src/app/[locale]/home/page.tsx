"use client";

import React, { useEffect, useState } from "react";

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

  const [iconSize, setIconSize] = useState(60);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIconSize(30);
      } else {
        setIconSize(60);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="relative bg-background">
      <FloatingWhatsAppButton
        phoneNumber="+3519274441193"
        message={t("text")}
        position="bottom-right"
        bgColor="#25D366"
        iconSize={iconSize}
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
