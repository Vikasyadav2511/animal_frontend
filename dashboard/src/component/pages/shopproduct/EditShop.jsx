import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../util/api";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditShop = () => {
  const navigate = useNavigate();
  const { edit_id } = useParams();
  const [img, setImg] = useState(null);
  const [data, setData] = useState({});
  const [category, setcategory] = useState([]);

  const handleFileChange = (event) => {
    setImg(event.target.files[0]);
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-shop_product/${edit_id}`)
      .then((res) => {
        console.log("catgeory", res.data.data);
        // setcategory(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [edit_id]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-categories`)
      .then((res) => {
        console.log("catgeoryyyyy", res.data.data);
        setcategory(res.data.data);
        // setData(res.data.data)
      })
      .catch((err) => console.log(err));
  }, [edit_id]);

  return (
    <div>
      <div className="mainnews">
        <div className="Addnews1">
          <h1>Edit Shop</h1>
          <Formik
            initialValues={{
              title: data.title,
              shop_name: data.shop_name,
              shop_cart: data.shop_cart,
              category: data.category,
              price: data.price,
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

              if (img) {
                formData.append("image", img);
              }

              axios
                .put(`${baseUrl}/update_ShopProduct/${edit_id}`, formData)
                .then((res) => {
                  console.log("update_ShopProduct", res.data.data);
                  setSubmitting(false);
                  navigate("/shopproduct");
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

                {/* <select className='w-100'>
            type="select"
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            placeholder="Add category"
            className="form-control m-3 p-3 border-black"
            </select>
         <p className='text-red-500'> {errors.category && touched.category && errors.category}</p>

         {
          category&&
          category.map((elem,ind)=>{
            return(
            
                <>
                <option value="category_id">hello1</option>
                <option value="category_id">hello2</option>
                <option value="category_id">hello3</option>
                </>
          
            )
          })
         } */}

                <select
                  name="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                  className="form-control m-3 p-3 border-black"
                >
                  {category &&
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
                  name="image"
                  onClick={handleFileChange}
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
    </div>
  );
};

export default EditShop;
