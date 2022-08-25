import { faker } from "@faker-js/faker";
faker.setLocale("es");

class Visit {
  constructor() {
    this.name = { field: "Nombre", value: this.#createName() };
    this.lastName = { field: "Apellido", value: this.#createLastName() };
    this.country = { field: "Origen", value: this.#createCountry() };
    const { adults, children } = this.#createGuests();
    this.adults = { field: "Cantidad de adultos", value: adults };
    this.children = { field: "Cantidad de niños", value: children };
    this.date = { field: "Llegada", value: this.#createDate() };
    this.days = { field: "Días de estadía", value: this.#createDays() };
  }

  #createName() {
    return faker.name.firstName();
  }

  #createLastName() {
    return faker.name.lastName();
  }

  #createCountry() {
    return faker.address.country();
  }

  #createDate() {
    const januaryFirst = new Date(2023, 0, 1);
    const julyFirst = new Date(2023, 6, 1);
    const dateFaker = faker.date.between(januaryFirst, julyFirst);
    const date = new Date(dateFaker);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateString = date.toLocaleDateString("es-BO", options);
    return dateString;
  }

  #createDays() {
    const days = Math.ceil(Math.random() * 3);
    return days;
  }

  #createGuests() {
    const visitors = Math.ceil(Math.random() * 10);
    return { adults: visitors, children: 0 };
  }
}

export default Visit;
