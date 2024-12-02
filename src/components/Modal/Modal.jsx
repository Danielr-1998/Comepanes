import React from "react";

// Componente Modal
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[70px] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/12 z-50">
      {/* Header del Modal */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Menú de Panadería</h2>
        <button onClick={onClose} className="text-xl font-bold">X</button>
      </div>

      {/* Secciones del Modal */}
      <div className="space-y-8">
        {/* Sección de Bebidas */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Bebidas</h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Café Espresso</span>
              <span className="font-semibold">$2.00</span>
            </li>
            <li className="flex justify-between">
              <span>Jugo de Naranja</span>
              <span className="font-semibold">$2.50</span>
            </li>
          </ul>
        </div>

        {/* Sección de Snacks */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Snacks</h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Croissant de Mantequilla</span>
              <span className="font-semibold">$3.00</span>
            </li>
            <li className="flex justify-between">
              <span>Galletas de Avena</span>
              <span className="font-semibold">$1.50</span>
            </li>
          </ul>
        </div>

        {/* Sección de Comidas */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Comidas</h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Pan Artesanal</span>
              <span className="font-semibold">$2.50</span>
            </li>
            <li className="flex justify-between">
              <span>Sandwich de Pollo</span>
              <span className="font-semibold">$4.00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Botón para cerrar el modal */}
      <div className="mt-6 text-center">
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold w-full"
        >
          Cerrar Menú
        </button>
      </div>
    </div>
  );
};

export default Modal;
