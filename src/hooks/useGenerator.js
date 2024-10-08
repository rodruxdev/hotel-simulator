import { useState } from "react";
import { getRandomIncident } from "../lib/getRandomIncident";
import Visit from "../lib/Visit";
import { getRandomService } from "../lib/getRandomService";

const initialState = {
  booked: 1,
  visits: [],
  incident: "",
  service: {},
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

  const addService = () => {
    const service = getRandomService();
    setState({ ...state, service });
  };

  const deleteService = () => {
    setState({ ...state, service: {} });
  };

  return {
    state,
    setBooked,
    addVisit,
    deleteAllVisits,
    addIncident,
    deleteIncident,
    addService,
    deleteService,
  };
};

export default useGenerator;
