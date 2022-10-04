import React, { useContext } from "react";
import IncidentCard from "../components/IncidentCard";
import PrincipalButton from "../components/PrincipalButton";
import SecondaryButton from "../components/SecondaryButton";
import AppContext from "../context/AppContext";

const IncidentContainer = () => {
  const { state } = useContext(AppContext);
  return (
    <section className="w-4/5 my-16">
      <div className="flex justify-center items-center gap-10">
        <h2 className="text-3xl font-bold">Nada puede salir peor o mejor...</h2>
        <PrincipalButton type="incident">GENERAR INCIDENTE</PrincipalButton>
        <SecondaryButton type="incident">
          <span>LIMPIAR INCIDENTE</span>
        </SecondaryButton>
      </div>
      {state.incident && <IncidentCard>{state.incident}</IncidentCard>}
    </section>
  );
};

export default IncidentContainer;
