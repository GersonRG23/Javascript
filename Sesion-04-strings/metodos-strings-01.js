// Metodos mas utilizados con strings
// Como obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(1,11);
console.log(slice_str);

let substring_str = str.substring(1,11);
console.log(substring_str);

let substr_str = str.substr(1,11);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto
// Al utilizar cadenas solo reemplaza la primera instancia
let cadena = "Hola mi nombre es Gerson";

console.log(cadena.replace("Gerson", "Gerson Ramos"));

let texto_largo = "Te puedo referir a Asurion, no es WFH pero en verdad vale la pena. Te consienten mucho, las instalaciones son preciosas, tienes free lunch todos los días, ruta en la mañana hasta las 8am y salida desde las 6:30 hasta la 1am. Aparte que te dan la ruta te dan el bono de transporte que es por 300k. Muy buenas comisiones y la campaña realmente no es complicada.";

console.log(texto_largo.replace("las", "Pipi Estrada es mi amigo"));

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias

console.log(texto_largo.replace(/las/g, "Pipi Estrada es mi amigo"));