class Tasca {


  constructor(usuari, nomTasca, estat, dataFinal, id) {
          this.id = id,
          this.usuari = usuari,
          this.nomTasca = nomTasca,
          this.estat = estat,
          this.dataInici = new Date().toISOString(),
          this.dataFinal = dataFinal
  }
}
 
module.exports = Tasca;