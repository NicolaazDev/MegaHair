"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

import { useTranslations } from "next-intl";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TapeTypePage() {
  const t = useTranslations("tape");

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <main className=" relative min-h-screen">
      <Header className="!bg-foreground" />
      <div className="w-full h-screen bg-foreground center relative overflow-hidden">
        <h1
          ref={titleRef}
          className="text-[24vw] leading-[0.8] translate-y-[100px] text-secondary font-bold font-bowens text-center absolute opacity-90"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute rounded-3xl z-40 !inline-block bg-foreground border border-solid border-secondary py-7 px-3 top-[10%] right-[10%] text-secondary font-bold font-montserrat text-[20px]"
          >
            {t("cooming")}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" !inline-block "
          >
            TAPE
          </motion.span>
          <br />{" "}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" !inline-block "
          >
            SYSTEM
          </motion.span>
        </h1>
        <motion.img
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-2 w-[55px] h-auto object-contain"
          src="https://res.cloudinary.com/dmceve2cp/image/upload/v1725035493/Animation_-_1725035102180_2_lap8zu.gif"
        />
      </div>
      <div className="bg-foreground center px-14 py-12">
        <h1 className="max-w-[1440px] w-full text-center text-[50px] font-bold text-background leading-[1] uppercase">
          {t("description")}
        </h1>
      </div>

      <Footer />
    </main>
  );
}

export default TapeTypePage;
