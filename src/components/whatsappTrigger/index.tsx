"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: "bottom-left" | "bottom-right";
  bgColor?: string;
  iconSize?: number;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
  message = "Olá, gostaria de saber mais sobre seus produtos!",
  position = "bottom-right",
  bgColor = "#25D366",
  iconSize = 24,
}) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const buttonPosition = position === "bottom-right" ? "right-10" : "left-10";

  return (
    <div
      className={`fixed ${buttonPosition} bottom-10 cursor-pointer z-[9999999] whatsapp-btn`}
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        padding: "16px",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        animation: "pulse 2s infinite",
      }}
    >
      <FaWhatsapp size={iconSize} color="#fff" />
    </div>
  );
};

export default FloatingWhatsAppButton;
