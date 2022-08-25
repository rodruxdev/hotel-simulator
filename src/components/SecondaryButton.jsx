import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import AppContext from "../context/AppContext";
import "../styles/Buttons.css";

const SecondaryButton = () => {
  const { state, deleteAllVisits } = useContext(AppContext);

  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    const isExecuted = confirm("¿Estas segura de eliminar todas las visitas?");
    if (isExecuted) deleteAllVisits();
  };
  return (
    <button
      className="Button bg-error text-white flex justify-center gap-3 items-center text-base disabled:opacity-70"
      disabled={state.visits.length === 0}
      onClick={handleClick}
    >
      <span>LIMPIAR VISITAS</span>
      <FaTrash />
    </button>
  );
};

export default SecondaryButton;
