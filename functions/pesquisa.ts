/**
 *
 * @param listaOrdenada Array<number>
 * @param item number
 * @returns number|null
 */
export function pesquisaBinaria(
  listaOrdenada: Array<number>,
  item: number
): number | boolean {
  // inicio da lista
  let baixo = 0;
  // maior indifim da lista
  let alto = listaOrdenada.length - 1;
  // enquanto não encontrar o item
  while (baixo <= alto) {
    // chute vai ser sempre a média / 2
    let meio = Math.floor((baixo + alto) / 2);
    // Obtem o item na lista
    let chute = listaOrdenada[meio];
    // Se o item do chute for igual ao informado retorna o item
    if (chute === item) {
      return chute;
    } else if (chute > item) {
      // Se 49 fosse um chute alto, então de 49 até final da lista estão descartados
      // Logo o proximo numero possivel seria 48
      alto = meio - 1;
    } else {
      // Se 49 for um chute baixo, então de 0 a 49 estão descartados
      // Logo o proximo numero possivel seria 50
      baixo = meio + 1;
    }
  }
  return false;
}
/**
 * Calcula a quantidade maxima de etapas para aceertar um numero
 * @param tamanhoLista number
 * @returns
 */
export function calculaEtapas(tamanhoLista: number): number {
  let etapas = 0;
  let metade = tamanhoLista;
  while (metade > 0) {
    metade = Math.floor(metade / 2);
    etapas++;
  }
  return etapas;
}
