function q1RemoverDuplicados(nums) {
  const arraySemDuplicacoes = nums.filter(
    (valor, index, array) => array.indexOf(valor) === index
  );

  //   indices:  0 1 2 3 4 5 6
  //   valores:  1 2 2 3 4 4 5

  return arraySemDuplicacoes;
}

console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));
