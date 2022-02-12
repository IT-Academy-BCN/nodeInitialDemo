class tasca {

    constructor(usuari, nombre, data_inicial) {
this.id = 0;
        this.usuari = usuari;
        this.nombre = nombre;
        this.data_inicial = data_inicial;
        this.data_final = null

    }

    crear_tasca(usuari, nombre, data_inicial, data_final, estat) {

        this.usuari = usuari;
        this.nombre = nombre;
        this.data_inicial = data_inicial;
        this.data_final = data_final;
        this.estat = estat
    }
}
module.exports = tasca;
/*
esborrar_tasca(usuari, nombre, data_inicial, data_final) {
llistar_tasques
mostrar_tasca
editar_tasca

*/





