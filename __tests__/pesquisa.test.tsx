import { pesquisaBinaria, calculaEtapas } from "../functions/pesquisa";

const item: number = 100;

const numero = 20;

const listaOrdenada: Array<number> = Array.from(
  { length: item },
  (_, i: number) => i++
);

test("deve ter 7 etapdas", () => {
  expect(calculaEtapas(item)).toBe(7);
});

test("deve retornar false ( não encontrou o item )", () => {
  expect(pesquisaBinaria(listaOrdenada, item)).toBe(false);
});

test("deve retornar true ( encontrou o item )", () => {
  expect(pesquisaBinaria(listaOrdenada, numero)).toBe(20);
});
