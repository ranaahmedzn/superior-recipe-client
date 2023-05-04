import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    console.log(blogs)
    return (
        <div className='max-w-screen-xl mx-auto px-5 space-y-20 py-12'>
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default BlogPage;