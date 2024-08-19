import "./BlogCard.css";
import { Link } from "react-router-dom";

function BlogCard({ id, title, description, author, date }) {
  return (
    <Link className="blog-card" to={`/blog/${id}`}>
      <h1>{title}</h1>
      <img src={author.avatar} alt={author.name} className="author-avatar" />
      <p>{description.substring(0, 100)}</p>
      <div className="author-info">
        <p>By: {author.name}</p>
      </div>
      <p>{date}</p>
    </Link>
  );
}

export default BlogCard;
