import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

const OurLocation = () => {
  return (
    <div className="container py-12">
      {/* header section */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Visítanos</h1>
        <p className="text-lg mt-4">Estamos aquí para servirte.</p>
        
      </div>

      {/* icons section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <FaMapMarkerAlt className="text-3xl" />
          <div className="text-center">
            <p className="text-xl font-semibold">Dirección</p>
            <p className="text-sm">Mz 6 Cs 10, Altavista, Cuba</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <IoCallSharp className="text-3xl" />
          <div className="text-center">
            <p className="text-xl font-semibold">Teléfono</p>
            <p className="text-sm">340 5829</p>
          </div>
        </div>

        {/* Sección de Horario */}
        <div className="flex flex-col justify-center items-center gap-3">
          <FiClock className="text-3xl" />
          <div className="text-center">
            <p className="text-xl font-semibold">Horario</p>
            <p className="text-sm">Lunes - Domingo: 6:00 AM - 9:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
