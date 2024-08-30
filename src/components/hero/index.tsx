"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../header";
import { useFormContext } from "@/context/formContext";
import { AnimatePresence, motion } from "framer-motion";
import GradualSpacing from "../ui/gradual-spacing";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <AnimatePresence>
      <section
        id="home"
        className="center min-h-[900px] h-[100vh] bg-foreground relative overflow-hidden hero-section"
      >
        <div className="max-w-[1440px] center z-10 !justify-between w-full sm:center-col sm:text-center sm:px-4 sm:py-[80px] space-x-4">
          <div className="w-[55%]">
            <GradualSpacing
              className="text-[80px] text-start title-gradient font-bowens uppercase leading-[1] w-auto font-[900] tracking-wide mb-4 sm:text-[44px]"
              text={t("title")}
            />
            <GradualSpacing
              text={t("subtitle")}
              className="text-3xl mb-6 text-background font-montserrat font-[300] opacity-80 sm:text-[22px]"
            />

            <motion.button
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="main-button"
            >
              {t("cta")}
            </motion.button>
          </div>
          <div className="w-[45%] z-[-1]">
            <div>
              <img
                src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724803679/pngegg_11_jd9sq9.png"
                alt="hero"
                className="z-[0] h-screen opacity-50"
              />
            </div>
          </div>
        </div>
        <Header />
      </section>
    </AnimatePresence>
  );
};

export default Hero;
