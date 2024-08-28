"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTyped } from "react-typed";
import LoginForm from "../form";
import Header from "../header";
import RegisterForm from "../form/registerForm";
import { useFormContext } from "@/context/formContext";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const { isRegister } = useFormContext();
  // const bgRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   gsap.to(bgRef.current, {
  //     yPercent: 50,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: bgRef.current,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <section className="center min-h-screen bg-foreground relative overflow-hidden hero-section">
      <div className="max-w-[1440px] center z-10 !justify-between w-full sm:center-col sm:text-center sm:px-4 sm:py-[80px] space-x-4">
        <div className="w-[55%]">
          <h1 className="text-[65px] title-gradient font-bowens uppercase leading-[1] w-auto font-[900] tracking-wide mb-4 sm:text-[44px]">
            Transforme Sua Rotina com o Cuidado que Você Merece
          </h1>
          <p className="text-2xl mb-6 text-background font-montserrat font-[300] opacity-80 sm:text-[22px]">
            Estilo de alta moda para casamentos, bailes de formatura, sessões de
            fotos e moda Shows e quaisquer outros eventos glamorosos onde você
            precise de um cabelo Estilista. Revele seu brilho interior!
          </p>
          <button className="main-button">Agende agora</button>
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
  );
};

export default Hero;
