import { pesquisaBinaria, calculaEtapas } from "../../functions/pesquisa";

export default function page() {
  const listaOrdenada: Array<number> = Array.from(
    { length: 100 },
    (_, i: number) => i++
  );

  const item: number = 5000;

  return <div>{calculaEtapas(item)}</div>;
}
