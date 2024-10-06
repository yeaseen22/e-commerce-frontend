import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../features/user/userSlice";

const forgotPasswordSchema = yup.object({
  email: yup.string().required("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    ininitialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      dispatch(forgotPassword(values));
      navigate("/");
    },
  });

  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3"> Enter Your Email</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form onSubmit={formik.handleSubmit} action="" className="d-flex flex-column gap-30">
                {/* <div>
                                        <input type="email" name='email' className="form-control" placeholder='Email' />
                                    </div> */}
                <CustomInput type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} />
                <div className="error text-center">
                    {formik.touched.email && formik.errors.email ? (
                      <div className="errors">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancle</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
