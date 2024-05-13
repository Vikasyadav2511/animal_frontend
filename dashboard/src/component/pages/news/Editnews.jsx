import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../util/api';
import axios from 'axios';
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

const Editnews = () => {
    const navigate = useNavigate();
    const { news_id } = useParams();
    const [data, setData] = useState({});
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        axios.get(`${baseUrl}/getNew/${news_id}`)
            .then((res) => {
                console.log('editnewssss', res.data.data);
                setData(res.data.data);
            })
            .catch((err) => console.log(err));
    }, [news_id]);

    const handleFileChange = (event) => {
        setImageFile(event.target.files[0]);
    };


    
    return (
        <div>
            <div className='mainnews'>
                <div className='Addnews1'>
                    <h1>Edit News</h1>
                    <Formik
                        initialValues={{
                            title: data.title,
                            description: data.description,
                            header: data.header,
                            date: data.date,
                            // No initial value for image, as it will be handled differently
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

                            if (!values.header) {
                                errors.header = "Header is required";
                            }

                            if (!values.date) {
                                errors.date = "Date is required";
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // Constructing FormData object
                            const formData = new FormData();
                            formData.append("title", values.title);
                            formData.append("description", values.description);
                            formData.append("header", values.header);
                            formData.append("date", values.date);

                            // Append the image file if it exists
                            if (imageFile) {
                                formData.append("image", imageFile);
                            }

                            // Make the PUT request with FormData
                            axios.put(`${baseUrl}/update-new/${news_id}`, formData)
                                .then((res) => {
                                    console.log('editnews', res.data.data);
                                    setSubmitting(false);
                                    navigate("/news");
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
                                <p className='text-red-700'>
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
                                <p className='text-red-700'>
                                    {errors.description && touched.description && errors.description}
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
                                <p className='text-red-500'>
                                    {errors.header && touched.header && errors.header}
                                </p>

                                <input
                                    type="date"
                                    name="date"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date}
                                    placeholder="Add date"
                                    className="form-control m-3 p-3 border-black"
                                />
                                <p className='text-red-500'>
                                    {errors.date && touched.date && errors.date}
                                </p>

                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleFileChange} // Use the handleFileChange function here
                                    className="form-control m-3 p-3 border-black"
                                />
                                <p className='text-red-500'>
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
        </div>
    );
}

export default Editnews;
