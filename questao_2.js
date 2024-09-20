function q2ContarFrequenciaPalavra(text) {
  const arrayPalavras = text.toLowerCase().split(" ");

  const contagem = arrayPalavras.reduce((acumulador, valor) => {
    acumulador[valor] = (acumulador[valor] || 0) + 1;
    return acumulador;
  }, {});

  const contagemOrdenada = Object.keys(contagem)
    .sort((a, b) => {
      return contagem[b] - contagem[a];
    })
    .reduce((acumulador, key) => {
      acumulador[key] = contagem[key];
      return acumulador;
    }, {});

  return contagemOrdenada;
}

console.log(q2ContarFrequenciaPalavra("Hello world hello"));
