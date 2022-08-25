import OptionRadio from "./components/OptionRadio";
import PrincipalButton from "./components/PrincipalButton";
import SecondaryButton from "./components/SecondaryButton";
import Title from "./components/Title";
import VisitCard from "./components/VisitCard";
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
          <PrincipalButton />
          <SecondaryButton />
        </section>
        <section className="w-[90%] my-16 grid lg:grid-cols-2 gap-x-8 gap-y-10 max-w-[1300px]">
          <VisitCard />
          <VisitCard />
          <VisitCard />
        </section>
      </main>
    </AppContext.Provider>
  );
}

export default App;
