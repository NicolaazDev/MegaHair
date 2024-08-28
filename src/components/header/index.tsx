import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useFormContext } from "@/context/formContext";

import { MailMinus, InstagramIcon, VibrateIcon } from "lucide-react";

function HeaderTopBar() {
  return (
    <div className="w-full min-h-[50px] bg-red-900 center text-white">
      <div className="flex space-x-12 max-w-[1440px] w-full !justify-end [&>a]:font-montserrat [&>a]:font-[200]">
        <a
          href="mailto:seuemail@dominio.com"
          className="flex items-center space-x-2 hover:text-gray-300"
        >
          <MailMinus strokeWidth={1} />
          <span>seuemail@dominio.com</span>
        </a>

        <a
          href="tel:+551199999999"
          className="flex items-center space-x-2 hover:text-gray-300"
        >
          <VibrateIcon strokeWidth={1} className="rotate-[22deg]" />
          <span>(11) 99999-9999</span>
        </a>

        <a
          href="https://www.instagram.com/seuusuario"
          className="flex items-center space-x-2 hover:text-gray-300"
        >
          <InstagramIcon strokeWidth={1} />
          <span>@seuusuario</span>
        </a>
      </div>
    </div>
  );
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isRegister, toggleForm } = useFormContext();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-transparent absolute top-0 text-foreground w-full center-col !justify-start h-[80px] z-10">
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
            <a
              href="#inicio"
              onClick={(e) => handleScroll(e, "inicio")}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleScroll(e, "servicos")}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Serviços
            </a>
            <a
              href="#agendamentos"
              onClick={(e) => handleScroll(e, "agendamentos")}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Agendamentos
            </a>
          </div>

          <div className="object-contain center absolute top-[25%] center left-[50%] scale-[1] w-[140px] rounded-full border border-solid border-secondary translate-x-[-50%] z-10 bg-foreground h-[100px]">
            <img
              src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724797279/ISLAVA-10_vntdsj.png"
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex space-x-6 z-10">
            <a
              href="#sobre"
              onClick={(e) => handleScroll(e, "sobre")}
              className="hover:border-b-background border z-10 border-solid border-transparent transition-all"
            >
              Sobre Nós
            </a>
            <a
              href="#galeria"
              onClick={(e) => handleScroll(e, "galeria")}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Galeria
            </a>
            <a
              href="#contato"
              onClick={(e) => handleScroll(e, "contato")}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Contato
            </a>
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
  );
};

export default Header;
