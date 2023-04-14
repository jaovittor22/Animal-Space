import React from "react";
import github from "./github.png";
import linkedin from "./linkedin1.png";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-vitor-borges-791583215/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="ícone do linkedin" />
        </a>
        <a
          href="https://github.com/jaovittor22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="ícone do github" />
        </a>
        
      </div>
      <p>Desenvolvido por João Vitor Borges</p>
    </footer>
  );
}
