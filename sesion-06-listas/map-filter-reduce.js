// Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["Bogota", "Barcelona", "Alicante", "New York"];

const val = array.forEach(v => {
    console.log(v);
    return 4;
})

console.log(val);

const newArray = array.map((valor, indice) =>  `${indice +1} - ${valor}`);
console.log(newArray);

const listaObjetos = [
    { nombre: "Gerson", edad: 23},
    { nombre: "Aura", edad: 45},
    { nombre: "Yesid", edad: 26},
    { nombre: "Bastian", edad: 18},
    { nombre: "Geovanni", edad: 57}
]

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30){
//         return true;
//     }else{
//         return false;
//     }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Gerson");
console.log(nuevaLista);

const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur;
})

console.log(suma);