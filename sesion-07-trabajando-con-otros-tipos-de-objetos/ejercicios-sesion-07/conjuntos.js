// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const familia = ["Jhon Smith Osorio", "Sebastian Ramos Gonzalez", "Andres Rivas Osorio", "Aura Maria Gonzalez","Geovani Ramos Berdugo", "Yesid Ramos Gonzalez", "Gerson Ramos Gonzalez"];
const set_Familia = new Set(familia);

console.log(set_Familia);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
set_Familia.add("Gerson Ramos Gonzalez");
set_Familia.add("Gerson Ramos Gonzalez");
console.log(set_Familia);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
set_Familia.add("Javascript");
console.log(set_Familia);