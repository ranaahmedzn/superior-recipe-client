import React, { useContext, useEffect, useState } from 'react';
import Blog from './Blog';
import LoaderPage from '../LoaderPage/LoaderPage';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() =>{
        fetch('https://superior-recipe-server-ranasheikhzn.vercel.app/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
            setLoader(false)
        })
    }, [])

    
    if(loader){
        return <LoaderPage /> 
    }

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