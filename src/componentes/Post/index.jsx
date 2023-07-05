import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "componentes/PostModelo";


export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === +parametros.id;
  });

  console.log(post);

  return (
    <PostModelo
      fotoCapa={`../../posts/${post.id}/capa.png`}
      titulo={post.titulo}
      children={post.texto}
    ></PostModelo>
  );
}
