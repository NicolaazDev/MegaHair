"use client";

import { useTranslations } from "next-intl";
import { FaInstagram } from "react-icons/fa";

const photosArray = [
  {
    imgSrc: "/gif1.gif",
  },
  {
    imgSrc: "/gif2.gif",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1727314625/IMG_5033_ts7vvu.jpg",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1727314625/IMG_5029_ecjf4b.jpg",
  },

  {
    imgSrc:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1727314625/IMG_5030_ocyrsj.jpg",
  },

  {
    imgSrc:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1727314624/IMG_5032_mcpz7p.jpg",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1727314546/IMG_5025_m2o5eh.jpg",
  },

  {
    imgSrc:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1727314546/IMG_5026_oqer4p.jpg",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1727314546/IMG_5027_ufb1hj.jpg",
  },
];

function GallerySection() {
  const t = useTranslations("gallery");

  return (
    <section
      id="gallery"
      className="gallery-section py-12 bg-foreground mt-[-14%] sm:mt-[-32%] galeria-section relative"
    >
      <div className=" mx-auto px-4 max-w-[1440px] mt-[12%]">
        <h2 className="text-[100px] title-gradient font-bold font-bowens tracking-wider text-center mb-8">
          {t("title")}
        </h2>
        <div className="grid grid-cols-3 grid-rows-[repeat(3,400px)] gap-2 w-[90%] mx-auto sm:grid-cols-1 sm:grid-rows-9 z-[99999]">
          {photosArray.map((_, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden z-[99999]"
            >
              <img
                src={_.imgSrc}
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
            href="https://www.instagram.com/islava.eu"
            target="_blank"
            rel="noopener noreferrer"
            className=" main-button center sm:!w-[90%]"
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
