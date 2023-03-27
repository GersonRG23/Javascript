// - En el fichero index.js:

// - Crea una variable con tu nombre
const miNombre = "Gerson"
// - Crea una variable con tu apellido
const miApellido = "Ramos"
// - Crea un objeto con tu nombre y tu apellido
const miObj = {
    nombre: miNombre,
    apellido: miApellido
}
// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("nombre-sesion", miObj)

// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem("nombre-local", miObj)

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = "nombreCookie=GersonCookie"
document.cookie = "nombreCaducidad=Nombre; expires=" + (new Date().toUTCString + new Date(0,0,0,0,2).toUTCString)

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
// - Observa cómo la SessionStorage está vacía
// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado
