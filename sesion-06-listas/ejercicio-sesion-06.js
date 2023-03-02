// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Arroz", "Carne", "Aceite", "Salsas", "Café", 45, 8];
listaCompra.forEach(v => {
    console.log(v);
})

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
listaCompra.forEach(v => {
    console.log(v);
})

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.splice(7,1);
listaCompra.forEach(v => {
    console.log(v);
})

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
    {titulo: "Interstellar", director: "Christopher Nolan", fecha: new Date ("october 26 2014")},
    {titulo: "Tron: Legacy", director: "Joseph Kosinski", fecha: new Date ("december 17 2010")},
    {titulo: "Siempre a tu lado, Hachikō", director: "Lasse Hallström", fecha: new Date ("june 13 2009")}
]

listaPeliculas.forEach(v => {
    console.log(v);
})

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelisPosteriores = listaPeliculas.filter(obj => obj.fecha > new Date (2010,00,00));
console.log(pelisPosteriores);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = listaPeliculas.map((valor, indice)  =>  `${indice +1} - ${valor.director}`);
console.log(listaDirectores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = listaPeliculas.map((valor, indice)  =>  `${indice +1} - ${valor.titulo}`);
console.log(listaTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const ListasConcat = listaDirectores.concat(listaTitulos);
console.log(ListasConcat);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const ListasFProp = [...listaDirectores, ...listaTitulos];
console.log(ListasFProp);