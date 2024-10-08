import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/Buttons.css";

const PrincipalButton = ({ type, children }) => {
  const { state, addVisit, addIncident, addService } = useContext(AppContext);
  const handleClick = () => {
    if (type === "visit") {
      addVisit(state.booked);
    }
    if (type === "incident") {
      addIncident();
    }
    if (type === "service") {
      addService();
    }
  };
  return (
    <button
      className="bg-primary text-white Button text-lg"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default PrincipalButton;
