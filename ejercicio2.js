//Forma #1: Usando constantes y objetos

const minombre = "Gerson Antonio Ramos Gonzalez"
const miedad = 23;
const desarrollador = true;
const mifecha_nacimiento = new Date("february 01 2000 09:00");
const milibro_fav = {
    titulo: "El Diario de Ana Frank",
    autor: "Ana Frank",
    fecha: new Date("1947"),
    url: "https://www.annefrank.org/es/ana-frank/el-diario/la-obra-de-ana-frank/"
}

console.log(milibro_fav)


//Forma #2: Usando dos objetos con constantes

const mi_informacion = {
    nombre: "Gerson Antonio Ramos Gonzalez",
    edad: 23,
    soydesarrollador: true,
    f_nacimiento: new Date("february 01 2000 09:00"),
    libro_fav : {
        titulo : "El diario de Ana Frank",
        autor: "Ana Frank",
        fecha: new Date("1947"),
        url: "https://www.annefrank.org/es/ana-frank/el-diario/la-obra-de-ana-frank/"
    }
}

console.log(mi_informacion);