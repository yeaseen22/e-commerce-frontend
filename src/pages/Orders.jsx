// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getOrderProducts?.orders
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <>
      <BreadCrumb title="My Orders" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Order Id</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount After Discount</h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div style={{backgroundColor: "#febd69"}} key={index} className="row pt-3 my-3">
                    <div className="col-3">
                      <p>{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPrice}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.orderState}</p>
                    </div>

                    <div className="col-12">
                      <div className="row py-3" style={{backgroundColor: "#232f3e"}}>
                        <div className="col-3">
                          <h6 className="text-white">Product Name</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Quantity</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Price</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Color</h6>
                        </div>
                        {item?.orderItems?.map((i, index) => {
                          return (
                            <div key={index} className="col-12">
                              <div className="row p-3">
                                <div className="col-3">
                                  <p className="text-white">{i?.product?.title}</p>
                                </div>
                                <div className="col-3">
                                  <p className="text-white">{i?.quantity}</p>
                                </div>
                                <div className="col-3">
                                  <p className="text-white">{i?.price}</p>
                                </div>
                                <div className="col-3">
                                  <ul>
                                    <li
                                      style={{
                                        backgroundColor: i?.color,
                                      }} 
                                    ></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Orders;
