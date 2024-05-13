import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../util/api';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { truncate } from '../../util';
import { Modal, notification } from "antd";



const Companion = () => {
  const [companion, setCompanion] = useState([]);
  const navigate =useNavigate();
  const [delete1,setdelete1]= useState();
  const [path ,setPath] = useState('');
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



  const compHandler = () =>{
    navigate('/addcompanion')
  }

  const compeditHandle = (id) =>{
    console.log(id)
    navigate(`/editcomp/${id}`)
  }

  const deleteComphandle =(id) =>{
    console.log(id)
    
    axios.delete(`${baseUrl}/delete-companion/${id}`)
    .then((res)=>{
      console.log(res.data.data)
      setdelete1(id)
      notification.success({message:res.data.message})


    })
    .catch((err)=>console.log(err))
  }

  const getData = (val='')=>{
    axios.get(`${baseUrl}/get-companions?search=${val}`)
    .then((res)=>{
      console.log(res.data.data)
      setCompanion(res.data.data)
      setPath(res.data.filepath)
    })
    .catch((err)=>console.log(err))
  }


  const searcHand = (e)=>{
    getData(e.target.value)
  }

  useEffect(()=>{
    getData()
  },[delete1])
  return (
    <div>
            <h3 className="head">companion</h3>

        <div className='d-flex justify-between mb-3'>
        <input type="text" placeholder="Search " className="searchinp" onChange={searcHand} />

          <Button className="addbtnn" onClick={compHandler}>Add Companion  +</Button>
        </div>
      <Table bordered>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>title</th>
                <th>sex</th>
                <th>Characteristics</th>
                <th>Coatlength</th>
                <th>Good</th>               
                <th>housetrained</th>               
                <th>Health</th>
                <th>age</th>
                <th>size</th>
                <th>description</th>
                <th>breed</th>
                <th>color</th>
                <th>comp_category</th>
                <th>Image</th>
                <th>Action</th>

              </tr>
            </thead>
          {
            companion&&
            companion.map((elem,ind)=>{
                  return(
                    <tbody>
                    <tr>
                      <td>{++ind}</td>
                      <td>{elem.title}</td>
                      <td>{elem.sex}</td>
                      <td>{elem.Characteristics}</td>
                      <td>{elem.Coatlength}</td>
                      <td>{elem.Good}</td>
                      <td>{elem.Health}</td>
                      <td>{elem.housetrained}</td>
                      <td>{elem.age}</td>
                      <td>{elem.size}</td>
                      <td>{elem.description ? truncate(elem.description,20):''}</td>
                      <td>{elem.breed}</td>
                      <td>{elem.color}</td>
                      <td>{elem.comp_category?.title}</td>
                      <td><img src={path + '/' + elem.image} style={{height:"80px"}}  alt="" /></td>
                      <td>
                       <div className="d-flex justify-center">
                       <div className='feditbtn'>
                        <button onClick={()=>compeditHandle(elem._id)}><FaEdit /></button>
                         &nbsp; &nbsp;
                        </div>

                        <div className='feditbtn'>
                        <button onClick={showModal}><MdDelete /></button>
                        </div>

                         <Modal onCancel={handleCancel} open={isModalOpen}>
                        <p>
                          Once you delete the companion, all the product related
                          to the companion will be deleted, Are you sure want to
                          delete the companion?
                        </p>
                        <button
                          className="my-2 p-2 rounded-md bg-blue-600 text-white"
                          onClick={() => {
                            deleteComphandle(elem._id)
                            handleCancel()
                          }}
                        >
                          Delete
                        </button>
                      </Modal>

                       </div>
                      </td>
                     
                    </tr>
                </tbody>
                  )
            })
          }
      </Table>
    </div>
  )
  
}

export default Companion


