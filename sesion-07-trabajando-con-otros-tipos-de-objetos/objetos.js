// Trabajando con objetos
const obj = {
    id: 4,
    nombre: "Gerson",
    apellido: "Ramos G",
    isDeveloper: true,
    libros_fav: ["El Diario de Ana Frank", "Doctor Jekyll y Mr Hide"],
    "4-juegos": [1,2,3,4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop ="isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Antonio";
console.log(obj2.nombre);
console.log(obj.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);
 
///////////////////////

const obj3 = {...obj};
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Aura";
console.log(obj.nombre);
console.log(obj3.nombre);

/////////////////////
// Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    { titulo : "Lo que el viento se llevo", anyo: 1939},
    { titulo : "Titanic", anyo: 1997},
    { titulo : "Mohana", anyo: 2016},
    { titulo : "El efecto mariposa", anyo: 2004},
    { titulo : "TED", anyo: 2012}
]

console.log(listaPeliculas);
// .sort() MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a,b) => a.anyo - b.anyo);

console.log(listaPeliculas);