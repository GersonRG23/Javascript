// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Gerson Antonio",
    apellido: "Ramos Gonzalez",
    edad: 23,
    altura: 1.84,
    eresDesarrollador: true
};

console.log(datosPersonales);

// - Una variable que obtenga tu edad a partir del objeto anterior
const miedad = "edad";
console.log(datosPersonales[miedad]);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaConAmigos = [
    {
        nombre: "Holman Audrey",
        apellido: "Alba Castro",
        edad: 22,
        altura: 1.65,
        eresDesarrollador: true
    },
    {
        nombre: "Bryan Steven",
        apellido: "Martinez",
        edad: 26,
        altura: 1.71,
        eresDesarrollador: true
    },

    datosPersonales
];

console.log(listaConAmigos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaPorEdad = [listaConAmigos.sort((a,b) => b.edad - a.edad)];
console.log(listaPorEdad);