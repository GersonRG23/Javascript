// Ejercicio de la sesion 05
// Crea un archivo JS que contenga las siguientes líneas

// Una variable que contenga tu altura en centímetros (entero)
let mi_altura_cm = 184;
console.log(`Mi altura en centimetros es: ${mi_altura_cm}`);

// Una variable que contenga tu altura en metros (número de coma flotante)
let mi_altura_m = 1.84;
console.log(`Mi altura en metros es: ${mi_altura_m}`);

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let mi_peso_kg = 84.9;
console.log(`Mi peso es ${mi_peso_kg} kg`);

// Una variable que contenga tu altura en metros redondeada hacia arriba
let mi_altura_redondeada_arriba =mi_altura_m.toFixed();
console.log(`Mi altura redondeaba arriba es ${mi_altura_redondeada_arriba} metros`);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let mi_peso_kg_Redondeado_abajo = Math.floor(mi_peso_kg);
console.log(`Mi peso redondeado abajo es ${mi_peso_kg_Redondeado_abajo} kg`);

let c = 3.3;
let d = c * 3;

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let comparacion = Number.MAX_VALUE === (Number.MAX_VALUE + 1);
console.log(comparacion);

