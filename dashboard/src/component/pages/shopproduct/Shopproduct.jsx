import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { baseUrl } from '../../util/api';
import { truncate } from '../../util';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './shopproduct.css'
import { useNavigate } from 'react-router-dom';
import { Modal,notification} from "antd";


const Shopproduct = () => {
  const [shop ,Setshop] = useState([]);
  const [path ,setPath] = useState('');
  const navigate = useNavigate();
  const [delete1,setDelete1] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const AddShopHandler = () =>{
      navigate('/shop_product')
  }

  const editshopHandler = (id) =>{
    console.log('idddddd',id)
    navigate(`/edit/${id}`)
  }

  const deleteHandler = (id) =>{
        console.log(id)
      axios.delete(`${baseUrl}/delete_Shopproduct/${id}`)
      .then((res)=>{
        console.log('deletee',res.data.data)
        setDelete1(id) 
      notification.success({message:res.data.message})
      })
      .catch((err)=>console.log(err))
  }

  const getData = (val='')=>{
    axios.get(`${baseUrl}/get-Shop-products?search=${val}`)
    .then((res)=>{
      console.log(res.data.data)
      Setshop(res.data.data) 
      setPath(res.data.filepath)
    })
    .catch((err)=>console.log(err))
  }

  const searchHandle = (e)=>{
    getData(e.target.value)
  }

  useEffect(()=>{
    getData()
  },[delete1])

  return (
    <div>
      <h3 className="head">shop</h3>
        <div className="d-flex justify-between align-item-center">
          <input type="text" placeholder="Search " className="searchinp" onChange={searchHandle} />
          <Button className=' m-3 addbtnn' onClick={AddShopHandler}>AddShop +</Button>
          </div>
      <div>
        <Table bordered>
          <thead>
              <tr>
                <th className='bg-slate-300'>Sr.no</th>
                <th>title</th>
                <th>shop_name</th>
                <th>shop_cart</th>
                <th>category</th>
                <th>price</th>
                <th>image</th>
                <th>description</th>
                <th>Action</th>

              </tr>
          </thead>

          <tbody>
            {
              shop&&
              shop.map((elem,ind)=>{
                return(
                  <tr key={ind}>
                  <td>{++ind}</td>
                  <td>{elem.title}</td>
                  <td>{elem.shop_name}</td>
                  <td>{elem.shop_cart}</td>
                  <td>{elem.category.title}</td>
                  <td>{elem.price}</td>
                  <td><img src={path + '/' + elem.image} style={{height:"80px"}}  alt="" /></td>
                  <td>{elem.description ? truncate(elem.description,50):''}</td>
                  <td>
                   <div className="d-flex justify-center">
                   <div className='feditbtn'>
                    <button onClick={()=>editshopHandler(elem._id)}><FaEdit /></button> &nbsp;&nbsp; 
                    </div>
                    
                    <div className='feditbtn'>
                    <button onClick={showModal}><MdDelete /></button>
                    </div>
                    <Modal onCancel={handleCancel} open={isModalOpen}>
                        <p>
                          Once you delete the Newscategory, all the product related
                          to the Newscategory will be deleted, Are you sure want to
                          delete the Newcategory?
                        </p>
                        <button
                          className="my-2 p-2 rounded-md bg-blue-600 text-white"
                          onClick={() => {
                            deleteHandler(elem._id)
                            handleCancel()
                          }}
                        >
                          Delete
                        </button>
                      </Modal>
                   </div>
                    
                    </td>

                </tr>
                )
              })
              
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Shopproduct