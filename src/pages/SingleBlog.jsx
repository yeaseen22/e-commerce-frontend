import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../features/blogs/blogSlice';

const SingleBlog = () => {
    const dispatch = useDispatch();
    const blogState = useSelector((state) => state?.blog?.singleBlog);
    const location = useLocation();
    const getBlogId = location.pathname.split("/")[2];

    useEffect(() => {
        // Dispatch the action to fetch a blog by its ID when the component loads
        dispatch(getBlog(getBlogId));
    }, [getBlogId]);

    return (
        <>
            <Meta title={blogState?.title || "Blog"} />
            <BreadCrumb title={blogState?.title || "Blog"} />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link className='d-flex align-items-center gap-10' to='/blogs'>
                                <HiOutlineArrowLeft className='ps-0' /> Go Back To Blogs
                            </Link>
                            <h3 className="title">{blogState?.title}</h3>
                            <img
                                className='img-fluid w-100 my-4'
                                src={blogState?.images?.[0]?.url || '/images/blog-1.jpg'}
                                alt="blog"
                            />
                            <p
                                dangerouslySetInnerHTML={{ __html: blogState?.description }}
                            ></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default SingleBlog;
