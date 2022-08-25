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

  const addVisit = (booked) => {
    const visit = new Visit(booked);
    const newVisits = state.visits;
    newVisits.push(visit);
    setState({ ...state, visits: newVisits });
  };

  const deleteAllVisits = () => {
    setState({ ...state, visits: [] });
  };

  return { state, setBooked, addVisit, deleteAllVisits };
};

export default useGenerator;
