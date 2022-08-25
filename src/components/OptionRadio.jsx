import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const OptionRadio = ({ index }) => {
  const { state, setBooked } = useContext(AppContext);

  const handleChange = (event) => {
    const value = Number(event.target.value);
    setBooked(value);
  };
  return (
    <div className="flex justify-evenly items-center">
      <label htmlFor={`checkbox-${index}`} className="flex items-center gap-3">
        <div className="w-6 h-6 border-secondary border-2 grid place-items-center rounded-full">
          <div
            className={`bg-secondary w-4 h-4 rounded-full ${
              index !== state.booked ? "hidden" : ""
            }`}
          />
        </div>
        <span>{index === 1 ? "Visita CON reserva" : "Visita SIN reserva"}</span>
      </label>
      <input
        id={`checkbox-${index}`}
        type="radio"
        name="visit-type"
        className="hidden"
        value={index}
        onChange={handleChange}
      />
    </div>
  );
};

export default OptionRadio;
