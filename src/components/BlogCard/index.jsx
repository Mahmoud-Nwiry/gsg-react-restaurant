import React from 'react'
import './blogCard.css'

const BlogCard = ({image, title, body, link, reverse}) => {
  return (
    <div className='blog_card'>
        {
            !reverse ?
                <div className="image">
                    <img src={image} alt={title} />
                </div> 
            : ''
        }

        <div className="text">
            <h3>{title}</h3>
            <p>{body}</p>
            <a href={link}>Read More</a>
        </div>

        {
            reverse ?
                <div className="image">
                    <img src={image} alt={title} />
                </div> 
            : ''
        }
        
    </div>
  )
}

export default BlogCard