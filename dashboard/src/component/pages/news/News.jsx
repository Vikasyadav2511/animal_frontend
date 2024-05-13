import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../util/api';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { truncate } from '../../util';
import './news.css';
import { useNavigate } from 'react-router-dom';
import { Modal, notification } from "antd";



const News = () => {

  const [news,setnews] = useState([]);
  const [path,setPath] = useState('');
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

  const newshandler =()=>{
    navigate('/add-news')
  }

  const newsedithandler = (id) =>{
    console.log('newsss edit',id)
    navigate(`/news/${id}`)
  }

  const newdeletehandler =(id)=>{
    console.log(id)

    axios.delete(`${baseUrl}/delete-news/${id}`)
    .then((res)=>{
      console.log(res.data.data)
      setDelete1(id)
      notification.success({message:res.data.message})
    })
    .catch((err)=>console.log(err))
  }

    const getData = (val='')=>{
      axios.get(`${baseUrl}/get-News?search=${val}`)
      .then((res=>{
        console.log('newsss',res.data.data)
        setnews(res.data.data)
        setPath(res.data.filepath)
      }))
      .catch((err)=>console.log(err))
    }
    
    const searchHandle = (e)=>{
      console.log(e.target.value)
      getData(e.target.value)
    }

  useEffect(()=>{
      getData()
  },[delete1])
  return (
   <>
     <div>
            <h3 className="head">NEWS</h3>
            
            <div className='d-flex justify-between m-3'>
            <input type="text" placeholder="Search " className="searchinp" onChange={searchHandle} />
              <Button onClick={newshandler} className='newsbtnn'>Add News +</Button>
            </div>
        <Table bordered>
          
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Title</th>
              <th>Header</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>

            </tr>
          </thead>
        <tbody>
            {
              news&&
              news.map((elem,ind)=>{
                return(
                  <tr>
                    <td>{++ind}</td>
                    <td>{elem.title}</td>
                    <td>{elem.header}</td>
                    <td >{elem.description ? truncate(elem.description,20):''}</td>
                    <td><img src={path + '/' + elem.image} style={{height:"50px"}} alt="" /></td>
                    <td>
                   <div className="d-flex justify-center1">
                   <div className='feditbtn'>
                      <button onClick={()=>newsedithandler(elem._id)} ><FaEdit /></button> &nbsp; &nbsp;
                      </div>

                     <div className='feditbtn'>
                     <button onClick={showModal}><MdDelete />
                     </button>
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
                            newdeletehandler(elem._id)
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
   </>
  )
}

export default News;