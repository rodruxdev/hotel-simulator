import React from "react";
import "../styles/Buttons.css";

const SecondaryButton = () => {
  return (
    <button
      className="Button bg-error text-white flex justify-evenly items-center text-base disabled:opacity-70"
      disabled={true}
    >
      <span>LIMPIAR VISITAS</span>
      <div>Icon</div>
    </button>
  );
};

export default SecondaryButton;
