import { useParams, useNavigate } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", content: "Contenuto dettagliato del primo post." },
  { id: 2, title: "Post 2", content: "Contenuto dettagliato del secondo post." },
  { id: 3, title: "Post 3", content: "Contenuto dettagliato del terzo post." }
];

const PostDetail = () => {
  const { id } = useParams(); // Prende l'ID dalla URL
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === parseInt(id)); // Converte ID in numero

  if (!post) {
    return <h2>Post non trovato</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <button onClick={() => navigate(-1)}>
        Torna Indietro
      </button>
    </div>
  );
};

export default PostDetail;
