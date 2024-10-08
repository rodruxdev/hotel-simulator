import OptionRadio from "./components/OptionRadio";
import PrincipalButton from "./components/PrincipalButton";
import SecondaryButton from "./components/SecondaryButton";
import Title from "./components/Title";
import CardsContainer from "./containers/CardsContainer";
import IncidentContainer from "./containers/IncidentContainer";
import ServiceContainer from "./containers/ServiceContainer";
import AppContext from "./context/AppContext";
import useGenerator from "./hooks/useGenerator";

function App() {
  const initialState = useGenerator();

  return (
    <AppContext.Provider value={initialState}>
      <main className="w-full flex items-center justify-center flex-col py-14">
        <Title />
        <section className="m-4 flex justify-around items-center gap-10 flex-wrap">
          <OptionRadio index={1} />
          <OptionRadio index={2} />
          <PrincipalButton type="visit">
            GENERAR VISITA ALEATORIA
          </PrincipalButton>
          <SecondaryButton type="visit">
            <span>LIMPIAR VISITAS</span>
          </SecondaryButton>
        </section>
        <CardsContainer />
        <IncidentContainer />
        <ServiceContainer />
      </main>
    </AppContext.Provider>
  );
}

export default App;
