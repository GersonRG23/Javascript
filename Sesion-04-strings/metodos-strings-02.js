// Métodos de cadenas de texto parte 2
let input = "Acuario";
let db = "acuario";

// toLoweCase() - toUperCase()
console.log(input.toLowerCase());
console.log(db.toUpperCase());
console.log(input.toLowerCase === db.toLowerCase);

//Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ",str_2, " mas cosas"));
console.log(str_1 + " " + str_2 + " y mas cosas");
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final   ";
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4"  // ["H", "o", "l", "a", ..., "4"]
console.log(str_4.charAt(10));
console.log(str_4[10]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gerson y me gusta aprender. Mi nombre es Gerson y mis apellidos son Ramos Gonzalez";
console.log(str_5.indexOf("Gerson"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Ramos G"));
