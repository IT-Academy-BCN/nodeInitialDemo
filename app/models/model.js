class Tasca {
  constructor(usuari, nomTasca, estat, dataInicial, dataFinal, id) {
    this.id = id;
    this.usuari = usuari;
    this.nomTasca = nomTasca;
    this.estat = estat;
    this.dataInici = dataInicial;
    this.dataFinal = dataFinal;
  }
}

module.exports = Tasca;
