// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const hoy = new Date ();
console.log(`La fecha de hoy es ${hoy.toLocaleDateString()}`);

// - La fecha de tu nacimiento
const fecha_nac = new Date (2000,01,01,09);
console.log(`Mi fecha de nacimiento es: ${fecha_nac.toLocaleDateString()}`);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparandoFechas = hoy.getTime() > fecha_nac.getTime();
console.log(comparandoFechas);

// - Una variable que contenga el día de tu nacimiento
const dia_nac = fecha_nac.getDate();
console.log(`Mi dia de nacimiento es: ${dia_nac}`);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes_nac = fecha_nac.getMonth();
console.log(`Mi mes de nacimiento es: ${mes_nac}`);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anio_nac = fecha_nac.getFullYear();
console.log(`Mi año de nacimiento es: ${anio_nac}`);