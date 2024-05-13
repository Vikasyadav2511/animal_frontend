import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import { baseUrl } from "../../util/api";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { notification } from "antd";

const Addnews = () => {
  
  const navigate = useNavigate();
  const [img, setImg] = useState(null);

  const  navigatehandler =()=>{
    navigate('/news')
  }
  return (
    <>

        <div className="pbtn flex justify-center items-center">
        <button className="backbtn" onClick={navigatehandler}><FaArrowLeft /></button>
        </div>
       <div className="mainnews">
      <div className="Addnews1">
        <h1 className="text-white">Addnews</h1>
        <Formik
          initialValues={{
            title: "",
            description: "",
            header: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.title) {
              errors.title = "Title is required";
            }

            if (!values.description) {
              errors.description = "Description is required";
            }

            if (!values.header) {
              errors.header = "header is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("header", values.header);
            formData.append("image", img);

            axios
              .post(`${baseUrl}/add-news`, formData)
              .then((res) => {
                console.log("addnews", res.data.data);
                setSubmitting(false);
                navigate("/news");
                notification.success({message:res.data.message})  
              })
              .catch((err) => console.log(err));
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
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Add title"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-700">
                {errors.title && touched.title && errors.title}
              </p>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder="Add Description"
                className="form-control m-3 p-4 border-black"
              />
              <p className="text-red-700">
                {errors.description &&
                  touched.description &&
                  errors.description}
              </p>

              <input
                type="text"
                name="header"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.header}
                placeholder="Add Header"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {errors.header && touched.header && errors.header}
              </p>

              {/* <input
                
                type="date"
                name="date"
                onChange={(e)=>setImg(e.target.files[0])}
                onBlur={handleBlur}
                value={values.date}
                placeholder="Add date"
                className="form-control m-3 p-3 border-black"
              />
             <p className='text-red-500'> {errors.date && touched.date && errors.date}</p> */}

              <input
                type="file"
                name="image"
                onChange={(e) => setImg(e.target.files[0])}
                onBlur={handleBlur}
                value={values.image}
                placeholder="Add image"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {" "}
                {errors.image && touched.image && errors.image}
              </p>
              <button
                className="form-control m-3 border-black submit_btn1"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default Addnews;
