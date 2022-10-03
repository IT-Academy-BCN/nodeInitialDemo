class Tasca {

  constructor(usuari, nomTasca, estat, dataFinal, id) {
          this.name = usuari,
          this.nomTasca = nomTasca,
          this.estat = estat,
          this.dataInici = new Date().toISOString(),
          this.dataFinal = dataFinal, 
          this.id = id
  }
}
 
module.exports = Tasca;
