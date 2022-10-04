import React from "react";
import "../styles/Cards.css";

const IncidentCard = ({ children }) => {
  return <p className="Card my-6 text-xl">{children}</p>;
};

export default IncidentCard;
