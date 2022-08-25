import React from "react";
import { FaHotel } from "react-icons/fa";

const OptionCheckbox = () => {
  return (
    <div className="flex justify-evenly items-center">
      <label htmlFor="" className="flex items-center gap-3">
        <div className="w-8 h-8 border-secondary border-2 grid place-items-center rounded">
          <FaHotel className="text-black w-5 h-5 hidden" />
        </div>
        <span>Visita con Reserva</span>
      </label>
      <input type="radio" name="visit-type" className="hidden" />
    </div>
  );
};

export default OptionCheckbox;
