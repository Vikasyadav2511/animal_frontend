import React, { useEffect, useState } from "react";
import { baseUrl } from "../../util/api";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Modal, notification } from "antd";

const Category = () => {
  const [data, Setdata] = useState([]);
  const navigate = useNavigate();
  const [delete1, setDelete1] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const edithandler = (id) => {
    console.log(id);
    navigate(`/editcat/${id}`);
  };

  const deletehandler = (id) => {
    console.log(id);

    axios
      .delete(`${baseUrl}/Delete-category/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setDelete1(id);
        notification.success({message:res.data.message})
      })
      .catch((err) => console.log(err));
  };

  const getData = (val = "") => {
    axios
      .get(`${baseUrl}/get-categories?search=${val}`)
      .then((res) => {
        console.log("categoriessss", res.data.data);
      
        Setdata(res.data.data);
        // notification.success({message:res.data.message})  
      })
      .catch((err) => console.log(err));
  };

  const searcHand = (e) => {
    getData(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [delete1,]);

  const addCate = () => {
    navigate("/add-category");
  };

  return (
    <div>
      <h3 className="head">CATEGORY</h3>

      <div className="d-flex justify-between">
        <input
          type="text"
          placeholder="Search "
          onChange={searcHand}
          className="searchinp"
        />
        <Button onClick={addCate} className="m-2 addbtnn ">
          Add category +
        </Button>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem, ind) => {
              return (
                <tr className="py-3">
                  <td>{++ind}</td>
                  <td>{elem.title}</td>
                  <td>{elem.description}</td>
                  <td>
                    <div className="d-flex justify-center">
                      <div className="feditbtn">
                        <button onClick={() => edithandler(elem._id)}>
                          <FaEdit />
                        </button>{" "}
                        &nbsp; &nbsp;
                      </div>

                      <div className="feditbtn">
                        <button onClick={showModal}>
                          <MdDelete />
                        </button>
                      </div>
                      <Modal onCancel={handleCancel} open={isModalOpen}>
                        <p>
                          Once you delete the category, all the product related
                          to the category will be deleted, Are you sure want to
                          delete the category?
                        </p>
                        <button
                          className="my-2 p-2 rounded-md bg-blue-600 text-white"
                          onClick={() => {
                            deletehandler(elem._id)
                            handleCancel()
                          }}
                        >
                          Delete
                        </button>
                      </Modal>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Category;
