import React, { useContext } from "react";
import ListItem from "./ListItem";
import "../styles/Cards.css";
import AppContext from "../context/AppContext";

const VisitCard = ({ index }) => {
  const { state } = useContext(AppContext);
  const visit = state.visits[index];
  return (
    <article className="Card">
      <h2 className="mb-4 text-xl font-bold">Visita #{index + 1}</h2>
      {Object.keys(visit).map((key) => (
        <ListItem field={visit[key].field} value={visit[key].value} key={key} />
      ))}
    </article>
  );
};

export default VisitCard;
