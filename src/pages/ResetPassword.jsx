import React from "react";
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import { useDispatch,useSelector } from 'react-redux';
import { resetPassword } from "../features/user/userSlice";


const resetPasswordSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    // confpassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

const ResetPassword = () => {
    const location = useLocation();
    const getToken = location.pathname.split("/")[2];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: '',
            // confirmPassword: ''
        },
        validationSchema: resetPasswordSchema,
        onSubmit: (values) => {
            dispatch(resetPassword({token:getToken, password: values.password}))
            navigate('/login')
        },
    });

  
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
                            <form onSubmit={formik.handleSubmit} action="" className='d-flex flex-column gap-30'>
                                {/* <div>
                                        <input type="password" name='password' className="form-control" placeholder='Password' />
                                    </div> */}
                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    values={formik.values.password}
                                    onChange={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}

                                />
                                div.errorMessage{formik.errors.password && formik.touched.password && (
                                    <div className='errors'>{formik.errors.password}</div>
                                )}
                                {/* <div>
                                        <input type="password" name='confpassword' className="form-control" placeholder='Confirm Password' />
                                    </div> */}
                                {/* <CustomInput
                                    type="password"
                                    name='confpassword'
                                    placeholder='Confirm Password'
                                    values={formik.values.confirmPassword}
                                    onChange={formik.handleChange('confirmPassword')}
                                    onBlur={formik.handleBlur('confpassword')}
                                />
                                <div className="error">
                                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                                        <div className='errors'>{formik.errors.confirmPassword}</div>
                                    )}
                                </div> */}
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