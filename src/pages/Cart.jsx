import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const userCartState = useSelector((state) => state?.auth?.cartProducts);

  return (
    <>
      <Meta title="Carts" />
      <BreadCrumb title="Carts" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          className="img-fluid"
                          src="images/watch.jpg"
                          alt="product image"
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId?.title}</p>
                        {/* <p>{item?.productId?.size}: </p> */}
                        <p className="d-flex gap-3">
                          Color:
                          <ul>
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">$ {item?.price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          min={1}
                          max={10}
                          type="number"
                          value={item?.quantity}
                        />
                      </div>
                      <div>
                        <AiFillDelete className="text-danger" />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">$ {item?.price * item?.quantity}</h5>
                    </div>
                  </div>
                );
              })}
            {/* <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img
                    className="img-fluid"
                    src="images/watch.jpg"
                    alt="product image"
                  />
                </div>
                <div className="w-75">
                  <p>Hello</p>
                  <p>Size: </p>
                  <p>Color: </p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    min={1}
                    max={10}
                    type="number"
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100</h5>
              </div>
            </div> */}
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $1000</h4>
                  <p>Taxes and shipping calculation at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
