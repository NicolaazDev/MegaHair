"use client";

import React from "react";

import {
  TruckIcon,
  BadgeCheckIcon,
  BadgeDollarSignIcon,
  RepeatIcon,
  HeadsetIcon,
  ScissorsIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const BenefitsSection: React.FC = () => {
  const t = useTranslations("benefits");

  const benefits = [
    {
      icon: (
        <BadgeCheckIcon
          strokeWidth={1}
          size={70}
          className="text-primary mb-4"
        />
      ),
      text: t("text1"),
    },
    {
      icon: (
        <TruckIcon strokeWidth={1} size={70} className="text-primary mb-4" />
      ),
      text: t("text2"),
    },
    {
      icon: (
        <BadgeDollarSignIcon
          strokeWidth={1}
          size={70}
          className="text-primary mb-4"
        />
      ),
      text: t("text3"),
    },
    {
      icon: (
        <RepeatIcon size={70} strokeWidth={1} className="text-primary mb-4" />
      ),
      text: t("text4"),
    },
    {
      icon: (
        <ScissorsIcon size={70} strokeWidth={1} className="text-primary mb-4" />
      ),
      text: t("text5"),
    },
    {
      icon: (
        <HeadsetIcon size={70} strokeWidth={1} className="text-primary mb-4" />
      ),
      text: t("text6"),
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 px-6 bg-transparent z-40 relative">
      <div className="center-col bg-white p-5 rounded-xl py-10 border border-gray-500 border-solid sm:w-[99%]">
        <h1 className="text-[80px] uppercase leading-[1] font-bold font-montserrat sm:text-[45px]">
          {t("title")}
        </h1>
        <p className="text-lg text-foreground mb-8 text-start max-w-xl">
          {t("subtitle")}
        </p>
        <div className="grid grid-cols-3 max-w-[1440px] w-full mt-10 sm:mt-0 p-4 sm:grid-cols-1">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`center-col space-x-4 p-6 py-10  border border-solid border-[#00000071] text-lg text-secondary font-semibold 
            ${index == 0 && "border-t-0 border-l-0"} 
            ${index == 2 && "border-t-0 border-r-0"} 
            ${index == 3 && "border-t-0 border-l-0"} 
            ${index !== 0 && "border-t-0"} 
            ${index % 3 !== 0 && "border-l-0"}
              
            ${index == 3 && "border-b-0 border-l-0"} 
            ${index == 4 && "border-b-0 border-l-0"} 
            ${
              index == 5 && "border-b-0 border-r-0 boreder-l-0"
            } sm:border-transparent`}
            >
              {benefit.icon}
              <span className="text-center font-montserrat font-[600] leading-[1.1] text-foreground">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
