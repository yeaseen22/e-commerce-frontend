import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import { createQuery } from "../features/contact/contactSlice";

const contactSchema = yup.object({
  name: yup.string().required("First Name Is Required"),
  email: yup
    .string()
    .email("Email Should Be Valid")
    .required("Email Address Is Required"),
  mobile: yup.string().required("Mobile No Is Required"),
  comment: yup.string().required("comment Is Required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
    },
  });

  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29372.74433771834!2d91.47349342014307!3d23.03870990596712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536b9cd6021061%3A0x95e876c5b1457e6!2zQmFuZ2xhIEJhemFyLCDgpqHgpr_gpobgprAg4Kas4Ka-4Kec4Ka_!5e0!3m2!1sen!2sbd!4v1726382383424!5m2!1sen!2sbd"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4"> Contact </h3>
                <form onSubmit={formik.handleSubmit} action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="name"
                      className="form-control"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name ? (
                        <div className="errors">{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="email"
                      className="form-control"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email ? (
                        <div className="errors">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-control"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <div className="errors">{formik.errors.mobile}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="comment"
                      cols="30"
                      rows="4"
                      name="comment"
                      className="form-control w-100"
                      id=""
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                    ></textarea>
                    <div className="error">
                      {formik.touched.comment && formik.errors.comment ? (
                        <div className="errors">{formik.errors.comment}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno: 277, Near village chopal, Mandaura, sonipat, demo
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 82000***** ">91 82000*****</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="mailto:devilarmaan63@gmail.com">
                        devilarmaan63@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0 ">Mondey - Friday 10AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
