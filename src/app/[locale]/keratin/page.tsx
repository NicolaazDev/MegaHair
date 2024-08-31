"use client";

import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

import { useTranslations } from "next-intl";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function KeratinTypesPage() {
  const t = useTranslations("keratin");

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
    <main className=" relative min-h-screen !bg-foreground">
      <Header className="!bg-foreground" />
      <div className="w-full h-screen bg-foreground center relative overflow-hidden sm:items-start">
        <h1
          ref={titleRef}
          className="text-[24vw] leading-[0.8] sm:text-[44vw] translate-y-[100px] text-secondary font-bold font-bowens text-center absolute opacity-90"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" !inline-block "
          >
            KER
            <br className="sm:block hidden" />
            ATIN
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" !inline-block "
          >
            SYS
            <br className="sm:block hidden" />
            TEM
          </motion.span>
        </h1>
        <motion.img
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-2 w-[55px] h-auto object-contain z-[9999] bg-foreground rounded-[20px] sm:py-1"
          src="https://res.cloudinary.com/dmceve2cp/image/upload/v1725035493/Animation_-_1725035102180_2_lap8zu.gif"
        />
      </div>
      <div className="bg-foreground center px-14 py-12 sm:px-4">
        <h1 className="max-w-[1440px] w-full text-center text-[50px] font-bold text-background leading-[1] uppercase sm:text-[25px]">
          {t("description")}
        </h1>
      </div>
      <div className="w-full h-full bg-foreground mx-auto px-4 py-7 space-y-[100px] pb-[100px]">
        <section className="max-w-[1440px] mx-auto w-full center !justify-between overflow-hidden sm:center-col">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-464575644-1595615606.jpg"
            alt={t("section1")}
            className="max-w-[60%] w-full h-[420px] object-cover rounded-lg sm:max-w-[90%]"
          />
          <div className="w-fit text-background center-col">
            <h1 className="w-min text-end text-[80px] leading-[0.9] font-bold uppercase sm:text-[55px] sm:my-5 sm:text-center">
              {t("section1")}
            </h1>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto w-full center !justify-between overflow-hidden !flex-row-reverse sm:center-col sm:!flex-col">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-464575644-1595615606.jpg"
            alt={t("section2")}
            className="max-w-[60%] w-full h-[420px] object-cover rounded-lg sm:max-w-[90%]"
          />
          <div className="w-fit text-background center-col">
            <h1 className="w-min text-end text-[80px] leading-[0.9] font-bold uppercase sm:text-[55px] sm:my-5 sm:text-center">
              {t("section2")}
            </h1>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto w-full center !justify-between overflow-hidden sm:center-col ">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-464575644-1595615606.jpg"
            alt={t("section3")}
            className="max-w-[60%] w-full h-[420px] object-cover rounded-lg sm:max-w-[90%]"
          />
          <div className="w-fit text-background center-col">
            <h1 className="w-min text-end text-[80px] leading-[0.9] font-bold uppercase sm:text-[55px] sm:my-5 sm:text-center">
              {t("section3")}
            </h1>
          </div>
        </section>

        <div className="w-full h-[2px] bg-background opacity-70"></div>

        <section className="max-w-[1440px] mx-auto w-full center-col overflow-hidden">
          <div className="w-full text-background center my-4">
            <h1 className="w-min text-end text-[80px] leading-[0.9] font-bold uppercase sm:text-[55px]">
              {t("section4.title")}
            </h1>
          </div>
          <div className="center w-full space-x-10 !items-start sm:center-col sm:!space-x-0 sm:space-y-5 sm:!items-center">
            <div className="w-[50%] center-col sm:w-[90%] sm:mx-auto">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-464575644-1595615606.jpg"
                alt={t("section4.title1")}
                className="max-w-full w-full h-[450px] object-cover rounded-lg"
              />
              <h1 className="w-full mt-7 text-center text-[60px] leading-[0.9] font-bold text-background uppercase">
                {t("section4.title1")}
              </h1>
              <p className="w-full max-w-[90%] text-center text-[20px] leading-[1] mt-2 font-[400] text-background opacity-80">
                {t("section4.description1")}
              </p>
            </div>
            <div className="w-[50%] center-col sm:w-[90%] sm:mx-auto sm:!mt-[100px]">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-464575644-1595615606.jpg"
                alt={t("section4.title2")}
                className="max-w-full w-full h-[450px] object-cover rounded-lg"
              />
              <h1 className="w-full mt-7 text-center text-[60px] leading-[0.9] font-bold text-background uppercase">
                {t("section4.title2")}
              </h1>
              <p className="w-full max-w-[90%] text-center text-[20px] leading-[1] mt-2 font-[400] text-background opacity-80">
                {t("section4.description2")}
              </p>
            </div>
          </div>
        </section>
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}

export default KeratinTypesPage;
