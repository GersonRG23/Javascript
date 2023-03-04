// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston
const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

module.exports = logger;

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const funcionErrores = valor => {
    if (typeof valor === "string") {
        return logger.info(`${valor} + [Mensaje de la funcion validando que si es un string]`)
    }
    throw logger.error("El valor debe ser de tipo string")
}

// - Registra el error en un archivo a través de un try...catch
const cadena = "Hola mi nombre es Gerson Ramos y estoy aprendiendo a gestionar errores en JS";

try {
    logger.debug("Esta ejecutandose de forma correcta");
    // const errores = funcionErrores(cadena);
    const errores = funcionErrores(5); //Enviamos un numero en lugar de un string para ver los errores
    logger.info(errores);
} catch(e) {
    logger.error(e);
    logger.error("ERROR");
}