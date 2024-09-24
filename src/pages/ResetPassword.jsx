import React from "react";
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";


const ResetPassword = () => {
    return (
        <>
            <Meta title='Reset Password' />
            <BreadCrumb title="Reset Password" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset  Password</h3>
                            <p className="text-center mt-2 mb-3">We will send you an email to reset your password</p>
                            <form action="" className='d-flex flex-column gap-30'>
                                {/* <div>
                                        <input type="password" name='password' className="form-control" placeholder='Password' />
                                    </div> */}
                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                />
                                {/* <div>
                                        <input type="password" name='confpassword' className="form-control" placeholder='Confirm Password' />
                                    </div> */}
                                <CustomInput
                                    type="password"
                                    name='confpassword'
                                    placeholder='Confirm Password'
                                />
                                <div>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0' type='submit'>Submit</button>
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

export default ResetPassword;