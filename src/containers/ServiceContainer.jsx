import React, { useContext } from "react";
import PrincipalButton from "../components/PrincipalButton";
import SecondaryButton from "../components/SecondaryButton";
import AppContext from "../context/AppContext";
import ServiceCard from "../components/ServiceCard";

const ServiceContainer = () => {
  const { state } = useContext(AppContext);
  return (
    <section className="w-4/5 mb-10">
      <div className="flex justify-center items-center gap-10">
        <h2 className="text-3xl font-bold">
          Llegó una nueva solicitud de servicio
        </h2>
        <PrincipalButton type="service">GENERAR SERVICIO</PrincipalButton>
        <SecondaryButton type="service">
          <span>LIMPIAR SERVICIO</span>
        </SecondaryButton>
      </div>
      <div className="w-3/5 mx-auto mt-10">
        {!!state.service?.people && <ServiceCard service={state.service} />}
      </div>
    </section>
  );
};

export default ServiceContainer;
