import { useParams, useNavigate } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", content: "Contenuto del primo post." },
  { id: 2, title: "Post 2", content: "Contenuto del secondo post." },
  { id: 3, title: "Post 3", content: "Contenuto del terzo post." }
];

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post non trovato</h2>;
  }

  const postIndex = posts.findIndex((p) => p.id === parseInt(id));
  const prevPost = posts[postIndex - 1];
  const nextPost = posts[postIndex + 1];

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <div>
        {prevPost && <button onClick={() => navigate(`/posts/${prevPost.id}`)}>← Post Precedente</button>}
        <button onClick={() => navigate(-1)}>Torna Indietro</button>
        {nextPost && <button onClick={() => navigate(`/posts/${nextPost.id}`)}>Post Successivo →</button>}
      </div>
    </div>
  );
};

export default PostDetail;
