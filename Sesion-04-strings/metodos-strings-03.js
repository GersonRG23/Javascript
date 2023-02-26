// Metodos de cadenas de texto parte 3
// httos://regexr.com
let texto_largo = "Te puedo referir a Asurion, no es WFH pero en verdad vale la pena. Te consienten mucho, las instalaciones son preciosas, tienes free lunch todos los días, ruta en la mañana hasta las 8am y salida desde las 6:30 hasta la 1am. Aparte que te dan la ruta te dan el bono de transporte que es por 300k. Muy buenas comisiones y la campaña realmente no es complicada.";

console.log(texto_largo.match(/las/g));

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("por"));

// Saber si un texto empieza si un texto empieza con una palabra
console.log(texto_largo.startsWith("Te"));

// Saber si un texto empieza si un texto termina con una palabra
console.log(texto_largo.endsWith("a."));