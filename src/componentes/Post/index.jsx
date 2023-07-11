import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import NaoEncontrada from "componentes/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import styles from './Post.module.scss'
import PostCard from "componentes/PostCard";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === +parametros.id;
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    .filter((post) =>  post.id !== +parametros.id)
    .sort((a,b)=> b.id - a.id)
    .slice(0,4)
    
    console.log(postsRecomendados)




  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`../../posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>

        <ul className={styles.postsRecomendados}>
          {postsRecomendados.map((post) => 
          <PostCard post={post}/>)}

        </ul>
      </PostModelo>
    </PaginaPadrao>
  );
}
