import React from 'react'
import "./BlogView.css"
import { useParams } from 'react-router-dom'
import blogData from '../../data/BlogData'

function BlogView() {
    const {id} = useParams()
    const blog = blogData.find(blog => blog.id == id)
  return (
    <div className='blog-view-container'>
      <h1 className='blog-title'>{blog.title}</h1>
      <span className='blog-author-name'>{blog.author.name}</span>
      <span className='blog-date'>{blog.date}</span>
      <img src={blog.author.avatar} className='blog-author-avatar'/><br/>
      <p className='blog-description'>{blog.description}</p>
      <img src={blog.image} className='founder-image'/>
      
    </div>
  )
}

export default BlogView
