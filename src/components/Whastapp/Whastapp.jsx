// Whastapp.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whastapp = () => {
  return (
    <a
      href="https://wa.me/573206490156?text=¡Hola!%20Estoy%20interesado%20en%20un%20domicilio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      title="Chatea con nosotros en WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default Whastapp;
