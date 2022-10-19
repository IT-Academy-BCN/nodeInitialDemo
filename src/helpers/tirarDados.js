const tirarDados = () => {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const resultado_dados = dado1 + dado2;
    const ganaPartida = (resultado_dados === 7);

    return { dado1, dado2, resultado: resultado_dados, ganaPartida};
  };

  module.exports = tirarDados;