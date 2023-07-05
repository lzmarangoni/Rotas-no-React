import React from "react";
import erro404 from "../../assets/erro_404.png";
import styles from "./NaoEncontrada.module.scss";

export default function NaoEncontrada() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página ou volte para página
          anterior{" "}
        </p>

        <img src={erro404} alt="Foto de cachorro usando oculos" />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
