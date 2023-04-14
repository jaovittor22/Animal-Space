
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
  return (
    <header className={styles.cabecalho}>
      <h1 className={styles.cabecalho__titulo}>Animal Space</h1>
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="text"
        placeholder="O que você procura?" />
        <img src={search} alt="ícone de lupa" />
      </div>
    </header>
  )
}