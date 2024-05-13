import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../util/api";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { notification } from "antd";


const AddShop = () => {
  const navigate = useNavigate();
  const [img, setImage] = useState(null);
  const [category, setcategory] = useState([]);

  const  navigatehandler =()=>{
    navigate('/shopproduct')
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-categories`)
      .then((res) => {
        console.log("catgeory", res.data.data);
        setcategory(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>

      <div className="pbtn flex justify-center items-center">
        <button className="backbtn" onClick={navigatehandler}><FaArrowLeft /></button>
        </div>
    <div className="mainnews">
      <div className="Addnews1">
        <h1 className="text-white">AddShop</h1>
        <Formik
          initialValues={{
            title: "",
            shop_name: "",
            shop_cart: "",
            category: "",
            price: "",
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

            if (!values.shop_name) {
              errors.shop_name = "shop_name is required";
            }

            if (!values.shop_cart) {
              errors.shop_cart = "shop_cart is required";
            }

            if (!values.category) {
              errors.category = "category is required";
            }

            if (!values.price) {
              errors.price = "price is required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const formData = new FormData();

            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("shop_name", values.shop_name);
            formData.append("shop_cart", values.shop_cart);
            formData.append("category", values.category);
            formData.append("price", values.price);
            formData.append("image", img);
            axios
              .post(`${baseUrl}/add_product`, formData)
              .then((res) => {
                console.log("add_product", res.data.data);
                setSubmitting(false);
                navigate("/shopproduct");
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
                name="shop_cart"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.shop_cart}
                placeholder="Add shop_cart"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {errors.shop_cart && touched.shop_cart && errors.shop_cart}
              </p>

              <input
                type="text"
                name="shop_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.shop_name}
                placeholder="Add shop_name"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {" "}
                {errors.shop_name && touched.shop_name && errors.shop_name}
              </p>


              <select
                type="select"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                placeholder=" Add category"
                className="form-control m-3 p-3 border-black"
              >
                <option value="">Select category</option>
                
                {
                category&&
                category.map((elem, ind) => (
                 <>
                     <option key={ind} value={elem.category_id}>
                    {elem.category_name}
                  </option>
                  <option value={elem._id}>{elem.title}</option>
                 </>
                  
                ))}
              </select>

              <input
                type="text"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                placeholder="Add price"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {" "}
                {errors.price && touched.price && errors.price}
              </p>

              <input
                type="file"
                name=""
                onChange={(e) => setImage(e.target.files[0])}
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
                className="form-control m-3 border-black AddShop_btn"
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

export default AddShop;
