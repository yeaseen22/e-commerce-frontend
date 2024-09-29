import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import Color from "../components/Color";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/products/productSlice";
import {toast} from 'react-toastify'
import { addProdToCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color,setColor] = useState(null)
  const [quantity,setQuantity] = useState(1)
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAProduct(getProductId));
  },[]);

  const uploadCart = () => {
    if(color === null){
      toast.error('please chose a color')
      return false
    } else{
      dispatch(addProdToCart({productId: productState?._id,quantity,price:productState?.price}))
    }
  }

  const productState = useSelector((state) => state?.product?.singleproduct);
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fwatch%2F&psig=AOvVaw03-WnEuL0bffp2uNcwDzio&ust=1726649379716000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCMxqnMyYgDFQAAAAAdAAAAABAE",
  };

  const copyToClipboard = (text) => {
    let textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images.map((item, index) => {
                return (
                  <div>
                    <img
                      className="img-fluid"
                      src={item?.url}
                      alt="image zoom"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={productState?.totalratings}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>{" "}
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>{" "}
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>{" "}
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>{" "}
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-10">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>

                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color setColor={setColor} colorData={productState?.color} />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button onClick={() => uploadCart(productState?._id)} className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button to="/signup" className="button signup">
                      By It Now
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      {" "}
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      {" "}
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>{" "}
                  <p
                    className="product-data"
                    dangerouslySetInnerHTML={{
                      __html: productState?.description,
                    }}
                  ></p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link :</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => copyToClipboard(window.location.href)}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                laboriosam minima quaerat nostrum, vitae minus cupiditate ea,
                inventore nulla laudantium numquam cumque facere eligendi
                veniam. Nam dolor laudantium saepe dolorem!
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Review</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <p>Write a review</p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="address"
                      cols="30"
                      rows="4"
                      name=""
                      className="form-control w-100"
                      id=""
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Asad</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Et, pariatur!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
