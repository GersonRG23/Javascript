// Como trabajar con listas, arreglos, vectores
let var1 = 45;
let array = [1, 2, 3, 4, 5, 6, "Hola", false, { id: 5}, null, undefined, var1];
console.log(array);

// Acceder a los valores de un array a traves de su posicion
// Array.[indice] => 0,1,2,3,4...
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[6]);

// Metodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => mutan el valor de nuestro array
// Valores al final -> push
array.push("final", 100, false);
console.log(array);

// Valores al principio -> unshift
array.unshift("Inicio", 0.5);
console.log(array);

// Metodos para eliminar valores en nuestros arrays
// .pop() .shift() -> Mutan el valor del array
let array_2 = [1, 3, "hola", false];

// Valores al final -> pop
array_2.pop();
console.log(array_2);

// Valores al principio -> shift
array_2.shift();
console.log(array_2);

// Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(indice, numero de valores a eliminar)

const array_3 =[1,2,3,4,5,6];

//Eliminar valores .splice(indice, numero de valores a eliminar)
array_3.splice(2, 3) //(indice, elementos a eliminar despues del indice)
console.log(array_3);

//Agregar valores .splice(indice, numero de valores a eliminar, elementos a agregar)
array_3.splice(2, 0, "Hola desde el splice");
console.log(array_3);

//Modificar valores .splice(indice, numero de valores a eliminar, elementos a agregar)
array_3.splice(2, 1, 3, 9);
console.log(array_3);