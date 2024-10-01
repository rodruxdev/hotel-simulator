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
    const countries = [
      "Japón",
      "Corea del Sur",
      "China",
      "Alemania",
      "España",
      "Italia",
      "Francia",
      "Estados Unidos",
      "Canadá",
      // Latin American countries
      "México",
      "Guatemala",
      "Belice",
      "El Salvador",
      "Honduras",
      "Nicaragua",
      "Costa Rica",
      "Panamá",
      "Cuba",
      "República Dominicana",
      "Puerto Rico",
      "Colombia",
      "Venezuela",
      "Ecuador",
      "Perú",
      "Bolivia",
      "Paraguay",
      "Chile",
      "Argentina",
      "Uruguay",
      "Brasil",
    ];
    const index = Math.floor(Math.random() * countries.length);
    return countries[index];
  }

  #createDate() {
    const initialDate = new Date(2025, 0, 1);
    const FinishDate = new Date(2025, 11, 31);
    const dateFaker = faker.date.between(initialDate, FinishDate);
    const date = new Date(dateFaker);
    const options = {
      weekday: "long",
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
    children = adults + children > 7 ? 0 : children;
    return { adults, children };
  }

  #createAdults() {
    const seed = Math.random();
    const initial = Math.ceil(Math.random() * 2);
    // Guests between 1-2 - 90%
    // Between 3-5 - 10%
    // Between 6 -7 - 5%
    if (seed <= 0.85) {
      return initial;
    } else if (seed > 0.85 && seed <= 0.95) {
      return Math.ceil(Math.random() * 3) + 3;
    }
    return Math.ceil(Math.random() * 2) + 5;
  }

  #createChildren() {
    const seed = Math.random();
    // No children 40%
    if (seed <= 0.4) {
      return 0;
    }
    return Math.ceil(Math.random() * 2);
  }
}

export default Visit;
