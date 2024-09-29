import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProductWishlist } from '../features/user/userSlice'


const WishList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getWishlistFromDb()
    })

    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist())
    }

    const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist)
    const removeFromWishlist = (id) => {
        dispatch(getUserProductWishlist(id))
        setTimeout(() => {
            dispatch(getUserProductWishlist())
        },)
    }

    return (
        <>
            <Meta title='WishList' />
            <BreadCrumb title="WishList" />
            <Container class1="wishlit-wrapper home-wrapper-2 py-5">

                <div className="row">
                    {wishlistState && wishlistState.length === 0 && <div className='text-center'>No Data</div>}
                    {
                        wishlistState && wishlistState?.map((item, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div className="wishlist-card position-relative">
                                        <img onClick={() => removeFromWishlist(item?._id)} src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                        <div className="wishlist-card-image bg-white">
                                            <img className='img-fluid d-block mx-auto' src={item?.images[0].url ? item?.images[0].url : "images/cross.svg"} width={160} alt="watch" />
                                        </div>
                                        <div className='py-3 px-3'>
                                            <h5 className="title">{item?.title}</h5>
                                            <h6 className='price'>$ {item?.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-image">
                                <img className='img-fluid w-100' src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className="title">Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="wishlist-card-image">
                                <img className='img-fluid w-100' src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className="title">Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Container>
        </>
    )
}
export default WishList;