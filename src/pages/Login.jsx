import React, { useEffect } from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';


const loginSchema = yup.object({

    email: yup.string().email("Email Should Be Valid").required("Email Address Is Required"),
    password: yup.string().required('Password Is Required')
});


const Login = () => {
    const authState = useSelector((state) => state?.auth)
    const { isSuccess, isError } = authState;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
            localStorage.getItem("customer")
        },
    });

    useEffect(() => {
        if(authState.user !== null){
            navigate('/')
        }
    },[authState])

    return (
        <>
            <Meta title='Login' />
            <BreadCrumb title="Login" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'></h3>
                            <form onSubmit={formik.handleSubmit} action="" className='d-flex flex-column gap-15'>
                                {/* <div>
                                    <input type="email" name='email' className="form-control" placeholder='Email' />
                                </div> */}
                                <CustomInput
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    value={formik.values.email}
                                />
                                <div className="errors">
                                    {formik.touched.email && formik.errors.email}
                                </div>

                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                    value={formik.values.password}
                                />
                                <div className="errors">
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                <div>
                                    <Link to='/forgot-password'>Forgot Password?</Link>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button type='submit' onClick={() => isSuccess===true ? navigate('/') : false } className='button border-0'>Login</button>
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