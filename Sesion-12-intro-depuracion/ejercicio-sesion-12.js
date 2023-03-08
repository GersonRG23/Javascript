// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

const fibonacci = function(num) {
    const serie = [0, 1];

    for (let i = 2; i<= num; i++) {
        serie[i] = serie[i -1] + serie[i - 2];
    }

    return serie;
};

console.log(fibonacci(6))

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función