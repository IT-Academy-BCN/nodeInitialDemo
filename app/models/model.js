class Tasca {
  constructor(usuari, nomTasca, estat, dataInicial, dataFinal, id) {
    this.usuari = usuari;
    this.nomTasca = nomTasca;
    this.estat = estat;
    this.dataInici = dataInicial;
    this.dataFinal = dataFinal;
    this.id = id;
  }
}

module.exports = Tasca;
