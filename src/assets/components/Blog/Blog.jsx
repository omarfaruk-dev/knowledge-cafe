// import React, { use } from 'react';
import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {

    const [updateBookmark, setUpdateBookmark] = useState(false);
    const changeBookmark = () => {
        setUpdateBookmark(true);
    }

    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;


    return (
        <div className="space-y-5 border-b-2 border-gray-200 mb-10">
            <img className="w-full rounded-lg" src={cover}></img>
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <img className="w-16 h-16" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <h4 className="text-xl">{posted_date}</h4>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <h4 className="text-xl">{reading_time} min read</h4>
                    <button onClick={() => {handleBookMark(blog); changeBookmark()}}>{updateBookmark?<FaBookmark size={25} color="#2B7FFF"/>: <FaRegBookmark size={25}/> }</button>
                </div>
            </div>
            <h2 className="text-3xl font-semibold leading-10">{title}</h2>
            <div className="flex gap-5 ">
                {
                    hashtags.map(tags => <p key={tags} className="text-xl">#{tags}</p>)
                }
            </div>
            <button onClick={() => handleMarkAsRead(reading_time, blog.id)} className="underline mb-10 cursor-pointer text-xl font-semibold hover:text-blue-400">Mark as read</button>
        </div>
    );
};

export default Blog;