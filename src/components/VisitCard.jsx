import React from "react";
import ListItem from "./ListItem";
import "../styles/Cards.css";

const VisitCard = () => {
  return (
    <article className="Card">
      <h2 className="mb-4 text-xl font-bold">Visita #1</h2>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </article>
  );
};

export default VisitCard;
