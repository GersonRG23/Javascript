// Trabajando con fechas
const fecha = new Date();

console.log(fecha);

// Atencion - los meses se inician desde 0(enero) 11(dic)
const fecha2 = new Date(1987,10,20,1,23,52,192);
console.log(fecha2);

const fecha3 = new Date(-100000000000); // milisegundos
console.log(fecha3);

const fecha4 = new Date("October 13 1972 12:30:45");
console.log(fecha4);

console.log(fecha > fecha2);

const fecha5 = new Date(1987,10,20,1,23,52,192);
console.log(fecha5);

console.log(fecha5 === fecha2); //ERROR no se pueden comparar fechas de esta forma
console.log(fecha5.getTime() === fecha2.getTime()); // Esta es la forma de comparar fechas

////////////////////// Obtener el dia, el mes y el año de una fecha
// obtener el dia .getDate()
console.log(fecha2.getDate());

// Obtener el mes .getmonth()
console.log(fecha2.getMonth());

// Obtener el año .getfullyear()
console.log(fecha2.getFullYear());

// Como mostrar la fecha en un string
console.log(fecha2);
console.log(fecha2.toLocaleDateString("en-GB"));