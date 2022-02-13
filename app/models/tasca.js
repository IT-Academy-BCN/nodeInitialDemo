class tasca {

    constructor(usuari, nombre, data_inicial) {

        this.id = 0;
        this.usuari = usuari;
        this.nombre = nombre;
        this.data_inicial = data_inicial;
        this.data_final = null;
        this.tasks = [];

    }

    crear_tasca(usuari, nombre, data_inicial, data_final, estat) {
        this.id = 0;
        this.usuari = usuari;
        this.nombre = nombre;
        this.data_inicial = data_inicial;
        this.data_final = data_final;
        this.estat = estat
    }

    esborrar_tasca(usuari, nombre, data_inicial, data_final) {
        this.id = 0;
        this.usuari = usuari;
        this.nombre = nombre;
        this.data_inicial = data_inicial;
        this.data_final = data_final;
        this.estat = estat
    }

    llistar_tasques(usuari, nombre, data_inicial, data_final) {
        this.id = 0;
        this.usuari = usuari;
        this.nombre = nombre;
        this.data_inicial = data_inicial;
        this.data_final = data_final;
        this.estat = estat
    }

    mostrar_tasca(usuari, nombre, data_inicial, data_final) {
        this.id = 0;
        this.usuari = usuari;
        this.nombre = nombre;
        this.data_inicial = data_inicial;
        this.data_final = data_final;
        this.estat = estat
    }

    actualitzar_tasca(usuari, nombre, data_inicial, data_final, estat) {
        this.id = 0;
        this.usuari = usuari;
        this.nombre = nombre;
        this.data_inicial = data_inicial;
        this.data_final = data_final;
        this.estat = estat
    }

}
module.exports = tasca;





