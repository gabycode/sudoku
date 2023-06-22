import Head from "next/head";
import "../css/styles.css";

export default function SudokuApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sudoku</title>
        <link rel="icon" href="/sudoku-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
