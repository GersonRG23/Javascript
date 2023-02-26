// Factorial de 10 usando un bucle while, una bifurcación if y una sentencia break

let factorial = 1;
let i = 10;

while (factorial){
    factorial *= i;
    i--;
    if (i === 0){
        break;
    }
}
console.log(`El factorial de 10 es: ${factorial}`);