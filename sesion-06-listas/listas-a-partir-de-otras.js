// .some()
const array = [3,4,7,8,45,12,9,8,7,1,-2];

const res = array.some(valor => valor <= -2);

console.log(res);

const existe = array.some(valor => valor === 12 );

console.log(existe);

const listaObjetos = [
    { nombre: "Gerson", edad: 23},
    { nombre: "Aura", edad: 45},
    { nombre: "Yesid", edad: 26},
    { nombre: "Bastian", edad: 18},
    { nombre: "Geovanni", edad: 57}
] 

const existeGerson = listaObjetos.some(persona => persona.nombre === "Gerson");

console.log(existeGerson);

// Cómo obtener una lista a apartir de  un objeto iterable
const str = "Hola soy Gerson";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "Hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);
