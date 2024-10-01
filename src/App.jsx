import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import './App.css'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import WishList from './pages/WishList'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import SingleBlog from './pages/SingleBlog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermAndConditions from './pages/TermAndConditions'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { PrivateRoute } from './utils/privateRoute'
import { OpenRoute } from './utils/openRoute'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='product' element={<OurStore />}/>
            <Route path='product/:id' element={<SingleProduct />}/>
            <Route path='blogs' element={<Blog />}/>
            <Route path='blog/:id' element={<SingleBlog />}/>
            <Route path='cart' element={<PrivateRoute> <Cart /> </PrivateRoute>}/>
            <Route path='checkout' element={<PrivateRoute> <Checkout /> </PrivateRoute>}/>
            <Route path='compare-product' element={<CompareProduct />}/>
            <Route path='wishlist' element={<PrivateRoute><WishList /></PrivateRoute>}/>
            <Route path='login' element={<OpenRoute><Login /></OpenRoute>}/>
            <Route path='signup' element={<OpenRoute><SignUp /></OpenRoute>}/>
            <Route path='forgot-password' element={<ForgotPassword />}/>
            <Route path='reset-password' element={<ResetPassword />}/>
            <Route path='privacy-policy' element={<PrivacyPolicy />}/>
            <Route path='refund-policy' element={<RefundPolicy />}/>
            <Route path='shipping-policy' element={<ShippingPolicy />}/>
            <Route path='term-conditions' element={<TermAndConditions />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
