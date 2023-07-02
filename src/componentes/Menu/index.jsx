import styles from './Menu.module.scss'
import React from 'react'
import MenuLink from '../MenuLink'


export default function Menu() {
  
  return (
    <header >
        <nav className={styles.navegacao}>
            <MenuLink to='/' children="Inicio"/>
            <MenuLink to='/sobremim' children='Sobre Mim'/>
        </nav>
    </header>
  )
}
