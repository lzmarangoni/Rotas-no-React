import React from 'react'
import styles from './Banner.module.scss'
import circuloColorido from '../../assets/circulo_colorido.png'


export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Meu primeiro site usando rotas</h1>
            <p className={styles.paragrafo}>Bem vindos ao meu novo site onde estou usando como base de estudos o react router dom, lib que permite alternar entre diferentes rotas sem precisar atualizar toda a página.</p>
            
        </div>
        <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} alt="" />
            <img className={styles.minhaFoto} src="https://github.com/lzmarangoni.png" alt="" />
        </div>
    </div>
  )
}


/*
optei por manter o caminho padrão na seleção de import das fotos, mas caso queira incurtar esse caminho podemos utilizar uma configuração do react. 
Primeiro passo é criar um documento no diretorio raiz chamado 'jsconfig.json', depois dentro do doc insira o seguinte código:
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

Isso basta para que nas importações o sistema entende que você vai importar a partir da pasta src ou qualquer outra que colocar no campo onde está src. 

ficaria então para importar a imagem desse trecho 

import foto from 'assets/circulo_colorido.png'

*/