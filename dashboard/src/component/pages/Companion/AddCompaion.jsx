import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../util/api";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { FaArrowLeft } from "react-icons/fa";
import { notification } from "antd";


const AddCompaion = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState([]);
  const [img, setImage] = useState(null);


  const  navigatehandler = () =>{
    navigate('/companion')
  }

  

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-categories`)
      .then((res) => {
        console.log("catgeory", res.data.data);
        setcategory(res.data.data);
        // notification.success({message:res.data.message})  

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
        <h1 className="text-white">Add Companion</h1>
        <Formik
          initialValues={{
            title: "",
            sex: "",
            Characteristics: "",
            Coatlength: "",
            Good: "",
            Health: "",
            age: "",
            breed: "",
            color: "",
            size:"",
            comp_category: "",
            description:"",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.title) {
              errors.title = "Title is required";
            }

            if (!values.sex) {
              errors.sex = "sex is required";
            }

            if (!values.Characteristics) {
              errors.Characteristics = "Characteristics is required";
            }

            if (!values.Coatlength) {
              errors.Coatlength = "Coatlength is required";
            }

            if (!values.Good) {
              errors.Good = "Good is required";
            }
            
            if (!values.size) {
              errors.size = "size is required";
            }

            if (!values.description) {
              errors.description = "description is required";
            }

            if (!values.Health) {
              errors.Health = "Health is required";
            }

            if (!values.age) {
              errors.age = "age is required";
            }

            if (!values.housetrained) {
              errors.housetrained = "housetrained is required";
            }

            if (!values.breed) {
              errors.breed = "breed is required";
            }

            if (!values.color) {
              errors.color = "color is required";
            }


            if (!values.comp_category) {
              errors.comp_category = "comp_category is required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {

            const formData = new FormData();

            formData.append("title",values.title)
            formData.append("sex",values.sex)
            formData.append("Characteristics",values.Characteristics)
            formData.append("Coatlength",values.Coatlength)
            formData.append("Good",values.Good)
            formData.append("housetrained",values.housetrained)
            formData.append("Health",values.Health)
            formData.append("age",values.age)
            formData.append("size",values.size)
            formData.append("description",values.description)
            formData.append("breed",values.breed)
            formData.append("color",values.color)
            formData.append("comp_category",values.comp_category)
            formData.append("image", img);

           
            axios
              .post(`${baseUrl}/add-companion`, formData)
              .then((res) => {
                console.log("add-companion", res.data.data);
                setSubmitting(false);
                navigate("/companion");
                notification.success({message:res.data.message})  

                console.log("Hii");
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
            /* and other sizeies */
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
                name="sex"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sex}
                placeholder="Add sex"
                className="form-control m-3 p-4 border-black"
              />
              <p className="text-red-700">
                {errors.sex && touched.sex && errors.sex}
              </p>

              <input
                type="text"
                name="Characteristics"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Characteristics}
                placeholder="Add Characteristics"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {errors.Characteristics &&
                  touched.Characteristics &&
                  errors.Characteristics}
              </p>

              
              <input
                type="text"
                name="housetrained"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.housetrained}
                placeholder="Add housetrained"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {errors.housetrained &&
                  touched.housetrained &&
                  errors.housetrained}
              </p>


              <input
                type="text"
                name="size"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.size}
                placeholder="Add size"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {errors.size &&
                  touched.size &&
                  errors.size}
              </p>


              <input
                type="text"
                name="Health"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Health}
                placeholder="Add Health"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                {errors.Health &&
                  touched.Health &&
                  errors.Health}
              </p>

              <input
                type="text"
                name="Coatlength"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Coatlength}
                placeholder="Add Coatlength"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                
                {errors.Coatlength && touched.Coatlength && errors.Coatlength}
              </p>

              <select
                name="comp_category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comp_category}
                className="form-control m-3 p-3 border-black"
              >
                <option value="">Select category</option>
                {category &&
                  category.map((elem, ind) => {
                    return (
                      <option key={elem._id} value={elem._id}>
                        {elem.title}
                      </option>
                    );
                  })}
              </select>

              <input
                type="text"
                name="Good"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Good}
                placeholder="Add Good"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                
                {errors.Good && touched.Good && errors.Good}
              </p>

              <input
                type="text"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                placeholder="Add age"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                
                {errors.age && touched.age && errors.age}
              </p>

              <input
                type="text"
                name="breed"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.breed}
                placeholder="Add breed"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                
                {errors.breed && touched.breed && errors.breed}
              </p>

              <input
                type="text"
                name="color"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.color}
                placeholder="Add color"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                
                {errors.color && touched.color && errors.color}
              </p>

              <input
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder="Add description"
                className="form-control m-3 p-3 border-black"
              />
              <p className="text-red-500">
                
                {errors.description && touched.description && errors.description}
              </p>

              <input
          type="file"
          name="image"
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

export default AddCompaion;
