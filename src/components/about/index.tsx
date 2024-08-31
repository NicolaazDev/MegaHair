"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

function AboutSection() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="about-section min-h-[600px] center bg-background sm:center-col"
    >
      <div className="center !flex-row-reverse mx-auto !justify-between px-4 max-w-[1440px] sm:!center-col sm:!flex-col-reverse">
        <div className="text-center mb-12 w-[40%] sm:w-full">
          <h2 className="text-[80px] font-bold text-end text-foreground uppercase mb-4 sm:text-center sm:leading-[1] sm:mt-10">
            {t("title")}
          </h2>
          <p className="text-lg text-end text-gray-600 sm:text-center sm:w-[90%] mx-auto">
            {t("description")}
          </p>
        </div>

        <div className=" bg-gray-200 w-[55%] h-[400px] rounded-lg overflow-hidden sm:w-full sm:mt-12">
          <div className="relative flex justify-center items-center h-full w-full logo-pattern">
            <Image
              src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724886824/ISLAVA-13_akotrc.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain bg-[#E5E7EB] rounded-full border border-solid border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
