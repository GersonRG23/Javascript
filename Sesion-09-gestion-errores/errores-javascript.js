const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    // return false
    throw new Error("El valor debe ser de tipo numerico");
}

// const elDoble = console.log(miFuncion("ala"))
const numero = 8;

try {
    // Codigo que puede fallar
    console.log("Esta ejecutandose de forma correcta");
    const doble = miFuncion("numero");
    console.log(doble);
} catch(e) {
    // En caso de que falle, quiero que ejecutes
    console.error(e);
    console.log("ERROR");
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algun error como si no hay ninguno");
}

// InternalError, sintaxError, TypeError, RangeError y ReferenceError