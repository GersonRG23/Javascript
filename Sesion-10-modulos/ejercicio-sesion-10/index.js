// Crea un nuevo proyecto de Node
// - Configura el proyecto para utilizar los módulos de ES6
// - Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)
// - En el entrypoint index.js, importa el módulo controller.js
import * as moduloControllers from './modulos/controller.js'
import chalk from 'chalk';

// - El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)

const sum = moduloControllers.suma(4, 5);
console.log(`La suma de 4 y 5 es igual a: ${sum}`);

const mult = moduloControllers.multiplica(1, 2);
// console.log(mult);

// - Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.green(`La multiplicacion de 1 y 2 es igual a: ${mult}`));