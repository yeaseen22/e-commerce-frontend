import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
    let location = useLocation();
    const { grid } = props;
    return (
        <>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : 'col-3'}`}>
                <Link to=':id' className="product-card position-relative ">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src="images/wish.svg" alt="wishlist" /></button>
                    </div>
                    <div className="product-image">
                        <img className='img-fluid' src="images/watch.jpg" alt="product image" />
                        <img className='img-fluid' src="images/watch-1.jpg" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphone bulk 10 packs multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value='3'
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae in excepturi, temporibus fugit fugiat nihil.</p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'> <img src="images/prodcompare.svg" alt="compare" /></button>
                            <button className='border-0 bg-transparent'> <img src="images/view.svg" alt="addcart" /></button>
                            <button className='border-0 bg-transparent'> <img src="images/add-cart.svg" alt="addcart" /></button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : 'col-3'}`}>
                <Link to=':id' className="product-card position-relative ">
                    <div className="wishlist-icon position-absolute">
                        <button><img src="images/wish.svg" alt="wishlist" /></button>
                    </div>
                    <div className="product-image">
                        <img className='img-fluid' src="images/watch.jpg" alt="product image" />
                        <img className='img-fluid' src="images/watch-1.jpg" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphone bulk 10 packs multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value='3'
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae in excepturi, temporibus fugit fugiat nihil.</p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'> <img src="images/prodcompare.svg" alt="compare" /></button>
                            <button className='border-0 bg-transparent'> <img src="images/view.svg" alt="addcart" /></button>
                            <button className='border-0 bg-transparent'> <img src="images/add-cart.svg" alt="addcart" /></button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default ProductCard