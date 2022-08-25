import { faker } from "@faker-js/faker";

class Visit {
  constructor(booked) {
    faker.setLocale("es");
    this.name = { field: "Nombre", value: this.#createName() };
    this.lastName = { field: "Apellido", value: this.#createLastName() };
    this.country = { field: "Origen", value: this.#createCountry() };
    const { adults, children } = this.#createGuests();
    this.adults = { field: "Cantidad de adultos", value: adults };
    this.children = { field: "Cantidad de niños", value: children };
    this.date = {
      field: "Llegada",
      value: booked === 1 ? this.#createDate() : this.#createDay(),
    };
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

  #createDay() {
    const index = Math.floor(Math.random() * 7);
    const dias = [
      "lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sábado",
      "domingo",
    ];
    return "El siguiente día " + dias[index];
  }

  #createDays() {
    const days = Math.ceil(Math.random() * 3);
    return days;
  }

  #createGuests() {
    const adults = this.#createAdults();
    let children = this.#createChildren();
    children = adults + children > 10 ? 10 - adults : children;
    return { adults, children };
  }

  #createAdults() {
    const seed = Math.random();
    const initial = Math.ceil(Math.random() * 5);
    if (seed <= 0.8) {
      return initial;
    }
    return initial + 5;
  }

  #createChildren() {
    const seed = Math.random();
    if (seed <= 0.5) {
      return 0;
    }
    return Math.ceil(Math.random() * 2);
  }
}

export default Visit;