import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import AppContext from "../context/AppContext";
import "../styles/Buttons.css";

const SecondaryButton = ({ type, children }) => {
  const { state, deleteAllVisits, deleteIncident } = useContext(AppContext);
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    if (type === "visit") {
      // eslint-disable-next-line no-restricted-globals
      const isExecuted = confirm(
        "¿Estas segura de eliminar todas las visitas?"
      );
      if (isExecuted) deleteAllVisits();
    }
    if (type === "incident") {
      // eslint-disable-next-line no-restricted-globals
      const isExecuted = confirm("¿Estas segura de eliminar el incidente?");
      if (isExecuted) deleteIncident();
    }
  };

  useEffect(() => {
    console.log(state.visits.length);
    if (type === "visit" && state.visits.length > 0) {
      setDisabled(false);
    } else if (type === "incident" && state.incident) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [state]);
  // Mejorar rendimiento
  return (
    <button
      className="Button bg-error text-white flex justify-center gap-3 items-center text-base disabled:opacity-70"
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
      <FaTrash />
    </button>
  );
};

export default SecondaryButton;
