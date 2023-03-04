// Funciones tiplo flecha - funciones anonimas
const array = [5,6,7,8,9,92];

// Funcion anonima son aquellas que no han sido asignadas
const array2 = array.map((valor) => valor * 2);

console.log(array2);

// const dobledelvalor = valor => {
//     valor * 2
// } Esto es lo mismo que lo que esta abajo

const dobledelvalor = valor => valor * 2;

console.log(doble(6));
console.log(dobledelvalor(6));

const array3 = array.map(dobledelvalor);
console.log(array3);

function doble(valor) {
    return valor * 2 
}