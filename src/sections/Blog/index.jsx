import React from 'react'
import './blog.css'
import Image1 from '../../assets/blog1.png'
import Image2 from '../../assets/blog2.png'
import Image3 from '../../assets/blog3.png'
import BlogCard from '../../components/BlogCard'

const blogs = [
    {
        id : 1,
        image : Image1,
        title : 'Cooking Dining Experience',
        body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin',
        link : '#',
        reverse : false
    },
    {
        id : 1,
        image : Image2,
        title : 'Cooking Dining Experience',
        body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin',
        link : '#',
        reverse : true
    },
    {
        id : 1,
        image : Image3,
        title : 'Cooking Dining Experience',
        body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin',
        link : '#',
        reverse : false
    },
]

const Blog = () => {
  return (
    <section className='blogs'>
        <h2>Blogs</h2>
        <p className="under_title">words from our food lovers</p>
        <div className="content">
            {
                blogs.map(item => <BlogCard key={item.id} image={item.image} title={item.title} body={item.body} link={item.link} reverse={item.reverse} />)
            }
        </div>
    </section>
  )
}

export default Blog