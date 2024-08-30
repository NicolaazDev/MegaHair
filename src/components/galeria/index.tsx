"use client";

import { useTranslations } from "next-intl";
import { FaInstagram } from "react-icons/fa";

function GallerySection() {
  const t = useTranslations("gallery");

  return (
    <section
      id="gallery"
      className="gallery-section py-12 bg-foreground mt-[-14%] galeria-section relative"
    >
      <div className=" mx-auto px-4 max-w-[1440px] mt-[12%]">
        <h2 className="text-[100px] title-gradient font-bold font-bowens tracking-wider text-center mb-8">
          {t("title")}
        </h2>
        <div className="grid grid-cols-3 grid-rows-[repeat(3,400px)] gap-2 w-[90%] mx-auto">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden"
            >
              <img
                src={`https://www.procaphair.com.br/wp-content/uploads/2020/04/megahair.jpg`}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FaInstagram className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>
        <div className="center my-12">
          <a
            href="https://www.instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className=" main-button center"
          >
            <FaInstagram size={35} />
            <span className="ml-2">{t("cta")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
