"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Mega Hair Natural",

      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHeyP6mPS7LFWtFTjBi5vrDg63VI9xa3sSt3KGPd55vvN0354Q-JZQkLxQXpBeSpgzgBhdO2VHcsn3RLzZxj-8KXZvka313MNRAtOIQU8&usqp=CAE",
    },
    {
      id: 2,
      name: "Mega Hair Cacheado",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHeyP6mPS7LFWtFTjBi5vrDg63VI9xa3sSt3KGPd55vvN0354Q-JZQkLxQXpBeSpgzgBhdO2VHcsn3RLzZxj-8KXZvka313MNRAtOIQU8&usqp=CAE",
    },
    {
      id: 3,
      name: "Mega Hair Liso",

      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHeyP6mPS7LFWtFTjBi5vrDg63VI9xa3sSt3KGPd55vvN0354Q-JZQkLxQXpBeSpgzgBhdO2VHcsn3RLzZxj-8KXZvka313MNRAtOIQU8&usqp=CAE",
    },
    {
      id: 13,
      name: "Mega Hair Natural",

      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHeyP6mPS7LFWtFTjBi5vrDg63VI9xa3sSt3KGPd55vvN0354Q-JZQkLxQXpBeSpgzgBhdO2VHcsn3RLzZxj-8KXZvka313MNRAtOIQU8&usqp=CAE",
    },
    {
      id: 42,
      name: "Mega Hair Cacheado",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHeyP6mPS7LFWtFTjBi5vrDg63VI9xa3sSt3KGPd55vvN0354Q-JZQkLxQXpBeSpgzgBhdO2VHcsn3RLzZxj-8KXZvka313MNRAtOIQU8&usqp=CAE",
    },
    {
      id: 35,
      name: "Mega Hair Liso",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHeyP6mPS7LFWtFTjBi5vrDg63VI9xa3sSt3KGPd55vvN0354Q-JZQkLxQXpBeSpgzgBhdO2VHcsn3RLzZxj-8KXZvka313MNRAtOIQU8&usqp=CAE",
    },
  ];

  const t = useTranslations("products");

  return (
    <section
      id="products"
      className="center min-h-[600px] h-[80vh] sm:!h-auto sm:center-col sm:py-8 pr-0 bg-background relative"
    >
      <div className="max-w-[1440px] center w-full !justify-between !items-start ">
        <div className="center-col !items-start w-[40%] sm:w-full">
          <h2 className="text-[80px] uppercase leading-[1] font-bold -ml-[4px] text-foreground mb-4 sm:text-[60px] sm:text-center">
            {t("title")}
          </h2>
          <p className="text-lg text-foreground mb-8 text-start max-w-xl sm:text-center sm:w-full">
            {t("description")}
          </p>
          <div className="center space-x-1 sm:center-col sm:space-x-0 sm:space-y-2 sm:w-full">
            <Link
              href={"/tapes"}
              className="main-button text-center !w-[240px] sm:!w-[95%] whitespace-nowrap !bg-secondary !text-foreground"
            >
              TAPE SYSTEM
            </Link>
            <Link
              href={"/keratin"}
              className="main-button text-center !w-[240px] sm:!w-[95%] whitespace-nowrap !bg-secondary !text-foreground"
            >
              KERATIN SYSTEM
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl absolute right-0 sm:relative sm:scale-[0.9]">
        <Carousel>
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className=" max-w-[400px] h-[450px] w-full"
              >
                <div className="relative w-full h-full cursor-grab active:cursor-grabbing hair-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover mb-4 rounded-lg select-none"
                  />
                  <div className="absolute bottom-[0%] translate-y-[47%] max-h-[120px] h-full w-full left-0 p-6 z-10 select-none center !items-end transition-all hair-info">
                    <h3 className="text-xl whitespace-nowrap font-semibold text-secondary mb-2">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductsSection;
