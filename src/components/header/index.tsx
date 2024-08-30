"use client";

import React, { Fragment, useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useFormContext } from "@/context/formContext";

import { MailMinus, InstagramIcon, VibrateIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function HeaderTopBar() {
  return (
    <div className="w-full min-h-[40px] bg-red-900 center text-white">
      <div className="flex space-x-12 max-w-[1440px] w-full !justify-end [&>a]:font-montserrat [&>a]:font-[200]">
        <a
          href="mailto:islava.adm@gmail.com"
          className="flex items-center space-x-2 hover:text-gray-300"
        >
          <MailMinus strokeWidth={1} />
          <span>islava.adm@gmail.com</span>
        </a>

        <a
          href="tel:+3519274441193"
          className="flex items-center space-x-2 hover:text-gray-300"
        >
          <VibrateIcon strokeWidth={1} className="rotate-[22deg]" />
          <span>+351 927 444 1193</span>
        </a>

        <a
          href="https://www.instagram.com/islava.eu"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 hover:text-gray-300"
        >
          <InstagramIcon strokeWidth={1} />
          <span>@islava.eu</span>
        </a>
      </div>
    </div>
  );
}

interface HeaderProps {
  className?: string;
}

function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    router.push(newLocale);
  };

  return (
    <Select onValueChange={switchLocale} defaultValue={locale}>
      <SelectTrigger className="w-[90px] translate-y-[-3px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="w-[20px]">
        <SelectGroup>
          <SelectItem value="pt">PT-BR</SelectItem>
          <SelectItem value="en">EN-US</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isRegister, toggleForm } = useFormContext();

  const t = useTranslations("header");

  const router = useRouter();
  const pathname = usePathname();

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
      setIsMenuOpen(false);
    } else {
      router.push(`/#${targetId}`);
    }
  };

  const links = [
    { id: "home", label: t("link1") },
    { id: "products", label: t("link2") },
    { id: "gallery", label: t("link3") },
  ];

  const linksRight = [
    { id: "about", label: t("link4") },
    { id: "faq", label: t("link5") },
    { id: "contact", label: t("link6") },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  const linkVariantsRight = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: (linksRight.length - index - 1) * 0.2,
      },
    }),
  };

  return (
    <AnimatePresence>
      <header
        className={`bg-transparent absolute top-0 text-foreground w-full center-col !justify-start h-[80px] z-10 ${className}`}
      >
        <HeaderTopBar />
        <div className="center font-montserrat !justify-between !max-w-[1440px] w-full relative">
          <div className="sm:flex hidden">
            <button
              className="text-white focus:outline-none z-30 ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>

          <nav className="flex justify-between !items-end pb-4 w-full text-background sm:hidden border border-solid border-transparent border-b-secondary h-[80px]">
            <div className="flex space-x-6">
              {links.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="hover:border-b-background border border-solid border-transparent"
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={linkVariants}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="object-contain center absolute top-[25%] center left-[50%] scale-[1] w-[140px] rounded-full border border-solid border-secondary translate-x-[-50%] z-10 bg-foreground h-[100px]">
              <img
                src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724797279/ISLAVA-10_vntdsj.png"
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex space-x-6 z-10">
              {linksRight.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="hover:border-b-background border border-solid border-transparent"
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={linkVariantsRight}
                >
                  {link.label}
                </motion.a>
              ))}
              <LocaleSwitcher />
            </div>
          </nav>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="sm:flex flex-col items-center hidden bg-card-foreground fixed top-0 z-20 w-[100vw] pt-[60px] pb-[40px] text-white space-y-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="#features"
                onClick={(e) => handleScroll(e, "features")}
                className="hover:border-b-background border border-solid border-transparent transition-all"
              >
                Funcionalidades
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, "pricing")}
                className="hover:border-b-background border border-solid border-transparent transition-all"
              >
                Preços
              </a>
              <a
                href="#signup"
                onClick={(e) => {
                  if (!isRegister) toggleForm();
                }}
                className="hover:border-b-background border border-solid border-transparent transition-all"
              >
                Cadastre-se
              </a>
              <button
                onClick={(e) => {
                  if (isRegister) toggleForm();
                }}
                className="main-gradient w-[80%] text-center text-white font-poppinsLight py-2 px-4 rounded"
              >
                Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </AnimatePresence>
  );
};

export default Header;
