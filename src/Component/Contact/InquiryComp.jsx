import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import image from "../Images/Contact-images/contacts-2.jpg";

const InquiryComp = () => {
  return (
    <div>
      <Container className="mt-20">
        <Row>
          <Col md={6}>
            <div className="inquiry">
              <img src={image} alt={image} />
            </div>
          </Col>

          <Col md={6} className="bg-white">
            <div className="inquiry">
              <div className="text-start mt-20">
                {" "}
                <span className="bg-amber-500 p-1 rounded">
                  {" "}
                  SEND US AN INQUIRY
                </span>
              </div>
              <h1 className="text-5xl text-start my-4">Contact Us</h1>
            </div>

            <div>
              <Formik
                initialValues={{ Name: "", email: "" }}
                validate={(values) => {
                  const errors = {};
                  if(!values.Name){
                    errors.Name= " Name is Required"
                  }
                  if (!values.email) {
                    errors.email = " Email is Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="flex form_div text-left">
                      <div className="block">
                        <label htmlFor="" className="">NAME</label>
                        <input
                          className="px-8 py-3 w-64 border"
                          type="text"
                          name="Name"
                          placeholder="Enter your Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Name}
                        />
                        <span className="text-red-500 ">{errors.Name && touched.Name && errors.Name}</span>
                      </div>
                      <div className="block">
                        <label htmlFor="Email">Email</label>
                        <input
                          className="px-8 py-3 w-64 border"
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <p className="text-red-500">{errors.email && touched.email && errors.email}</p>
                      </div>
                    </div>

                    <div className="text">
                        <textarea name="text" id="" cols="60" rows="10" className="border px-10" ></textarea>
                    </div>

                    <div className="text-left py-2">
                    <button className=" p-3 rounded sendbtn " type="submit" disabled={isSubmitting}>
                     Send Messages
                    </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InquiryComp;
