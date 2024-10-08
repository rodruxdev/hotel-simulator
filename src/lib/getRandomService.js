const SERVICE_TYPES = ["Paquete completo", "Medio paquete", "Consumo mínimo"];

export const getRandomService = () => {
  try {
    const newService = {};
    const index = Math.floor(Math.random() * SERVICE_TYPES.length);
    newService.type = SERVICE_TYPES[index];
    newService.people = Math.ceil(Math.random() * 30) + 20;
    return newService;
  } catch (e) {
    const message = `¡ERROR! Por favor recarga la página
    Error: ${e.message}`;
    alert(message);
  }
};
