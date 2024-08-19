import React from "react";
import "./Home.css";
import blogData from "../../data/BlogData";
import BlogCard from "../../components/BlogCard/BlogCard";

function Home() {
  
  return (
    <>
    <span className="blog-title">Blog Bliss</span>
    <div className="home-container">
      {blogData.map((blogObject, i) => {
        const { id ,title, description, image, author, date } = blogObject;
        return (
          <BlogCard
            key={i}
            id={id}
            title={title}
            description={description}
            image={image}
            author={author}
            date={date}
          />
        );
      })}
      </div>
    </>
  );
}

export default Home;
