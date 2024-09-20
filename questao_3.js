function q3TratarDatas(data) {
  //Decidi colocar apenas os meses necessarios para resolver o problema da questao em especifico,
  //levando em conta que nesse caso em especifico conheço com exatidão os parametros que a funcao irá receber
  const meses = {
    dez: "12",
    dezembro: "12",
  };

  const cleanedData = data.replace(/ de |\//g, " ");
  const arraySplitData = cleanedData.split(" ");
  const mes = arraySplitData[1];
  const regexMes = /^\d+\d+$/;

  if (!regexMes.test(mes)) {
    arraySplitData[1] = meses[mes];
  }

  const dataFormatada = arraySplitData.reverse().join("-");

  return dataFormatada;
}

const datasParaTratar = [
  "30/11/2022",
  "01 dez 2022",
  "25/12/2022",
  "31 de dezembro de 2022",
];

datasParaTratar.forEach((data) => {
  console.log(q3TratarDatas(data));
});
