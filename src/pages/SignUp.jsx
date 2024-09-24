import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
    return (
        <>
            <Meta title='Sign Up' />
            <BreadCrumb title="Sign Up" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>SignUp</h3>
                            <form action="" className='d-flex flex-column gap-30'>
                                {/* <div>
                                    <input type="text" name='name' className="form-control" placeholder=' Name' />
                                </div> */}
                                <CustomInput
                                    type="text"
                                    name='name'
                                    placeholder=' Name'
                                />
                                <CustomInput
                                    type="tel"
                                    name='mobile'
                                    placeholder='Mobile Number'
                                />
                                {/* <div>
                                    <input type="tel" name='mobile' className="form-control" placeholder='Mobile Number' />
                                </div> */}
                                {/* <div>
                                    <input type="email" name='email' className="form-control" placeholder='Email' />
                                </div> */}
                                <CustomInput 
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                />
                                <CustomInput 
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    className="mt-1"
                                />
                                {/* <div className='mt-1'>
                                    <input type="password" name='password' placeholder='Password' className="form-control" />
                                </div> */}
                                <div>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0' type='submit'>Login</button>
                                        <Link to='/signup' className='button signup text-white'>SignUp</Link>
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

export default SignUp;
