// Crea un nuevo proyecto de Node
// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
// - Duplica el archivo del ejercicio de la sesión 04-Textos
// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
// - Crea el fichero .eslintrc.json
// - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
// - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
// - Crea un script en el package.json para corregir automáticamente todos los errores
// - Ejecuta el script a través del terminal

// Sesion 4 - Strings (Cadenas de caracteres)
let str = "Hola soy un texto con comillas dobles";
let str_sng = "Hola soy un texto con comillas simples";

console.log(str);
console.log(str_sng);

let str_comillas = "El otro dia me dijo literalmente \"Ve a sacar la basura\"";
console.log(str_comillas);

let str_comillas_simples = "El otro dia me dijo literalmente \"Ve a comprar la cena\"";
console.log(str_comillas_simples);

let str_comillas_dobles = "El otro dia me dijo literalmente 'Ve a sacar al perro'";
console.log(str_comillas_dobles);

let str_comillas_simples_2 = "El otro dia me dijo literalmente 'Ve a traer a los perros'";
console.log(str_comillas_simples_2);

// Comillas invertidas (backsticks)

let str_backsticks = "Hola esto es un string con bacsticks";

console.log(str_backsticks);

let nombre = "Gerson Ramos";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo)

//Plantillas HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <h2>Este es un parrafo</h2>
</html>
`;

console.log(plantilla);

// Introduccion de variables en html
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El diario de Ana Frank"];