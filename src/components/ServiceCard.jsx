import React from "react";
import ListItem from "./ListItem";
import "../styles/Cards.css";

const ServiceCard = ({ service }) => {
  return (
    <article className="Card">
      <h2 className="mb-4 text-xl font-bold">Nuevo servicio</h2>
      <ListItem field={"Cantidad de personas"} value={service?.people} />
      <ListItem field={"Tipo de paquete"} value={service?.type} />
    </article>
  );
};

export default ServiceCard;
