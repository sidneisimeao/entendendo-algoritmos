import { ordernacaPorSelecao } from "../../functions/ordenacaoSelecao";

export default function page() {
  const listaNaoOrdenada = [
    12, 90, 34, 22, 78, 198, 5, 3, 45, 67, 65, 2, 14, 432,
  ];
  return <div>{ordernacaPorSelecao(listaNaoOrdenada)}</div>;
}
