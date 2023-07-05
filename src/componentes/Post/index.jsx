import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './Post.css'
import NaoEncontrada from "componentes/NaoEncontrada";



export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === +parametros.id;
  });

if(!post){
  return(<NaoEncontrada/>)
}

  return (
    <PostModelo
      fotoCapa={`../../posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
}
