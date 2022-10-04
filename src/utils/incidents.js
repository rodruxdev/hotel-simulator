const INCIDENTS = [
  "Se reventó la cañería del baño de una de las habitaciones matrimoniales, el trabajo de reparación durará una semana.  Bloquee esta habitación la próxima semana.",
  "Uno de los huéspedes se fue sin pagar la cuenta y no hay forma de contactarlo porque sus datos son falsos.  Reporte a la policía y asuma los gastos de una habitación de una noche.",
  "Una de las mucamas derramó líquido para limpiar el baño en un mueble de madera, el barniz del mismo requiere reparación, bloquee la habitación por un día.",
  "El hotel se inscribió en el concurso de emprendedoras de AWE de ONU MUJERES, ganó y recibió 1000 USD para implementar una estrategia digital del hotel.",
  "Uno de los huéspedes organizó una fiesta en su habitación y alguien puso una queja a la policía. Se le impuso al hotel una multa de 500 UFV's.",
  "El servicio que se le brindó a uno de los huéspedes fue excelente y reservó habitaciones para su familia por cuatro noches el próximo mes a partir del 20.",
  "La leche del desayuno se cortó, debe volver a comprarla",
  "La panadería con la que hizo el acuerdo de provisión de pan no podrá surtir el pan durant euna semana.  El proveedor de emergencia aumenta 0,10 Bs. Por cada pan.",
  "Un pordiosero se cayó y rompió la puerta de cristal del hotel.  Reponga el vidrio.",
  "Mientras la recepcionista se ausentó de su puesto, robaron tres controles remotos de los aparatos de cable.  Repóngalos con la empresa de servicios.",
  "Uno de los húespedes se llevó las llaves de la habitación, repóngalas.",
  "Un huésped que se quedó varias noches en el hotel, denunció el robo de efectos personales de la habitación.  Se niega a pagar su estadía hasta que se le reponga un valor de 50 USD.",
  "La mucama hizo caer y rompió el frasco de maquillaje, la adminsitración debe reponer el maquillaje y a fin de mes cobrar ese gasto a la mucama.",
  "La batería de una de las tazas del baño compartido se averió y estuvo gastando agua todo el día.  Reponga la batería y note que el consumo de agua aumentó Bs.20",
  "Se presentó una inspección de SEDES en el establecimiento, la cocinera y la mesera no contaban con carnet sanitario por lo que le impusieron una multa de Bs.600",
  "La unidad de turismo de la Alcaldía decidió premiar las buenas prácticas, el hotel ganó Bs. 500 por su sistema de ahorro de electricidad.",
  "El hotel se inscribió en un concurso para emprendedores, ganó USD 5.000 para mejorar su infraestructura.",
  "El hotel se inscribió en un concurso para emprendedores, ganó USD 3.000 para mejorar su infraestructura.",
  "El hotel se inscribió en un concurso para emprendedores, ganó USD 2.000 para mejorar su infraestructura.",
  "El hotel se inscribió en el concurso de emprendedoras de AWE de ONU MUJERES, ganó y recibió 800 USD para implementar una estrategia digital del hotel.",
  "El hotel se inscribió en el concurso de emprendedoras de AWE de ONU MUJERES, ganó y recibió 500 USD para implementar una estrategia digital del hotel.",
  "Un huésped rompió una de las ventanas de la habitación, pero la mucama no se dio cuenta hasta el día siguiente.  No se le puede cobrar al huésped.  Reponga la ventana.",
  "Debido a los buenos comentarios en tripadvisor, usted tuvo una llegada más en la siguiente semana.",
  "Debido a los buenos comentarios en tripadvisor, usted tuvo dos llegadas más en la siguiente semana.",
  "Debido a los buenos comentarios en tripadvisor, usted tuvo tres llegadas más en la siguiente semana.",
  "Debido a los buenos comentarios en tripadvisor, usted tuvo una reserva más",
  "Debido a los buenos comentarios en tripadvisor, usted tuvo dos reservas más",
  "Debido a los buenos comentarios en tripadvisor, usted tuvo tres reserva más",
  "Una empresa con la que acaba de firmar un convenio le pide una reserva de un fin de semana en noviembre, todo el hotel para una actividad de capacitación y confraternización, solicita la cotización de pensión completa.  Presente la cotización de un proveedor externo para cubrir este servicio.",
  "Una pelea en una de las habitaciones tuvo como resultado la rotura de un lavamanos, el huésped correrá con los gastos, pero la habitación debe bloquarse por dos días de reparación.",
  "Los extintores (4 en todo el hotel) deben recargarse.  Llévelos a recarga.",
  "Una huésped tiñó las toallas blancas de la habitación con el tinte de su cabello, la limpieza no pudo sacar todo lo pintado.  Reponga dos toallas de baño.",
  "Uno de los televisores presenta un desperfecto, debe llevarse a reparación, rebaje el precio de esa habitación los tres días que durará la reparación.",
  "Uno de los huéspedes sufre un fuerte sorojche, debe llamar a un médico y alquilar un tubo de oxígeno para estabilizarlo.  Los gastos se cargan al huésped, pero eso le hace reconsiderar la opción de pagar un servicio médico de emergencias.  Incremente Bs. 350 a sus gastos fijos mensuales.",
  "Uno de los huéspedes sufre unataque cardíaco, debe llamar a un médico y a una ambulancia para estabilizarlo.  Los gastos se cargan al huésped, pero eso le hace reconsiderar la opción de pagar un servicio médico de emergencias.  Incremente Bs. 400 a sus gastos fijos mensuales.",
  "Uno de sus empleados sufre una caída muy fuerte, debe llamar a un médico y a una ambulancia.  Los gastos los asume el hotel y eso le hace reconsiderar la opción de pagar un servicio médico de emergencias.  Incremente Bs. 500 a sus gastos fijos mensuales.",
  "Los huéspedes de una de las habitaciones perdieron las llaves y lamentablemente no se tiene la llave de repuesto.  Deb contratar un cerrajero para abrir la puerta de la habitación lo antes posible.  El servicio cuesta Bs. 80",
  'Unos huéspedes se llevaron de "recuerdo" las toallas de la habitación antes que la recepción se diera cuenta.  Reponga el juego de toallas completo (manos, pies y de baño)',
  "Unos huéspedes tuvieron un accidente con un refresco y mancharon el colchón de la cama.  La mucama se dio cuenta reci+en al cambiar las sábanas y el colchón necesita una limpieza para eliminar la mancha.",
  "Hubo una fiesta en las cercanías del hotel, una familia pidió cambió de habitación para poder dormir, cambie la habitación, si no tiene habitación similar, busque un hotel cercano para poder trasladarlos.  Pierde la noche que debía ser cancelada por la habitación.",
  "Debido al racionamiento de agua, tres pilas de los baños se arruinaron, debe cambiar las partes que se dañaron o todas las pilas.  El departamento de mantenimiento debe justificar la decisión.",
  "La alfombra de una habitación fue manchada con lavandina, debe cambiarla o repararla. Cualquiera de las opciones mantendrá la habitación bloqueada por dos días.",
  "La cerámica de uno de los baños compartidos saltó debido a la humedad, hay que repararlo antes que el problema se agrave.  El baño estará bloqueado por tres días, debe tratar de no acomodar a nadie en habitaciones sin baño la próxima semana.",
  "Una de las mucamas se enfermó con COVID y debe estar en cuarentena por siete días, contrate un reemplazo con el mismo sueldo diario de la mucama enferma.",
];

export default INCIDENTS;
