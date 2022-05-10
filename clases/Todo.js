class TODO {
    constructor(titulo, usuario) {
        this.id = null
        this.estado = "TODO";
        this.titulo = titulo;
        this.fecha_creación = new Date();
        this.fecha_inicio = null;
        this.fecha_fin = null;
        this.usuario = usuario;
    }
}
module.exports = TODO;