const persona = {
    nombre: "Gerson",
    edad: 23,
    isDeveloper: true,
    saludo: function() {
        console.log("Hello");
    }
}

// console.log(persona);
persona.saludo();

const otra_persona = {
    nombre: "Antonio",
    edad: 21,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola soy Antonio");
    }
}

otra_persona.saludo();

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hello")
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona);

const nueva_persona_2 = creaPersona("Maria", 44, false);
console.log(nueva_persona_2);