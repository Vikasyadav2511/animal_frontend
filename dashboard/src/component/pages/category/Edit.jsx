import React, { useEffect, useState } from "react";
import { baseUrl } from '../../util/api';
import axios from 'axios';
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import "./category.css";

const Edit = () => {
  const navigate= useNavigate()
  const {category_id} = useParams();
  const [data,setData] = useState({});
 
    useEffect(()=>{
        axios.get(`${baseUrl}/get-category/${category_id}`)
        .then((res)=>{
            console.log('singleeee',res.data.data)
            setData(res.data.data)
        })
        .catch((err)=>console.log(err))
    },[category_id])
  
  return (
    
    <div className="Addcategory">
        
      <div className="category p-3 h-16">
      <h3 className="pb-4">EDIT PAGE</h3>
        <Formik
          initialValues={{
            title: data.title,
            description: data.description,
          }}
          enableReinitialize={true}
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
            axios.put(`${baseUrl}/update-categories/${category_id}`,values)
                .then((res)=>{
                    console.log('updatecat',res.data.data)
                    setSubmitting(false); 
                    navigate("/category")              
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
  );
};

export default Edit;
