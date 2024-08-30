"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const t = useTranslations("FAQ");

  const faqs = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      question: t("question4"),
      answer: t("answer4"),
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-[70px] uppercase font-bold mb-8 text-center">
          {t("title")}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg">
              <button
                className="w-full p-4 text-left bg-gray-100 border-solid border border-transparent !border-b-primary focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </button>
              <div
                className={`p-4 ${activeIndex === index ? "block" : "hidden"}`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
