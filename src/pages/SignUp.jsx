import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../features/user/userSlice';

const signUpSchema = yup.object({
    firstName: yup.string().required('First Name Is Required'),
    lastname: yup.string().required('Last Name Is Required'),
    email: yup.string().email("Email Should Be Valid").required('Email Address Is Required'),
    mobile: yup.string().required('Mobile No Is Required'),
    password: yup.string().required('Password Is Required')
});



const SignUp = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: ''
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            dispatch(registerUser(values))
        },
    });

    return (
        <>
            <Meta title='Sign Up' />
            <BreadCrumb title="Sign Up" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>SignUp</h3>
                            <form action="" onSubmit={formik.onSubmit} className='d-flex flex-column gap-30'>
                                {/* <div>
                                    <input type="text" name='name' className="form-control" placeholder=' Name' />
                                </div> */}
                                <CustomInput
                                    type="text"
                                    name='firstname'
                                    placeholder='First Name'
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    onBlur={formik.handleBlur("firstname")}
                                />
                                <div className="error">
                                    {formik.touched.firstname && formik.errors.firstname}
                                </div>


                                <CustomInput
                                    type="text"
                                    name='lasttname'
                                    placeholder='Last Name'
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange("lastname")}
                                    onBlur={formik.handleBlur("lastname")}
                                />
                                <div className="error">
                                    {formik.touched.lastname && formik.errors.lastname}
                                </div>

                                <CustomInput
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email}
                                </div>


                                <CustomInput
                                    type="tel"
                                    name='mobile'
                                    placeholder='Mobile Number'
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                />
                                <div className="error">
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>


                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    className="mt-1"
                                    value={formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>


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
