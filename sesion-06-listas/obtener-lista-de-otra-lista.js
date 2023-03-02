// Cómo obtener una lista a partir de otra lista slice()
const array = ["Hola", 1, 2, 3, true, null, "Adios"];

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(0,4));
const array_2 = array.slice(2,5);
console.log(array_2);

const array_3 = array.slice(2, -2);
console.log(array_3);
