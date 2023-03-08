const persona = {
    nombre: "Gerson",
    edad: 23
}

console.log(persona)

function obtenerDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtenerDobleEdad(persona.edad)

console.log(dobleEdad)

function obtenArray(edad) {
    let arraynums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arraynums = [...arraynums, numero]
    }
    return arraynums
}

const array = obtenArray(persona.edad)

console.log(array)