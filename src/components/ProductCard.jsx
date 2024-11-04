// /* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import ReactStars from "react-rating-stars-component";
// import { Link, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addToWishlist } from "../features/products/productSlice";

// const ProductCard = (props) => {
//   let location = useLocation();

//   const dispatch = useDispatch();

//   const { grid, data } = props;

//   const addToWish = (id) => {
//     dispatch(addToWishlist(id));
//   };

//   return (
//     <>
//       {data?.map((item, index) => {
//         return (
//           <div
//             key={index+1}
//             className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"
//               }`}
//           >
//             <div to=":id" className="product-card position-relative ">
//               <div className="wishlist-icon position-absolute">
//                 <button
//                   // eslint-disable-next-line no-unused-vars
//                   onClick={(e) => {
//                     addToWish(item?._id);
//                   }}
//                   className="border-0 bg-transparent"
//                 >
//                   <img src="images/wish.svg" alt="wishlist" />
//                 </button>
//               </div>
//               <div className="product-image">
//                 <img
//                   className="img-fluid d-block mx-auto"
//                   width={160}
//                   src={item?.images[0]?.url}
//                   alt="product image"
//                 />
//                 <img
//                   className="img-fluid d-block mx-auto"
//                   src={item?.images[0]?.url}
//                   width={160}
//                   alt="product image"
//                 />
//               </div>
//               <div className="product-details">
//                 <h6 className="brand">{item?.title}</h6>
//                 <h5 className="product-title">{item?.description}</h5>
//                 {/* <ReactStars
//                   count={5}
//                   size={24}
//                   value={item?.totalrating?.toString()}
//                   edit={false}
//                   activeColor="#ffd700"
//                 /> */}
//                 <p
//                   className={`description ${grid === 12 ? "d-block" : "d-none"
//                     }`}
//                   dangerouslySetInnerHTML={{ __html: item?.description || "" }}
//                 >
//                   {item?.description}
//                 </p>
//                 <p className="price">$ {item?.price}</p>
//               </div>
//               <div className="action-bar position-absolute">
//                 <div className="d-flex flex-column gap-15">
//                   {/* <button className="border-0 bg-transparent">
//                     <img src="images/prodcompare.svg" alt="compare" />
//                   </button> */}
//                   <Link to={item?._id} className="border-0 bg-transparent">
//                     <img src="images/view.svg" alt="addcart" />
//                   </Link>
//                   {/* <button className="border-0 bg-transparent">
//                     <img src="images/add-cart.svg" alt="addcart" />
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       {data.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"
//               }`}
//           >
//             <Link to=":id" className="product-card position-relative ">
//               <div className="wishlist-icon position-absolute">
//                 <button className="border-0 bg-transparent">
//                   <img src="images/wish.svg" alt="wishlist" />
//                 </button>
//               </div>
//               <div className="product-image">
//                 <img
//                   className="img-fluid d-block mx-auto"
//                   width={160}
//                   src={item?.images[0]?.url}
//                   alt="product image"
//                 />
//                 <img
//                   className="img-fluid d-block mx-auto"
//                   src={item?.images[0]?.url}
//                   width={160}
//                   alt="product image"
//                 />
//               </div>
//               <div className="product-details">
//                 <h6 className="brand">Havles</h6>
//                 <h5 className="product-title">Title</h5>
//                 {/* <ReactStars
//                   count={5}
//                   size={24}
//                   value="4"
//                   edit={false}
//                   activeColor="#ffd700"
//                 /> */}
//                 <p
//                   className={`description ${grid === 12 ? "d-block" : "d-none"
//                     }`}
//                 >
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Quasi unde cum rerum.
//                 </p>
//                 <p className="price">$ 100</p>
//               </div>
//               <div className="action-bar position-absolute">
//                 <div className="d-flex flex-column gap-15">
//                   <button className="border-0 bg-transparent">

//                     <img src="images/prodcompare.svg" alt="compare" />
//                   </button>
//                   <button className="border-0 bg-transparent">

//                     <img src="images/view.svg" alt="addcart" />
//                   </button>
//                   <button className="border-0 bg-transparent">

//                     <img src="images/add-cart.svg" alt="addcart" />
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         );
//       })}
//       {/* <div className={`${location.pathname == "/store" ? `gr-${grid}` : 'col-3'}`}>
//                 <Link to=':id' className="product-card position-relative ">
//                     <div className="wishlist-icon position-absolute">
//                         <button><img src="images/wish.svg" alt="wishlist" /></button>
//                     </div>
//                     <div className="product-image">
//                         <img className='img-fluid' src="images/watch.jpg" alt="product image" />
//                         <img className='img-fluid' src="images/watch-1.jpg" alt="product image" />
//                     </div>
//                     <div className="product-details">
//                         <h6 className="brand">Havels</h6>
//                         <h5 className="product-title">
//                             Kids headphone bulk 10 packs multi colored for students
//                         </h5>
//                         <ReactStars
//                             count={5}
//                             size={24}
//                             value='3'
//                             edit={false}
//                             activeColor="#ffd700"
//                         />
//                         <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae in excepturi, temporibus fugit fugiat nihil.</p>
//                         <p className="price">$100.00</p>
//                     </div>
//                     <div className="action-bar position-absolute">
//                         <div className="d-flex flex-column gap-15">
//                             <button className='border-0 bg-transparent'> <img src="images/prodcompare.svg" alt="compare" /></button>
//                             <button className='border-0 bg-transparent'> <img src="images/view.svg" alt="addcart" /></button>
//                             <button className='border-0 bg-transparent'> <img src="images/add-cart.svg" alt="addcart" /></button>
//                         </div>
//                     </div>
//                 </Link>
//             </div> */}
//     </>
//   );
// };

// export default ProductCard;


/* eslint-disable react/prop-types */
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = ({ grid, data }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={item?._id || index} // Using item._id for unique keys if available
          className={`${
            location.pathname === "/product" ? `gr-${grid}` : "col-3"
          }`}
        >
          <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <button
                onClick={() => addToWish(item?._id)}
                className="border-0 bg-transparent"
              >
                <img src="images/wish.svg" alt="Add to wishlist" />
              </button>
            </div>

            <div className="product-image">
              <img
                className="img-fluid d-block mx-auto"
                width={160}
                src={item?.images[0]?.url}
                alt="product"
              />
              <img
                className="img-fluid d-block mx-auto"
                width={160}
                src={item?.images[1]?.url || item?.images[0]?.url} // Secondary image fallback
                alt="product"
              />
            </div>

            <div className="product-details">
              <h6 className="brand">{item?.brand || "Brand Name"}</h6>
              <h5 className="product-title">{item?.title}</h5>

              <ReactStars
                count={5}
                size={24}
                value={item?.totalrating || 0}
                edit={false}
                activeColor="#ffd700"
              />

              {grid === 12 && (
                <p className="description d-block">
                  {item?.description}
                </p>
              )}

              <p className="price">$ {item?.price}</p>
            </div>

            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link to={`/product/${item?._id}`} className="border-0 bg-transparent">
                  <img src="images/view.svg" alt="View product" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
