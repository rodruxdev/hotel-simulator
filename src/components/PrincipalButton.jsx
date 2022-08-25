import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/Buttons.css";

const PrincipalButton = () => {
  const { state, addVisit } = useContext(AppContext);
  const handleClick = () => {
    addVisit(state.booked);
  };
  return (
    <button
      className="bg-primary text-white Button text-lg"
      onClick={handleClick}
    >
      GENERAR VISITA ALEATORIA
    </button>
  );
};

export default PrincipalButton;
