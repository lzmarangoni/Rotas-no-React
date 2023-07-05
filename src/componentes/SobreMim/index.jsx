import PostModelo from '../PostModelo'
import React from 'react'
import fotoCapa from '../../assets/sobre_mim_capa.png'
import styles from './SobreMim.module.scss'


export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu Sou o Luiz</h3>
      <img className={styles.fotoSobreMim} src="https://github.com/lzmarangoni.png" alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti corrupti id veniam ab sapiente eos exercitationem aut commodi, aliquid praesentium fugiat repellendus ipsum totam magnam, vero eveniet, quae dolore.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti corrupti id veniam ab sapiente eos exercitationem aut commodi, aliquid praesentium fugiat repellendus ipsum totam magnam, vero eveniet, quae dolore.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti corrupti id veniam ab sapiente eos exercitationem aut commodi, aliquid praesentium fugiat repellendus ipsum totam magnam, vero eveniet, quae dolore.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti corrupti id veniam ab sapiente eos exercitationem aut commodi, aliquid praesentium fugiat repellendus ipsum totam magnam, vero eveniet, quae dolore.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti corrupti id veniam ab sapiente eos exercitationem aut commodi, aliquid praesentium fugiat repellendus ipsum totam magnam, vero eveniet, quae dolore.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti corrupti id veniam ab sapiente eos exercitationem aut commodi, aliquid praesentium fugiat repellendus ipsum totam magnam, vero eveniet, quae dolore.</p>
    </PostModelo>
    
      
      
  )
}
