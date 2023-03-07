// import { suma, eleva, nombre } from './modulos/matematicas.js'
import * as modulosMatematicas from './modulos/matematicas.js';
import getAutor, { libro } from './modulos/literatura.js';

const sum = modulosMatematicas.suma(4, 12);
console.log(sum);

const potencia = modulosMatematicas.eleva(2 , 21);
console.log(potencia);

console.log(modulosMatematicas.nombre);

console.log(getAutor())
console.log(libro);