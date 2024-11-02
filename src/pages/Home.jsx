import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllBlogs } from "../features/blogs/blogSlice";
import { getAllProducts } from "../features/products/productSlice";
import { addToWishlist } from "../features/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const naviage = useNavigate();
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const productState = useSelector((state) => state?.product?.product);
  console.log('product state',productState);
  

  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const getBlogId = location.pathname.split("/")[2];
  useEffect(() => {
    getblogs();
    getallProducts();
  }, []);


  const getblogs = () => {
    dispatch(getAllBlogs());
  };

  const getallProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div
              className="main-banner position-relative"
            >
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div
                className="main-banner-content
                                    position-absolute"
              >
                <h4>NEW ARRIVAL</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>
                  From $999.00 <br /> or $41.62/mo
                </p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="d-flex
                                flex-wrap
                                gap-10
                                justify-content-between
                                align-items-center"
            >
              <div
                className="small-banner
                                    position-relative"
              >
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div
                  className="small-banner-content
                                        position-absolute"
                >
                  <h4>NEW ARRIVAL</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
              <div
                className="small-banner
                                    position-relative"
              >
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div
                  className="small-banner-content
                                      position-absolute"
                >
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
              <div
                className="small-banner
                                    position-relative"
              >
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div
                  className="small-banner-content
                                      position-absolute"
                >
                  <h4>BEST SELL</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
              <div
                className="small-banner
                                    position-relative"
              >
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div
                  className="small-banner-content
                                      position-absolute"
                >
                  <h4>NEW ARRIVAL</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div
              className="servies
                                d-flex
                                align-items-center
                                justify-content-between"
            >
              {services?.map((i, j) => {
                return (
                  <div
                    className="d-flex
                                    align-items-center
                                    gap-15"
                    key={j}
                  >
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
              {/* <div
                                className="d-flex
                                    align-items-center
                                    gap-15"
                            >
                                <img src="images/service-02.png" alt="services" />
                                <div>
                                    <h6>Daily Surprise Offers</h6>
                                    <p className='mb-0'>Save up to 25% off</p>
                                </div>
                            </div>
                            <div
                                className="d-flex
                                    align-items-center 
                                    gap-15"
                            >
                                <img src="images/service-03.png" alt="services" />
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className='mb-0'>Shop with an expert</p>
                                </div>
                            </div>
                            <div
                                className="d-flex
                                    align-items-center
                                    gap-15"
                            >
                                <img src="images/service-04.png" alt="services" />
                                <div>
                                    <h6>Affordable Prices</h6>
                                    <p className='mb-0'>Get Factory direct price</p>
                                </div>
                            </div>
                            <div
                                className="d-flex
                                    align-items-center
                                    gap-15"
                            >
                                <img src="images/service-05.png" alt="services" />
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p className='mb-0'>100% Protected Payments</p>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div to=":id" className="product-card position-relative ">
                      <div className="wishlist-icon position-absolute">
                        <button
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                          className="border-0 bg-transparent"
                        >
                          <img src="images/wish.svg" alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          className="img-fluid d-block mx-auto"
                          width={160}
                          src={item?.images[0].url}
                          alt="product image"
                        />
                        <img
                          className="img-fluid d-block mx-auto"
                          src={item?.images[0].url}
                          width={160}
                          alt="product image"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.title}</h6>
                        <h5 className="product-title">{item?.description}</h5>
                        {/* <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        /> */}
                        {/* <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}
                                                    dangerouslySetInnerHTML={{ __html: item?.description }}
                                                >
                                                    {item?.description}
                                                </p> */}
                        <p className="price">$ {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            {" "}
                            <img src="images/prodcompare.svg" alt="compare" />
                          </button> */}
                          <button
                            onClick={() => naviage("/product" + "/" + item?._id)}
                            className="border-0 bg-transparent"
                          >
                            {" "}
                            <img src="images/view.svg" alt="addcart" />
                          </button>
                          {/* <button className="border-0 bg-transparent">
                            {" "}
                            <img src="images/add-cart.svg" alt="addcart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous.jpg"
                className="img-fluid"
                alt="Smart watches"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series 7</h6>
                <p className="text-dark">From $399or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous.jpg"
                className="img-fluid"
                alt="Smart watches"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studion Display</h5>
                <h6 className="text-dark">600 nits of brightness</h6>
                <p className="text-dark">27-inch 5k Ratina Display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous.jpg"
                className="img-fluid"
                alt="Smart watches"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">SMARTPHONE</h5>
                <h6 className="text-dark">Smartphone 16 pro</h6>
                <p className="text-dark">
                  Now In Green. From $999 or $41.62/mo
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous.jpg"
                className="img-fluid"
                alt="Smart watches"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studion Display</h5>
                <h6 className="text-dark">600 nits of brightness</h6>
                <p className="text-dark">27-inch 5k Ratina Display</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags[0] === "special") {
                return (
                  <SpecialProduct
                    key={index}
                    id={item?._id}
                    brand={item?.brand}
                    title={item?.title}
                    totalrating={item?.totalrating}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
              }
            })}
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              console.log('popular item',item.tags);
              if (item.tags[0] === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div to=":id" className="product-card position-relative ">
                      <div className="wishlist-icon position-absolute">
                        <button
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                          className="border-0 bg-transparent"
                        >
                          <img src="images/wish.svg" alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          className="img-fluid d-block mx-auto"
                          width={160}
                          src={item?.images[0].url}
                          alt="product image"
                        />
                        <img
                          className="img-fluid d-block mx-auto"
                          src={item?.images[0].url}
                          width={160}
                          alt="product image"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.title}</h6>
                        <h5 className="product-title">{item?.description}</h5>
                        {/* <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        /> */}
                        {/* <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}
                                                    dangerouslySetInnerHTML={{ __html: item?.description }}
                                                >
                                                    {item?.description}
                                                </p> */}
                        <p className="price">$ {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            {" "}
                            <img src="images/prodcompare.svg" alt="compare" />
                          </button>
                          <button className="border-0 bg-transparent">
                            {" "}
                            <img onClick={() => naviage('/product/' + item?._id)} src="images/view.svg" alt="addcart" />
                          </button>
                          <button className="border-0 bg-transparent">
                            {" "}
                            <img src="images/add-cart.svg" alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex ">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 3) {
                return (
                  <div className="col-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMM Do YYYY, h:mm: a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
      {/* <section className="">
                <div className="container-xxl">

                </div>
            </section> */}
      {/* <section
                className="home-wrapper-2
                py-5"
            >
                <div
                    className="container-xxl"
                >

                </div>
            </section> */}
      {/* <section className="home-wrapper-2 py-5">
                <div className="container-xxl">

                </div>
            </section> */}
      {/* <section className="featured-wrapper py-5 home-wrapper2">
                <div className="container-xxl">
                    
                </div>
            </section> */}
      {/* <section className="famous-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">

                </div>
            </section> */}
      {/* <section className="special-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">

                </div>
            </section> */}
      {/* <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">

                </div>
            </section> */}
      {/* <section className="marque-wrapper py-5">
                <div className="container-xxl">

                </div>
            </section> */}

      {/* <section className="blog-wrapper py-5 home-wrapper2">
                <div className="container-xxl">

                </div>
            </section> */}
    </>
  );
};

export default Home;
