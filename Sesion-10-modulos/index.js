// formas de importar y exportar modulos
// 1. CommonJs - require
// 2. Import ES6 - import

// const moduloMatematicas = require("./modulos/matematicas.js");

// const fact = moduloMatematicas.factorial(5);
// console.log(fact);
// const { factorial, suma } = moduloMatematicas; 
// const factorial = moduloMatematicas.factorial;
// console.log(factorial(5));

const { factorial, suma } = require("./modulos/matematicas.js");
const fact = factorial(10);
const sum = suma(12, 90);
console.log(sum);
console.log(fact);
// const suma = moduloMatematicas.suma;
// console.log(suma(10, 11));

// console.log(module);