"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();

    if (pathname === "/pt" || pathname === "/en") {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert(pathname);
      router.push(`/#${targetId}`);
    }
  };

  return (
    <footer className="bg-foreground text-white py-10 sm:mt-5">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <div className="flex flex-wrap justify-between sm:flex-col">
          <div className="w-1/3 mb-6 sm:w-full">
            <h4 className="text-xl font-bold mb-4"> {t("linkTitle")}</h4>
            <ul>
              <li className="mb-2">
                <Link
                  href="/#home"
                  onClick={(e) => handleScroll(e, "home")}
                  className="hover:text-gray-300 transition-colors"
                >
                  {t("link1")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#products"
                  onClick={(e) => handleScroll(e, "products")}
                  className="hover:text-gray-300 transition-colors"
                >
                  {t("link2")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#about"
                  onClick={(e) => handleScroll(e, "about")}
                  className="hover:text-gray-300 transition-colors"
                >
                  {t("link3")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="hover:text-gray-300 transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#faq"
                  onClick={(e) => handleScroll(e, "faq")}
                  className="hover:text-gray-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/3 mb-6 sm:w-full">
            <h4 className="text-xl font-bold mb-4">{t("contact")}</h4>
            <ul>
              <li className="mb-2 center-col !items-start">
                <span className="text-gray-400">{t("adress")}</span>
                <p>Penafiel, Portugal</p>
              </li>
              <li className="mb-2 center-col !items-start">
                <span className="text-gray-400">{t("tel")}</span>
                <a href="tel:+3519274441193">+351 927 444 1193</a>
              </li>
              <li className="mb-2 center-col !items-start">
                <span className="text-gray-400">Email:</span>
                <a href="mailto:islava.adm@gmail.com">islava.adm@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="w-1/3 mb-6 sm:w-full">
            <h4 className="text-xl font-bold mb-4"> {t("titleAbout")}</h4>
            <p className="text-gray-400">{t("about")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
