// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";
// // eslint-disable-next-line no-unused-vars
// import { Helmet } from "react-helmet";
// // eslint-disable-next-line no-unused-vars
// import ReactStars from "react-rating-stars-component";
// import ProductCard from "../components/ProductCard";
// import Color from "../components/Color";
// import Container from "../components/Container";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../features/products/productSlice";

// const OurStore = () => {
//   const [grid, setGrid] = useState(4);
//   const dispatch = useDispatch();
//   const productState = useSelector((state) => state?.product?.product);
//   console.log(productState);

//   const [brand, setBrand] = useState([]);
//   // eslint-disable-next-line no-unused-vars
//   const [brandF, setBrandF] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [category, setCategory] = useState(null);
//   //   const [colors,setColors] = useState([]);

//   const [tags, setTags] = useState([]);
//   const [tag, setTag] = useState(null);
//   const [minPrice, setMinPrice] = useState(null);
//   const [maxPrice, setMaxPrice] = useState(null);
//   const [sort, setSort] = useState(null);

//   useEffect(() => {
//     let newBrand = [];
//     let newCategory = [];
//     let newTags = [];
//     // eslint-disable-next-line no-unused-vars
//     let newColor = [];
//     for (let index = 0; index < productState.lenght; index++) {
//       const element = productState[index];

//       newBrand?.push(element?.brand);
//       newCategory?.push(element?.category);
//       newTags?.push(element?.tags);
//       //   newColor?.push(element?.color);
//     }

//     setBrand(newBrand);
//     setCategories(newCategory);
//     setTags(newTags);
//     // setColors(newColor);
//   }, [productState, sort, tag, category, minPrice, maxPrice]);

//   useEffect(() => {
//     getProducts();
//   }, []);


//   const getProducts = () => {
//     dispatch(
//       getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
//     );
//   };
//   console.log(grid)
//   return (
//     <>
//       <Meta title="Our Store" />
//       <BreadCrumb title="Our Store" />
//       <Container class1="store-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-3">
//             <div className="filter-card mb-3">
//               <h3 className="filter-title">Shop By Categories</h3>
//               <div>
//                 <ul className="ps-0">
//                   {categories &&
//                     [...new Set(categories)].map((item, index) => {
//                       return (
//                         <li key={index} onClick={() => setCategory(item)}>
//                           {item}
//                         </li>
//                       );
//                     })}
//                 </ul>
//               </div>
//             </div>
//             <div className="filter-card mb-3">
//               <h3 className="filter-title">Filter By</h3>
//               <div>
//                 {/* <h5 className="sub-title">Availability</h5>
//                 <div>
//                   <div className="form-check">
//                     <input type="checkbox" className="form-check-input" />
//                     <label htmlFor="form-check-label">In Stock (1) </label>
//                   </div>
//                   <div className="form-check">
//                     <input type="checkbox" className="form-check-input" />
//                     <label htmlFor="form-check-label">Out of Stock (0)</label>
//                   </div>
//                 </div> */}
//                 <h5 className="sub-title">Price</h5>
//                 <div className="d-flex align-items-center gap-10">
//                   <div className="form-floating">
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="floatingInput"
//                       placeholder="From"
//                       onChange={(e) => setMinPrice(e.target.value)}
//                     />
//                     <label htmlFor="floatingInput"> From</label>
//                   </div>
//                   <div className="form-floating">
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="floatingInput1"
//                       placeholder="To"
//                       onChange={(e) => setMaxPrice(e.target.value)}
//                     />
//                     <label htmlFor="floatingInput1"> To</label>
//                   </div>
//                 </div>
//                 <h5 className="sub-title">Color</h5>
//                 <div>
//                   <div>
//                     <Color />
//                   </div>
//                 </div>
//                 {/* <h5 className="sub-title">Size</h5>
//                 <div>
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       id="color-1"
//                       className="form-check-input"
//                     />
//                     <label htmlFor="color-1">S (2) </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       id="color-2"
//                       className="form-check-input"
//                     />
//                     <label htmlFor="color-2">M (2) </label>
//                   </div>
//                 </div> */}
//               </div>
//               <div className="mt-4 mb-3">
//                 <h3 className="sub-title">Product Tags</h3>
//                 <div>
//                   <div className="products-tags d-flex flex-wrap align-items-center gap-10">
//                     {tags &&
//                       [...new Set(tags)].map((item, index) => {
//                         return (
//                           <span
//                             onClick={() => setTag(item)}
//                             key={index}
//                             className=" text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
//                           >
//                             {item}
//                           </span>
//                         );
//                       })}
//                   </div>
//                 </div>
//               </div>

//               <div className=" mb-3">
//                 <h3 className="sub-title">Product Brands</h3>
//                 <div>
//                   <div className="products-tags d-flex flex-wrap align-items-center gap-10">
//                     {brand &&
//                       [...new Set(brand)].map((item, index) => {
//                         return (
//                           <span
//                             onClick={() => setBrandF(item)}
//                             key={index}
//                             className=" text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
//                           >
//                             {item}
//                           </span>
//                         );
//                       })}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* <div className="filter-card mb-3">
//               <h3 className="filter-title">Random Product</h3>
//               <div>
//                 <div className="random-products mb-3 d-flex">
//                   <div className="w-50">
//                     <img
//                       className="img-fluid"
//                       src="images/watch.jpg"
//                       alt="watch"
//                     />
//                   </div>
//                   <div className="w-50">
//                     <h5>
//                       Kids headphone bulk 10 pack multi colored for student
//                     </h5>
//                     <ReactStars
//                       count={5}
//                       size={24}
//                       value={4}
//                       edit={false}
//                       activeColor="#ffd700"
//                     />
//                     <b>$ 100</b>
//                   </div>
//                 </div>
//                 <div className="random-products d-flex">
//                   <div className="w-50">
//                     <img
//                       className="img-fluid"
//                       src="images/watch.jpg"
//                       alt="watch"
//                     />
//                   </div>
//                   <div className="w-50">
//                     <h5>
//                       Kids headphone bulk 10 pack multi colored for student
//                     </h5>
//                     <ReactStars
//                       count={5}
//                       size={24}
//                       value={4}
//                       edit={false}
//                       activeColor="#ffd700"
//                     />
//                     <b>$ 100</b>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//           <div className="col-9">
//             <div className="filter-sort-grid mb-4">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div className="d-flex align-items-center gap-10">
//                   <p className="mb-0 d-block" style={{ width: "100px" }}>
//                     Sort By:
//                   </p>
//                   <select
//                     className="form-control form-select"
//                     name=""
//                     id="sortBy"
//                     onChange={(e) => setSort(e.target.value)}
//                   >
//                     <option value="title">Alphabetically, A-Z</option>
//                     <option value="title">Alphabetically, A-Z</option>
//                     <option value="price">Price, low to high</option>
//                     <option value="-price">Price, how to low</option>
//                     <option value="createdAt">Date, old to new</option>
//                     <option value="-createdAt">Date, new to old</option>
//                   </select>
//                 </div>
//                 <div className="d-flex align-items-center gap-10">
//                   <p className="totalproducts mb-0">21 Products</p>
//                   <div className="d-flex gap-10 align-items-center grid">
//                     <img
//                       onClick={() => setGrid(3)}
//                       className="d-block img-fluid"
//                       src="images/gr4.svg"
//                       alt="grid4"
//                     />
//                     <img
//                       onClick={() => setGrid(4)}
//                       className="d-block img-fluid"
//                       src="images/gr3.svg"
//                       alt="grid2"
//                     />
//                     <img
//                       onClick={() => setGrid(6)}
//                       className="d-block img-fluid"
//                       src="images/gr2.svg"
//                       alt="grid"
//                     />
//                     <img
//                       onClick={() => setGrid(12)}
//                       className="d-block img-fluid"
//                       src="images/gr.svg"
//                       alt="grid"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="products-list pb-5">
//               <div className="d-flex gap-10 flex-wrap">
//                 <ProductCard
//                   data={productState ? productState : []}
//                   grid={grid}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default OurStore;


import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.product);

  const [brand, setBrand] = useState([]);
  const [brandF, setBrandF] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);
  const [filterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    if (!filterApplied) {
      dispatch(getAllProducts({}));
    }
  }, [dispatch, filterApplied]);

  useEffect(() => {
    if (filterApplied) {
      dispatch(
        getAllProducts({ sort, tag, brand: brandF, category, minPrice, maxPrice })
      );
    }
  }, [dispatch, sort, tag, brandF, category, minPrice, maxPrice, filterApplied]);

  useEffect(() => {
    if (productState?.length) {
      const brands = [...new Set(productState.map((item) => item.brand))];
      const categories = [...new Set(productState.map((item) => item.category))];
      const tags = [...new Set(productState.map((item) => item.tags))];
      setBrand(brands);
      setCategories(categories);
      setTags(tags);
    }
  }, [productState]);

  const handleFilterChange = () => setFilterApplied(true);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            {/* Category Filter */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <ul className="ps-0">
                {categories.map((item, index) => (
                  <li key={index} onClick={() => { setCategory(item); handleFilterChange(); }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="From"
                    onChange={(e) => { setMinPrice(e.target.value); handleFilterChange(); }}
                  />
                  <label>From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="To"
                    onChange={(e) => { setMaxPrice(e.target.value); handleFilterChange(); }}
                  />
                  <label>To</label>
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="filter-card mb-3">
              <h3 className="sub-title">Product Brands</h3>
              <div className="products-tags d-flex flex-wrap gap-10">
                {brand.map((item, index) => (
                  <span
                    onClick={() => { setBrandF(item); handleFilterChange(); }}
                    key={index}
                    className="badge bg-light text-secondary rounded-3 py-2 px-3"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-9">
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard data={productState || []} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
