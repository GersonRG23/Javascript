// Casos muy especificos - break, continue
let lista = [1,2,3,4,5,6,7,8,9];


for (let i = 0; i < lista.length; i++){

    if (lista[i] === 3){
        continue;
    }
    console.log(lista[i]);
    var j = 5;
    const k= 100;
    if (lista[i] > 5){
        break;
    }
}
// cual es el ambito de un bucle
console.log(i);
console.log(j);
console.log(k);