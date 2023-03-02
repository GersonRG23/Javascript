// Como unir dos listas .concat(lista2)

const lista_1 = ["Hola", 2, false, null];
const lista_2 = ["Adios", 8, true, undefined];

console.log(lista_1.concat(lista_2));
console.log(lista_1);

const lista_3 = lista_1.concat(lista_2);
console.log(lista_3);

// Cómo unir dos listas con el factor de propagacion
console.log(...lista_3);

const lista_4 = [...lista_1, ...lista_2];
console.log(lista_4);

// ERROR!! Mal entendido el concepto de factor de propagacion
const lista_5 = [lista_1, lista_2];
console.log(lista_5);