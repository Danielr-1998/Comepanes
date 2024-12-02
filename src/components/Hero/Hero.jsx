import React, { useState } from "react";
import HeroImg from "../../assets/1.png";
import Modal from "../Modal/Modal";  // Asegúrate de importar el Modal

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir y cerrar el modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* Sección de texto */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Los mejores Panes de la Región
          </h1>
          <p>
            En ComePanes, creemos que cada bocado debe ser una experiencia deliciosa.
            Desde nuestros panes artesanales hasta nuestros irresistibles dulces y pasteles.
            Ven a disfrutar de la frescura de lo hecho a mano, todos los días.
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button 
              onClick={toggleModal} 
              className="primary-btn hover:scale-105 duration-200"
            >
              Menú
            </button>
          </div>
        </div>
        
        {/* Sección de imagen */}
        <div className="flex flex-col justify-center">
          <img
            src={HeroImg}
            alt="Hero"
            className="animate-spin-slow img-shadow w-[400px] mx-auto"
          />
        </div>
      </div>

      {/* Modal con el menú de productos */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Hero;
