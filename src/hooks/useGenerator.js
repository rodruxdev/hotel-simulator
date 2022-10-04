import { useState } from "react";
import { getRandomIncident } from "../lib/getRandomIncident";
import Visit from "../lib/Visit";

const initialState = {
  booked: 1,
  visits: [],
  incident: "",
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

  const addIncident = () => {
    const incident = getRandomIncident();
    setState({ ...state, incident });
  };

  const deleteIncident = () => {
    setState({ ...state, incident: "" });
  };

  return {
    state,
    setBooked,
    addVisit,
    deleteAllVisits,
    addIncident,
    deleteIncident,
  };
};

export default useGenerator;
