import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../components/Container';

const SingleBlog = () => {
    return (
        <>
            <Meta title='Dynamic Blog Name' />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link className='d-flex align-items-center gap-10' to='/blogs'> <HiOutlineArrowLeft className='ps-0' /> Go Back To Blogs</Link>
                            <h3 className="title">A Beautiful Morning Renaissance</h3>
                            <img className='img-fluid w-100 my-4' src="images/blog-1.jpg" alt="blog" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eius laborum reprehenderit fugit, rerum ipsa delectus qui vel, laboriosam porro harum atque similique tenetur illum culpa amet officia. Velit magnam numquam ratione quisquam odio adipisci qui incidunt ea nesciunt? Quae mollitia non asperiores tempora assumenda rerum, maiores cumque architecto debitis. Perspiciatis nulla fugiat ipsa. Laborum quos dolore illo. Quam enim incidunt in esse? Optio voluptatem repellat tenetur.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog