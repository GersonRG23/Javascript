// Que son las funciones, como se declaran y como se utilizan
//  Son bloques de codigo que se ejecutan con un fin especifico
const nom = "Gerson R";

// saludar("Gerson");
saludar(nom);

function saludar(nombre){
    console.log(nom);
    console.log(`Hola ${nombre}`);
}

///
let nombre_1 = "Jose";
despedir(nombre_1)
function despedir(nombre){
    nombre = "Diego"
    console.log(`Adios ${nombre}`);
}

///

let persona = {nombre: "Juan", apellido: "Suarez"};
console.log(persona)
saludarPersona(persona);
console.log(persona);
function saludarPersona(objeto){
    objeto.apellido = "Gonzalez";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar();

///////

function imprimeNumero(numero = 7){ // Parametros por defecto
    console.log(numero);
}

imprimeNumero();

//////

function imprimir(...parametros){
    console.log(parametros);
}

imprimir(1,2,3,4,"hola",true);

//////

function suma(...nums){
    return nums.reduce((a, b) => a + b)
}

const s = suma(1,2,3,4,9,15,16);
console.log(s);

///////
// El ambito de una funcion es que esta puede acceder a otros valores de afuera pero no se puede acceder a algo que este definido dentro de la misma funcion
let variable = "Hola";
function multiplicar(a = 0, b = 0){
    console.log(variable);
    let var_int = "Adios";
    console.log(var_int);
    return a * b
}
// console.log(var_int);
console.log(multiplicar(4, 9));