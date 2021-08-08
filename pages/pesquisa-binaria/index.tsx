import { pesquisaBinaria, calculaEtapas } from "../../functions/pesquisa";

export default function Page() {
  const listaOrdenada: Array<number> = Array.from(
    { length: 100 },
    (_, i: number) => i++
  );

  const item: number = 5000;

  return (
    <div>
      Quantas etapas são necessárias para se encontrar um numero num array de{" "}
      {item} posições?
      <br />
      Reposta: {calculaEtapas(item)}
    </div>
  );
}
