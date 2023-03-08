class Persona {
    
    constructor(nombre,edad,isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this. isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nueva_persona = new Persona("Gerson", 23, true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60; // Inicializar
console.log(typeof numero);

let persona_2 = new Persona("Maria", 53, false); // Instanciar
console.log(persona_2 instanceof Persona);

// Instanceof = similar a typeof pero para clases