import { useState } from "react";
import Visit from "../lib/Visit";

const initialState = {
  booked: 1,
  visits: [],
};

const useGenerator = () => {
  const [state, setState] = useState(initialState);

  const setBooked = (newValue) => {
    const newState = { ...state, booked: newValue };
    setState(newState);
  };

  const addVisit = () => {
    const visit = new Visit();
    const newVisits = state.visits;
    newVisits.push(visit);
    setState({ ...state, visits: newVisits });
  };

  return { state, setBooked, addVisit };
};

export default useGenerator;
