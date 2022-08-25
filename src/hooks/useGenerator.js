import { useState } from "react";

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

  return { state, setBooked };
};

export default useGenerator;
