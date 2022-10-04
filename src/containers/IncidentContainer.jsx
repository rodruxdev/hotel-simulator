import React from "react";
import IncidentCard from "../components/IncidentCard";
import PrincipalButton from "../components/PrincipalButton";
import SecondaryButton from "../components/SecondaryButton";

const IncidentContainer = () => {
  return (
    <section className="w-4/5 my-16">
      <div className="flex justify-center items-center gap-10">
        <h2 className="text-3xl font-bold">Nada puede salir peor o mejor...</h2>
        <PrincipalButton />
        <SecondaryButton />
      </div>
      <IncidentCard />
    </section>
  );
};

export default IncidentContainer;
