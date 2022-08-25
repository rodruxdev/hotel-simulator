import React, { useContext } from "react";
import VisitCard from "../components/VisitCard";
import AppContext from "../context/AppContext";

const CardsContainer = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      {state.visits.length > 0 ? (
        <section className="w-[90%] my-16 grid lg:grid-cols-2 gap-x-8 gap-y-10 max-w-[1300px]">
          {state.visits.map((visit, index) => (
            <VisitCard index={index} key={visit.name + index} />
          ))}
        </section>
      ) : null}
    </>
  );
};

export default CardsContainer;
