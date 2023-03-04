// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
const num = 1;
function comparar(numero) {
    numero = num;
    if(numero === num) {
        return true;
    }
}

console.log(comparar(num));

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// function miAsinc(){
//     return console.log("Hola soy una promesa");
// }

// setTimeout(miAsinc, 5000);

// - Una función generadora de índices pares automáticos
function* generarIndices() {
    let indice = 0;
    while(indice < 20) {
        indice++
        if (indice % 2 === 0){yield indice }
        if (indice === 20) {
            return indice
        }  
    }
}
const gen = generarIndices();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());