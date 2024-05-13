import React from "react";
import { baseUrl } from '../../util/api';
import axios from 'axios';
import { Formik } from "formik";
import "./category.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Modal, notification } from "antd";


const Addcategory = () => {
  const navigate= useNavigate()


  const navigatehandler = ()=>{
    navigate("/category")
  }
 
  return (
    <>
        <div className="pbtn flex justify-center items-center">
        <button className="backbtn" onClick={navigatehandler}><FaArrowLeft /></button>
        </div>
      <div className="Addcategory">    
      <div className="category p-3 h-16">
      <h1 className="text-white">Add Category</h1>

        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.title) {
              errors.title = "Title is required";
            }

            if (!values.description) {
              errors.description = "Description is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            axios.post(`${baseUrl}/add-category`,values)
                .then((res)=>{
                    console.log('addcat',res.data.data)
                    setSubmitting(false); 
                    navigate("/category")   
                    notification.success({message:res.data.message})  

                })
                .catch((err)=>console.log(err))

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
              {errors.title && touched.title && errors.title}
              <input
                
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder="Add Description"
                className="form-control m-3 p-4 border-black"
              />
              {errors.description && touched.description && errors.description}
              <button className="form-control m-3 border-black submit_btn" type="submit" disabled={isSubmitting}>
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

export default Addcategory;
