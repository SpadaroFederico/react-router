import { Link } from "react-router-dom";
import "./Posts.css"; // Importiamo il file CSS

const posts = [
  { id: 1, title: "Post 1", content: "Contenuto del primo post." },
  { id: 2, title: "Post 2", content: "Contenuto del secondo post." },
  { id: 3, title: "Post 3", content: "Contenuto del terzo post." }
];

const Posts = () => {
  return (
    <div>
      <h1>Lista dei Post</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}`}>Leggi di più</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
