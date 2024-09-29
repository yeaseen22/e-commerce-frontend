import React, { useEffect, useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard'
import Color from '../components/Color';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';

const OurStore = () => {
    const [grid, setGrid] = useState(4)
    const dispatch = useDispatch()
    const productState = useSelector((state) => state?.product?.product)
    useEffect(() => {
        getProducts()
    },[])
    const getProducts = () => {
        dispatch(getAllProducts())
    }
    // alert(grid)
    return (
        <>
            <Meta title='Our Store' />
            <BreadCrumb title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' />
                                            <label htmlFor="form-check-label">In Stock (1) </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' />
                                            <label htmlFor="form-check-label">Out of Stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput"> From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlFor="floatingInput1"> To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Color</h5>
                                    <div>
                                        <div>
                                            <Color/>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox"
                                                id='color-1'
                                                className='form-check-input' />
                                            <label htmlFor="color-1">S (2) </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox"
                                                id='color-2'
                                                className='form-check-input' />
                                            <label htmlFor="color-2">M (2) </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className="products-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Headphone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3" >
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Random Product</h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img className='img-fluid' src="images/watch.jpg" alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphone bulk 10 pack multi colored for student</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 100</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img className='img-fluid' src="images/watch.jpg" alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphone bulk 10 pack multi colored for student</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 100</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='mb-0 d-block' style={{ width: '100px' }}>Sort By:</p>
                                        <select className='form-control form-select' name="" id="sortBy">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Best Selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, A-Z</option>
                                            <option value="title-ascending">Price, low to high</option>
                                            <option value="title-descending">Price, how to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0" >21 Products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() => setGrid(3)} className='d-block img-fluid' src="images/gr4.svg" alt="grid4" />
                                            <img onClick={() => setGrid(4)} className='d-block img-fluid' src="images/gr3.svg" alt="grid2" />
                                            <img onClick={() => setGrid(6)} className='d-block img-fluid' src="images/gr2.svg" alt="grid" />
                                            <img  onClick={() => setGrid(12)} className='d-block img-fluid' src="images/gr.svg" alt="grid" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                <ProductCard data={productState ?  productState : []} grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}


export default OurStore