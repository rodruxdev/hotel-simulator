import INCIDENTS from "../utils/incidents";

export const getRandomIncident = () => {
  try {
    const index = Math.floor(Math.random() * INCIDENTS.length);
    return INCIDENTS[index];
  } catch (e) {
    const message = `¡ERROR! Por favor recarga la página
    Error: ${e.message}`;
    alert(message);
  }
};
