const boton = document.getElementById("btn")

// console.log(boton)

boton.addEventListener("click", () => {
    // alert("Se ha hecho click")
    // confirm("Estas de acuerdo") 
    // ? console.log("OK") 
    // : console.log("NO!!")
    // la mejor forma de hacerlo es con el operador ternario que se encuentra arriba

    const respuesta = confirm("¿Seguro?")
    if (respuesta) {
        console.log("Estas de acuerdo")
    } else {
        console.log("No estas de acuerdo")
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿cual es tu nombre")
    if (nombre) {
        console.log("Tu nombre es " + nombre)
    } else {
        console.log("No has introducido nombre")
    }
})

const  lista = [{
    nombre: "Gerson",
    edad: 23
}, {
    nombre: "Aura",
    edad: 47
}, {
    nombre: "Geovani",
    edad: 57
}]

// console.log(lista)
console.table(lista)