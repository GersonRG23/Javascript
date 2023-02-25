//Bucles for
// i = i+1
// i +=1
// i++

for (let i = 0; i < 10; i++){
    //Esto es el bucle
    console.log(i);
}

let lista = [1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

// Estructura for of
for (let valor of lista){
    console.log(valor)
}

//Estructura forEach
lista.forEach(valor => {
    console.log(valor);
})

let persona = {
    nombre : "Gerson",
    apellido : "Ramos",
    edad : 23,
    isDeveloper : true
}

let prop = "edad";
console.log(persona[prop]);
for (let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}