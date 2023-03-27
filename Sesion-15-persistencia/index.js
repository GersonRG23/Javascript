// localStorage.setItem("nombre", "Gerson")


console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify( {nombre: "Ramos", edad:23}))

console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> convierte un objeto/array en stringify
// JSON.parse -> convierte un objeto/array convertido a traves de stringify en un objeto de js

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Gerson")

/* Cookies */
document.cookie = "nombreCookie=GersonCookie"
document.cookie = "nombreCaducidad=Nombre"
"expires" + new Date(2024, 0, 1).toUTCString()
console.log(document.cookie)