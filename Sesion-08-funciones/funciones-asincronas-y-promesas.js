// Funciones asincronas

function miAsinc() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algun error
}

const mipromesa = new Promise((resolve,reject) => {
    const i = Math.floor(Math.random() * 2);
    if (i !== 0){
        resolve();
    } else {
        reject();
    }
})

mipromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))
