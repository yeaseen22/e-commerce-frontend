// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { Typeahead } from "react-bootstrap-typeahead";
// import "react-bootstrap-typeahead/css/Typeahead.css";
// import { getAProduct } from "../features/products/productSlice";

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const cartState = useSelector((state) => state?.auth?.cartProducts);
//   const authState = useSelector((state) => state?.auth);
//   const productState = useSelector((state) => state?.product?.product);
//   const [total, setTotal] = useState(null);
//   // eslint-disable-next-line no-unused-vars
//   const [paginate, setPaginare] = useState(true);
//   const [productOpt, setProductOpt] = useState([]);

//   useEffect(() => {
//     let sum = 0;
//     for (let index = 0; index < cartState?.length; index++) {
//       sum =
//         sum +
//         Number(cartState[index]?.quantity) * Number(cartState[index]?.price);
//       setTotal(sum);
//     }
//   }, [cartState]);

//   useEffect(() => {
//     let data = [];
//     for (let index = 0; index < productState?.length; index++) {
//       const element = productState[index];
//       data.push({ id: index, prod: element?._id, name: element?.name });
//     }
//     setProductOpt(data);
//   }, [productState]);

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.reload();
//     window.location.href = "/login";
//   };

//   return (
//     <>
//       <header className="header-first-strip py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-6">
//               <p className="text-white mb-0">
//                 Free Shoping Over $100 & Free Returns
//               </p>
//             </div>
//             <div className="col-6">
//               <p className="text-end mb-0 text-white">
//                 Hotline:
//                 <a className="text-white" href="tel: +88 01708044344<">
//                   +88 01708044344
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-second-strip py-3">
//         <div className="container-xxl">
//           <div className="row align-items-center">
//             <div className="col-2">
//               <h2>
//                 <Link className="text-white">Dev Corner</Link>
//               </h2>
//             </div>
//             <div className="col-5">
//               <div className="input-group">
//                 {/* <input
//                   type="text"
//                   className="form-control py-2"
//                   placeholder="Search Product Here..."
//                   aria-label="Search Product Here..."
//                   aria-describedby="basic-addon2"
//                 /> */}
//                 <Typeahead
//                   id="basic-example"
//                   onPaginate={() => console.log()}
//                   options={productOpt}
//                   paginate={paginate}
//                   placeholder="Search Product Here..."
//                   labelKey={"name"}
//                   onChange={(selected) => {
//                     navigate(`/product/${selected[0]?.prod}`);
//                     dispatch(getAProduct(selected[0]?.prod));
//                   }}
//                   minLength={2}
//                 />
//                 <span className="input-group-text p-3" id="basic-addon2">
//                   <BsSearch className="fs-6" />
//                 </span>
//               </div>
//             </div>
//             <div className="col-5">
//               <div
//                 className="
//                             header-upper-links
//                             d-flex
//                             align-items-center justify-content-between"
//               >
//                 <div>
//                   <Link
//                     to="/compare-product"
//                     className="d-flex align-items-center gap-10 text-white"
//                   >
//                     <img src="images/compare.svg" alt="Compare" />
//                     <p className="mb-0 ">
//                       Compare <br /> Product{" "}
//                     </p>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to="/wishlist"
//                     className="d-flex align-items-center gap-10 text-white"
//                   >
//                     <img src="images/wishlist.svg" alt="wishlist" />
//                     <p className="mb-0">
//                       Favourite <br /> Wishlist{" "}
//                     </p>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to={authState?.user === null ? "/login" : "my-profile"}
//                     className="d-flex align-items-center gap-10 text-white"
//                   >
//                     <img src="images/user.svg" alt="user" />
//                     {authState?.user === null ? (
//                       <p className="mb-0">
//                         Login <br /> My Account
//                       </p>
//                     ) : (
//                       <p className="mb-0">
//                         Welcome
//                         {authState?.user?.firstname}
//                       </p>
//                     )}
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to="/cart"
//                     className="d-flex align-items-center gap-10 text-white"
//                   >
//                     <img src="images/cart.svg" alt="cart" />
//                     <div className="d-flex flex-column gap-10">
//                       <span className="badge bg-white text-dark">
//                         {cartState?.length ? cartState.length : 0}
//                       </span>
//                       <p className="mb-0">$ {total ? total : 0}</p>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-third-strip py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12">
//               <div className="menu-bottom d-flex align-items-center gap-30">
//                 <div>
//                   <div className="dropdown">
//                     <button
//                       className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
//                       type="button"
//                       id="dropdownMenuButton1"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       <img src="images/menu.svg" alt="" />
//                       <span className="me-5 d-inline-block">
//                         Shop Categories
//                       </span>
//                     </button>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby="dropdownMenuButton1"
//                     >
//                       <li>
//                         <Link className="dropdown-item text-white" to="#">
//                           Action
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item text-white" to="#">
//                           Another action
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item text-white" to="#">
//                           Something else here
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="menu-links">
//                   <d className="d-flex align-items-center gap-15">
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="/product">Our Store</NavLink>
//                     <NavLink to="/my-orders">Orders</NavLink>
//                     <NavLink to="/blogs">Blogs</NavLink>
//                     <NavLink to="/contact">Contact</NavLink>
//                     <button
//                       onClick={handleLogout}
//                       type="button"
//                       className="border border-0 bg-transparent text-white text-uppercase"
//                     >
//                       Logout
//                     </button>
//                   </d>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };
// export default Header;



// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { Typeahead } from "react-bootstrap-typeahead";
// import "react-bootstrap-typeahead/css/Typeahead.css";
// import { getAProduct } from "../features/products/productSlice";

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const cartState = useSelector((state) => state?.auth?.cartProducts);
//   const authState = useSelector((state) => state?.auth);
//   const productState = useSelector((state) => state?.product?.product) || [];

//   const [total, setTotal] = useState(null);
//   const [paginate, setPaginate] = useState(true);
//   const [productOpt, setProductOpt] = useState([]);

//   useEffect(() => {
//     let sum = 0;
//     for (let index = 0; index < cartState?.length; index++) {
//       sum += Number(cartState[index]?.quantity) * Number(cartState[index]?.price);
//     }
//     setTotal(sum);
//   }, [cartState]);

//   useEffect(() => {
//     // Validate that productState is an array before mapping
//     if (Array.isArray(productState)) {
//       const data = productState.map((element, index) => ({
//         id: index,
//         prod: element?._id,
//         name: element?.title,
//       }));
//       setProductOpt(data);
//     } else {
//       console.warn("productState is not an array:", productState);
//     }
//   }, [productState]);

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.reload();
//     window.location.href = "/login";
//   };

//   return (
//     <>
//       <header className="header-first-strip py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-6">
//               <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
//             </div>
//             <div className="col-6">
//               <p className="text-end mb-0 text-white">
//                 Hotline: 
//                 <a className="text-white" href="tel:+8801708044344">+88 01708044344</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-second-strip py-3">
//         <div className="container-xxl">
//           <div className="row align-items-center">
//             <div className="col-2">
//               <h2><Link className="text-white">Dev Corner</Link></h2>
//             </div>
//             <div className="col-5">
//               <div className="input-group">
//                 <Typeahead
//                   id="basic-example"
//                   onPaginate={() => console.log()}
//                   options={productOpt}
//                   paginate={paginate}
//                   placeholder="Search Product Here..."
//                   labelKey={"name"}
//                   onChange={(selected) => {
//                     if (selected.length > 0) {
//                       navigate(`/product/${selected[0]?.prod}`);
//                       dispatch(getAProduct(selected[0]?.prod));
//                     }
//                   }}
//                   minLength={2}
//                 />
//                 <span className="input-group-text p-3" id="basic-addon2">
//                   <BsSearch className="fs-6" />
//                 </span>
//               </div>
//             </div>
//             <div className="col-5">
//               <div className="header-upper-links d-flex align-items-center justify-content-between">
//                 <div>
//                   <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
//                     <img src="images/compare.svg" alt="Compare" />
//                     <p className="mb-0">Compare <br /> Product</p>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
//                     <img src="images/wishlist.svg" alt="wishlist" />
//                     <p className="mb-0">Favourite <br /> Wishlist</p>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link to={authState?.user === null ? "/login" : "/my-profile"} className="d-flex align-items-center gap-10 text-white">
//                     <img src="images/user.svg" alt="user" />
//                     <p className="mb-0">
//                       {authState?.user === null ? "Login \n My Account" : `Welcome ${authState?.user?.firstName}`}
//                     </p>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
//                     <img src="images/cart.svg" alt="cart" />
//                     <div className="d-flex flex-column gap-10">
//                       <span className="badge bg-white text-dark">{cartState?.length ? cartState.length : 0}</span>
//                       <p className="mb-0">$ {total || 0}</p>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-third-strip py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12">
//               <div className="menu-bottom d-flex align-items-center gap-30">
//                 <div className="dropdown">
//                   <button
//                     className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
//                     type="button"
//                     id="dropdownMenuButton1"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     <img src="images/menu.svg" alt="Menu Icon" />
//                     <span className="me-5 d-inline-block">Shop Categories</span>
//                   </button>
//                   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                     <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
//                     <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
//                     <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
//                   </ul>
//                 </div>
//                 <div className="menu-links">
//                   <div className="d-flex align-items-center gap-15">
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="/product">Our Store</NavLink>
//                     <NavLink to="/my-orders">Orders</NavLink>
//                     <NavLink to="/blogs">Blogs</NavLink>
//                     <NavLink to="/contact">Contact</NavLink>
//                     <button onClick={handleLogout} type="button" className="border border-0 bg-transparent text-white text-uppercase">
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduct } from "../features/products/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.product) || [];

  const [total, setTotal] = useState(0);
  const [paginate, setPaginate] = useState(true);
  const [productOpt, setProductOpt] = useState([]);

  // Calculate total price
  useEffect(() => {
    const sum = cartState?.reduce((acc, item) => {
      return acc + (Number(item?.quantity) * Number(item?.price));
    }, 0);
    setTotal(sum);
  }, [cartState]);

  // Update product options
  useEffect(() => {
    if (Array.isArray(productState)) {
      const data = productState.map((element) => ({
        id: element._id, // Use _id as the unique id
        prod: element._id,
        name: element.title,
      }));
      setProductOpt(data);
    } else {
      console.warn("productState is not an array:", productState);
    }
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    window.location.href = "/login";
  };

  return (
    <>
      <header className="header-first-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end mb-0 text-white">
                Hotline:
                <a className="text-white" href="tel:+8801708044344">+88 01708044344</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-second-strip py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2><Link className="text-white">Dev Corner</Link></h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="basic-example"
                  options={productOpt}
                  paginate={paginate}
                  placeholder="Search Product Here..."
                  labelKey={"name"}
                  onChange={(selected) => {
                    if (selected.length > 0) {
                      navigate(`/product/${selected[0]?.prod}`);
                      dispatch(getAProduct(selected[0]?.prod));
                    }
                  }}
                  minLength={2}
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="Compare" />
                    <p className="mb-0">Compare <br /> Product</p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">Favourite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to={authState?.user === null ? "/login" : "/my-profile"} className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="user" />
                    <p className="mb-0">
                      {authState?.user === null ? "Login \n My Account" : `Welcome ${authState?.user?.firstName}`}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{cartState?.length ? cartState.length : 0}</span>
                      <p className="mb-0">$ {total}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-third-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="images/menu.svg" alt="Menu Icon" />
                    <span className="me-5 d-inline-block">Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                  </ul>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/my-orders">Orders</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button onClick={handleLogout} type="button" className="border border-0 bg-transparent text-white text-uppercase">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
