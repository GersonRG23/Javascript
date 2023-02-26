// Ejercicio de la sesion 04

// Una cadena de texto con tu Nombre
let str_nombre = "Gerson Antonio";
console.log(str_nombre);

// Otra cadena de texto con tu Apellido
let str_apellido = "Ramos Gonzalez";
console.log(str_apellido);

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = str_nombre.concat(" ", str_apellido);
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let num_letras = estudiante.length;
console.log(num_letras);

// Una variable que contenga la primera letra del Nombre
let primera_letra = str_nombre.charAt(0);
console.log(primera_letra);

// Otra variable que contenga la última letra del Apellido
let ultima_letra = str_apellido.charAt(str_apellido.lastIndexOf("z"));
console.log(ultima_letra);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let no_espacios = estudiante.replace(/ /g, "");
console.log(no_espacios);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombre_en_estudiante = estudiante.includes("Gerson")
console.log(nombre_en_estudiante);



