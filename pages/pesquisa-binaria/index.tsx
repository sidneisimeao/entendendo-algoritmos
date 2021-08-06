import { pesquisaBinaria } from "../../functions/pesquisa";

export default function page() {
  const listaOrdenada: Array<number> = Array.from(
    { length: 100 },
    (_, i: number) => i++
  );

  const item: number = 79;

  return <div>{pesquisaBinaria(listaOrdenada, item)}</div>;
}
