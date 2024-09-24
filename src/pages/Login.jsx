import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const Login = () => {
    return (
        <>
            <Meta title='Login' />
            <BreadCrumb title="Login" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'></h3>
                            <form action="" className='d-flex flex-column gap-30'>
                                {/* <div>
                                    <input type="email" name='email' className="form-control" placeholder='Email' />
                                </div> */}
                                <CustomInput
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                />
                                {/* <div className='mt-1'>
                                    <input type="password" name='password' placeholder='Password' className="form-control" />
                                </div> */}
                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                />
                                <div>
                                    <Link to='/forgot-password'>Forgot Password?</Link>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0'>Login</button>
                                        <Link to='/signup' className='button signup text-white'> Sign Up </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Login