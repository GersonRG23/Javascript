// Iterar los valores de una lista
const array = ["Hola", 2, 5, 90, false, undefined];

// Forma antigua y poco efciiente
for(let i = 0; i< array.length; i++){
    console.log(array[i]);
}

// Forma ES6 (mas eficiente) foreach()
let suma = 0;
const arraynums = [3, 6, 2, 77, 2 ,3, 93, 19];
arraynums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

// Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90
const variable = array.find(valor => {
    if (valor === 90) {
        return true;
    }
})

console.log(variable)

const listaObjetos = [
    { nombre: "Gerson", edad: 23},
    { nombre: "Aura", edad: 45},
    { nombre: "Yesid", edad: 26},
    { nombre: "Bastian", edad: 18},
    { nombre: "Geovanni", edad: 57}
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Aura"){
//         return true;
//     }
// })

const objeto = listaObjetos.find(o => o.nombre === "Aura")
console.log(objeto.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Aura");
console.log(edad);