import React from "react";
import HeroImg from "../../assets/Menu.png"; // Ajusta la ruta a tu imagen

// Componente Modal
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[70px] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 z-50 max-h-[80vh] overflow-auto custom-scrollbar">
      {/* Header del Modal */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={onClose} className="text-xl font-bold">X</button>
      </div>

      {/* Imagen del Menú */}
      <div className="w-full h-auto flex justify-center">
        <img 
          src={HeroImg} 
          alt="Menú de Panadería" 
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Modal;
