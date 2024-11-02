import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import { FiEdit } from "react-icons/fi";
import { config } from "../utils/axiosConfig";

const profileSchema = yup.object({
  firstname: yup.string().required("First Name Is Required"),
  lastname: yup.string().required("Last Name Is Required"),
  email: yup
    .string()
    .email("Email Should Be Valid")
    .required("Email Address Is Required"),
  mobile: yup.string().required("Mobile Number Is Required"),
});

const Profile = () => {
  const dispatch = useDispatch();
  const userstate = useSelector((state) => state?.auth?.user);
  const [edit, setEdit] = useState(true);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userstate?.firstname,
      lastname: userstate?.lastname,
      email: userstate?.email,
      mobile: userstate?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile({data: values, config: config}));
      setEdit(true)
    },
  });

  return (
    <>
      <BreadCrumb title="Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Update Profile</h3>
              <FiEdit className="fs-3" onClick={() => setEdit(false)} />
            </div>
          </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="example1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="example1"
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                  disabled={edit}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="errors">{formik.errors.firstname}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="example2" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="example2"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                  disabled={edit}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="errors">{formik.errors.lastname}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  disabled={edit}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email ? (
                    <div className="errors">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Mobile No
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                  disabled={edit}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div className="errors">{formik.errors.mobile}</div>
                  ) : null}
                </div>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div> */}
              {/* <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div> */}
              {edit === false && (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
