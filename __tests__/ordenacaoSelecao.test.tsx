import { buscaMenor, ordernacaPorSelecao } from "../functions/ordenacaoSelecao";

const listaNaoOrdenada = [
  12, 90, 34, 22, 78, 198, 5, 3, 45, 67, 65, 2, 14, 432,
];

const listaOrdenada = [2, 3, 5, 12, 14, 22, 34, 45, 65, 67, 78, 90, 198, 432];

test("menor numero esta no indice 11 => 2", () => {
  expect(buscaMenor(listaNaoOrdenada)).toBe(11);
});

test("Lista não ordenada deve ser igual a ordenada", () => {
  expect(ordernacaPorSelecao(listaNaoOrdenada)).toEqual(listaOrdenada);
});
