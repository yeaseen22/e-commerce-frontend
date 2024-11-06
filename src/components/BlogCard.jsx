import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs, getBlog } from "../features/blogs/blogSlice";


const BlogCard = (props) => {
    const { id, title, description, date, image } = props;

    const location = useLocation()
    const getBlogId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlog(getBlogId))
    }, [getBlogId])

    return (
        <div className="blog-card">
            <div className="card-image">
                <img className='img-fluid w-100' src={image ? image : 'images/blog-1.jpg'} alt="blog" />
            </div>
            <div className="blog-content">
                <p className='date'>{date}</p>
                <h5 className="title">{title}</h5>
                <p className="desc"
                    dangerouslySetInnerHTML={{ __html: description?.substr(0, 70) + "..." }}
                ></p>
                <Link to={`/blog/${id}`} className='button'>Read More</Link>
            </div>
        </div>
    )
}
export default BlogCard