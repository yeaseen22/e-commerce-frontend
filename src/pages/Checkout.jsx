import React, { useState,useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios'
// import {config} from  "../utils/axiosConfig"
import { createAnOrder } from "../features/user/userSlice";

const shippingSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("state is required"),
  city: yup.string().required("City is required"),
  zipCode: yup.number().required("ZipCode is required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const [totalAmount, setToalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [cartPrdouctsState, setCartProductsState] = useState([]);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index]?.quantity) * cartState[index]?.price;
      setToalAmount(sum);
      console.log(sum);
    }
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values)
    },
  });

  const loadcript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    });
  }

  useEffect(() => {
    let items = [];
    for(let index=0; index < cartState?.length; index++){
      items?.push({product: cartState[index]?.productId?._id,quantity:cartState[index]?.quantity, color: cartState[index]?.color?._id,price: cartState[index]?.price})
    }
    setCartProductsState(items)
  },[])

  const checkoutHandler = async () => {
    const response = await loadcript("https://checkout.razorpay.com/v1/checkout.js")
    if(!response){
      alert("Razer Pay SDK failed to load")
      return 
    }
    const result = await axios.post("http://localhost:4000/api/user/order/checkout")
    if(!result){
      alert("Something went wrong")
      return
    }

    const {amount,id:order_id,currency} = result.data;
    dispatch(createAnOrder({totalPrice: totalAmount,shippingInfo: shippingInfo,cartProducts: cartPrdouctsState,}))

  }

  return (
    <>
      <Meta title="Checkout" />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Dev Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" href="#">
                      Cart
                    </Link>
                  </li>
                  &nbsp; / &nbsp;
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item">
                    <Link className="breadcrumb-item active" href="#">
                      Shipping
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">Asad Anik (demo@gmail.com)</p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 justify-content-between flex-wrap"
              >
                <div className="w-100">
                  <select
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.onBlur("country")}
                    name="country"
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="Bangladesh" selected disabled>
                      Bangladesh
                    </option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik?.touched?.country && formik?.errors?.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlurCapture={formik.onBlur("firstName")}
                    name="firstName"
                  />
                  <div className="error">
                    {formik?.touched?.firstName && formik?.errors?.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.onBlur("lastName")}
                    placeholder="Last Name"
                    type="text"
                    className="form-control"
                  />
                  <div className="error">
                    {formik?.touched?.lastName && formik?.errors?.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="aaddress"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.onBlur("address")}
                  />
                  <div className="error">
                    {formik?.touched?.address && formik?.errors?.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment , Suit, etc"
                    className="form-control"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.onBlur("onter")}
                  />
                  <div className="error">
                    {formik?.touched?.other && formik?.errors?.other}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.onBlur("city")}
                  />
                  <div className="error">
                    {formik?.touched?.city && formik?.errors?.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="state"
                    value={formik.state.values}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select District
                    </option>
                    <option value="Feni" selected disabled>
                      Feni
                    </option>
                  </select>
                  <div className="error">
                    {formik?.touched?.state && formik?.errors?.state}
                  </div>
                </div>
                <div>
                  <input
                    placeholder="ZipCode"
                    type="text"
                    className="form-control"
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange("zipCode")}
                    onBlur={formik.onBlur("zipCode")}
                  />
                  <div className="error">
                    {formik?.touched?.zipCode && formik?.errors?.zipCode}
                  </div>
                </div>

                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="fs-4" />
                      Return To Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue To Shipping
                    </Link>
                    <button className="button" type="submit">
                      Buy Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex mb-2 gap-10 align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.images[0]?.url}
                            width={100}
                            height={100}
                            alt="watch"
                          />
                        </div>
                        <div>
                          <h5 className="title total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">
                            s / {item?.color?.title * item?.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">$ {item?.price}</h5>
                      </div>
                    </div>
                  );
                })}

              {/* <div className="d-flex mb-2 gap-10 align-items-center">
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span style={{"top": "-10px", "right": "2px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                            <img className='img-fluid' src="/images/watch.jpg" alt="watch" />
                                        </div>
                                        <div>
                                            <h5 className="title total-price">adadd</h5>
                                            <p className='total-price'>s / #adada</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>$ 100</h5>
                                    </div>
                                </div> */}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">
                  $ {totalAmount ? totalAmount : ""}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 5</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center  py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                $ {totalAmount ? totalAmount + 5 : ""}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
