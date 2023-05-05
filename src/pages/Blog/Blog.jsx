import React, { useState } from 'react';
import { HiThumbUp } from "react-icons/hi";
import { FaRegBookmark, FaBookmark, FaFilePdf } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [8, 6]
};

const Blog = ({ blog }) => {
    const [like, setLike] = useState(false)
    const [fav, setFav] = useState(false)

    const { id, question, answer, image, author } = blog;

    return (
        <div>
            <ReactToPdf filename="blog.pdf" options={options} x={1} y={1} scale={.8}>
                {({ toPdf, targetRef }) => (
                    <div ref={targetRef} className='w-full md:w-3/5 mx-auto'>
                        <h2 className='font-bold text-3xl md:text-4xl mb-4 font-roboto leading-[44px] md:leading-[54px]'>
                            <span className='py-1 px-2 mr-2 rounded-lg border-2 border-[#FB5FA6] bg-gradient-to-r from-[#ff8e882a] to-[#de8adf3a] text-[#FB5FA6]'>Blog-{id}</span>
                            {question}
                        </h2>
                        <div className='flex items-center justify-between mb-5'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[50px] ring-2 ring-[#FAAA49] rounded-full' src={image} alt="" />
                                <p className="text-base font-bold">{author}</p>
                            </div>
                            <div className='flex gap-2'>
                                <span onClick={() => setLike(!like)} className={`p-2 ${like ? "text-indigo-500" : "text-gray-900"} bg-gray-200 rounded-full cursor-pointer`}>
                                    <HiThumbUp className='text-lg' />
                                </span>
                                <span onClick={() => setFav(!fav)} className='p-2 bg-gray-200 rounded-full cursor-pointer'>
                                    {
                                        fav ? <FaBookmark className='text-lg text-indigo-500' />
                                            : <FaRegBookmark className='text-lg' />
                                    }
                                </span>
                            </div>
                        </div>
                        <hr className='mb-5' />
                        <p className='text-justify mb-3'>{answer}</p>
                        <button onClick={toPdf} className='primary-btn mt-3 flex gap-1 items-center'>
                            <FaFilePdf />
                            <span>Download</span>
                        </button>
                    </div>
                )}
            </ReactToPdf>
        </div>

    );
};

export default Blog;