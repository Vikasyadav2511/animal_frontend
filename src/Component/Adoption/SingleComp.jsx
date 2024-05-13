import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { baseUrl } from "../util";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { Formik } from "formik";
import { Form, Field, ErrorMessage } from "formik";

const SingleComp = () => {
  const [single, setSingle] = useState({});
  const { single_id } = useParams();
  useEffect(() => {
    axios
      .get(`${baseUrl}/get-companion/${single_id}`)
      .then((res) => {
        console.log("singleeeeee", res.data.data);
        setSingle(res.data.data);
        // setPath(res.data.filepath)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [single_id]);
  return (
    <div>
      <Container fluid className="mt-28">
        <Row>
          <Col md={8} className="g-0">
            <div className="voilet">
              <div className="sausdiv">
                <h2 className="text-white fs-1 text-lg p-4 saus">
                  {single.title}
                </h2>
                <div className="breed d-flex justify-between">
                  <div>
                    <p className="sbtn text-left">BREED</p>
                    <p className="text-white fs-5">{single.breed}</p>
                  </div>
                  <div>
                    <p className="sbtn">AGE</p>
                    <p className="text-white fs-5">{single.age}</p>
                  </div>
                </div>
                <div className="d-flex justify-between">
                  <div>
                    <p className="sbtn">COLOR</p>
                    <p className="text-white fs-5">{single.color}</p>
                  </div>
                  <div>
                    <p className="sbtn">SEX</p>
                    <p className="text-white fs-5">{single.sex}</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} className="g-0">
            <img
              src={`${baseUrl}/uploads/Companion/${single.image}`}
              alt={single.image}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <div className="text-left text-lg ">
              <h1 className="py-3">Meet {single.title}</h1>
              <p className="text-muted">
                Bruce is a very nice boy who weighs in at 102.4lbs, having lost
                a dozen pounds so far since living with his wonderful foster
                family. He originally came to DunRoamin’ with his five siblings
                in August 2014 as a rescue from the SPCA and was adopted, but
                was returned in September 2022 when his family was unable to
                keep him.Bruce was born about July 31, 2014. He is completely up
                to date on all vaccines and although he had long nails and a bit
                of a skin condition upon his arrival, he is 100% perfectly
                healthy now!Bruce lived his first eight years in a home with two
                people who absolutely adored him.
              </p>

              <p className="text-muted">
                His exposure to people and other animals during that time was
                limited, so Bruce has been getting used to a busier lifestyle
                over the past month. He will do best in a home with experienced
                dog owners and children ten years of age or older (he can be a
                bit of a bull in a china shop). He can be also selective about
                other dogs, but has been great with cats.Bruce likes cheese,
                belly rubs, short walks, cats, some dogs, and laying near his
                humans. His dislikes include having his collar grabbed, some
                dogs and car rides.Bruce is looking forward to a long and
                pleasant retirement in a quiet home with a family who will love
                him, be patient and willing to work with him.
              </p>

              <p className="text-muted">
                He is a very sweet boy who will blend in well once he gets
                settled.If you would like to know more about adopting Bruce,
                please submit a pre-adopt application and our dog adoption
                coordinator will be in touch.
              </p>
            </div>

            <div>
              <div className="text-left">
                <h1 className="py-3">Additional Information</h1>
                <p>
                  Are you looking for a fun-loving large dog who can’t get
                  enough of his human? Then look no further because Bruce is
                  here!
                </p>

                <li>
                  Loves everyone he meets and would probably do best in a home
                  with teens and up.
                </li>
                <li>Bruce is reported to enjoy the company of other dogs.</li>
                <li>It is unknown how Bruce would do with cats.</li>
                <li>
                  A Matchmaker can give you tips to help set up Bruce for
                  housetraining success!
                </li>

                <p className="py-3">
                  If you’d like to give Bruce a loving home, please click the
                  “Adopt Me” button to complete an application!
                </p>
              </div>
            </div>

            <div>
              <div>
                <h1>Your Next Steps</h1>
                <div>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Adoption Process</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                      <Accordion.Header>Adoption Fees</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Post-Adoption Services
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} className="mt-4">
            <div className="About1">
              <div className="text-left mx-4 ">
                <p className="fs-2 py-2">About</p>
                <h5 className="fs-5 py-2">Characteristics</h5>
                <p className="text-muted">{single.Characteristics}</p>
                <h5 className="fs-5 py-2">Size</h5>
                <p className="text-muted">{single.size}</p>
                <h5 className="fs-5 py-2">Coat Length</h5>
                <p className="text-muted">{single.Coatlength}</p>
                <h5 className="fs-5 py-2">House-Trained</h5>
                <p className="text-muted">{single.housetrained}</p>
                <h5 className="fs-5 py-2">Health</h5>
                <p className="text-muted">{single.Health}</p>
                <h5 className="fs-5 py-2">Good in a Home With</h5>
                <p className="text-muted">{single.Good}</p>
              </div>
            </div>

            <div className="form px-4">
              <h2 className="text-left py-2 ">
                Considering <br />
                Adoption?
              </h2>
              <div>
                <Formik
                  initialValues={{ name: "", email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Name is Required";
                    }
                    if (!values.email) {
                      errors.email =
                        "This field is required. Please input a valid email.";
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
                      <label
                        className="text-start text-white pb-1 w-100"
                        htmlFor="name"
                      >
                        Your Name*
                      </label>
                      <input
                        type="name"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className="single_1 "
                        placeholder="Eg.John.Doe"
                      />
                      <br />
                      <p className="h-6  w-100 bg-red-200 text-red-500 font-semibold mt-1">
                        {" "}
                        {errors.name && touched.name && errors.name}{" "}
                      </p>

                      <label
                        className="text-start text-white  w-100"
                        htmlFor="name"
                      >
                        Your email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="single_1 "
                        placeholder="Eg.John@Doe.com"
                      />
                      <p className="h-6  w-100 bg-red-200 text-red-500 text-sm font-semibold mt-2">
                        {" "}
                        {errors.email && touched.email && errors.email}{" "}
                      </p>
                      <label
                        className="text-start text-white  w-100"
                        htmlFor="name"
                      >
                       You are interested in:
                      </label>
                      <select className="single_1 " name="" id="">
                        <option value="">Adoption</option>
                        <option value="">Helping Animal Shelters</option>
                        <option value="">Animal Walking</option>
                      </select>
                      <label
                        className="text-start mt-2 text-white  w-100"
                        htmlFor="name"
                      >
                      Your Comment
                      </label>
                      <textarea className=" rounded "  name="" id="" cols="40" rows="5"></textarea>
                      <button className="bg-blue-800 text-lg font-semibold px-3 mt-3 text-white rounded-lg py-2" type="submit" disabled={isSubmitting}>
                        Make an Enquiry
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleComp;
