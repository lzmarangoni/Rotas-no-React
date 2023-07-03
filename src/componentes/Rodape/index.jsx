import React from 'react'
import styles from './Rodape.module.scss'
import { ReactComponent as Copyright } from '../../assets/marca_registrada.svg'
export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <Copyright/>
        <h2>Desenvolvido por Luiz Marangoni</h2>
    </footer>
  )
}
