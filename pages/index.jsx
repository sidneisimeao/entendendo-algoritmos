import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Entendendo Algoritmos</title>
        <meta
          name="description"
          content="Um guia ilustrado para programadores e outros curiosos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Entendendo <a href="https://nextjs.org">Algoritmos</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/pesquisa-binaria">
            <a className={styles.card}>
              <h2>Pesquisa Binária &rarr;</h2>
              <p>
                É um algoritmo que recebe uma lista ordernada de elementos e o
                elemento que esta sendo pesquisado. O(log n)
              </p>
            </a>
          </Link>
          <Link href="/ordenacao-selecao">
            <a className={styles.card}>
              <h2>Ordenação por Seleção &rarr;</h2>
              <p>Ordena verificanco a cada etapa todos elementos. O(n x n)</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
