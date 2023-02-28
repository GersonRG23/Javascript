// Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

//Suma
console.log(a + b);
// Resta
console.log(a - b);
// Multiplicacion
console.log(a * b);
// Division
console.log(a / b);

// Representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

// Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d.toFixed());

// .toFixed(); -Limita el numero de decimales al valor que se le halla asignado
// El tipo de informacion resultante es un string
//  Tambien es capas de añadir decimales a un numero que no los tiene
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));


let e = 1839.515251500555215441;
let f = 261651015112050451501;

console.log(e.toFixed(2));
console.log(f.toFixed(4));

// .toPrecision() - Limita el numero de cifras significativas
// El tipo de informacion resultante es un string

console.log(e.toPrecision(4));
console.log(f.toPrecision(7));

console.log(typeof(f.toPrecision(7)));