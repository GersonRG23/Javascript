// Cómo ordenar arrays .sort()
const array = [2, 5, 9, 15, 45, 65, 98];

console.log(array);

array.sort((a,b) => {
    if (a < b){
        return -1
    }else if (a > b){
        return +1
    }else { // a === b
        return 0;
    }
})

console.log(array);

// Ordenar unicamente arrays numericos
const arraynumerico = [4, 5, 8, 74, 65, 98, 10, 487, 120];

arraynumerico.sort((a, b) => b - a)

console.log(arraynumerico);

// Interesante en arrays de objetos
const listaObjetos = [
    { nombre: "Gerson", edad: 23},
    { nombre: "Aura", edad: 45},
    { nombre: "Yesid", edad: 26},
    { nombre: "Bastian", edad: 18},
    { nombre: "Geovanni", edad: 57}
]

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1;
//     } else if (a.edad > b.edad) {
//         return +1;
//     } else {
//         return 0;
//     }
// })
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos);