import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";



const SpecialProduct = (props) => {
    const { title, brand, totalrating, price, sold, quantity, id } = props
    return (
        <div className="col-6 mt-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img className="img-fluid" src="images/watch.jpg" alt="watch" />
                    </div>
                    <div>
                        <div className="special-product-content">
                            <h5 className="brand">{brand}</h5>
                            <h6 className="title">{title}</h6>
                            {/* <ReactStars
                                count={5}
                                size={24}
                                value={totalrating}
                                edit={false}
                                activeColor="#ffd700"
                            /> */}
                            <p className="price">
                                <span className="red-p">
                                    $ {price}
                                </span>
                                &nbsp;
                                {/* <strike>$200</strike> */}
                            </p>
                            <div className="discount-till d-flex align-items-center gap-10">
                                <p className="mb-0">
                                    <b>5 days</b>
                                </p>
                                <div className="d-flex align-items-center gap-10">
                                    <span className="badge rounded-circle p-3 ">1</span>:
                                    <span className="badge rounded-circle p-3 ">1</span>:
                                    <span className="badge rounded-circle p-3 ">1</span>
                                </div>

                            </div>
                            <div className="prod-count my-3">
                                <p>Products: {quantity}</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: `${(sold / (quantity + sold)) * 100}%` }}
                                        aria-valuenow={quantity / quantity + sold * 100} aria-valuemin={quantity} aria-valuemax={sold + quantity}></div>
                                </div>
                            </div>
                            <Link className="button" to={'/product' + id}>View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SpecialProduct;