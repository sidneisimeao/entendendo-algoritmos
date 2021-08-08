/**
 * Retorna o menor indice de uma lista não ordenada
 * @param arr
 * @returns
 */
export function buscaMenor(arr: Array<number>): number {
  let menor = arr[0];
  let menor_indice = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
      menor_indice = i;
    }
  }
  return menor_indice;
}
/**
 * Retorna um novo array ordenado de forma crescente
 * @param arr
 * @returns
 */
export function ordernacaPorSelecao(arr: Array<number>): Array<number> {
  // novo array odenado
  const novoArr = [];
  // quantidade de elementos a percorrer
  const length = arr.length;
  /// para cada elementos
  for (let i = 0; i < length; i++) {
    // pega o array inteiro e busca o menor item ( indice )
    let menor_indice = buscaMenor(arr);
    // obtem o valor do indice
    let valor = arr[menor_indice];
    // remove o menor elemento do array original para encontrar o proximo menor
    arr.splice(arr.indexOf(valor), 1);
    // adiciona o menor elmento do array original ao novo array
    novoArr.push(valor);
  }
  console.log(novoArr);
  return novoArr;
}
