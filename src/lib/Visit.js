class Visit {
  constructor() {
    this.name = { field: "Nombre", value: "Rodrigo" };
    this.lastName = { field: "Apellido", value: "Goitia" };
    this.country = { field: "Origen", value: "Bolivia" };
    this.adults = { field: "Cantidad de adultos", value: 2 };
    this.children = { field: "Cantidad de niños", value: 0 };
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    this.date = {
      field: "Llegada",
      value: date.toLocaleDateString("es-BO", options),
    };
    this.days = { field: "Días de estadía", value: 2 };
  }
}

export default Visit;
