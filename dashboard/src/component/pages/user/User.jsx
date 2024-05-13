import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { baseUrl } from '../../util/api';

const User = () => {

  const [user,setUser] = useState([]);

    const getData =(val='')=>{
      axios.get(`${baseUrl}/get-users/`)
      .then((res)=>{
        console.log(res.data.dat)
        setUser(res.data.data)
      })
      .catch((err)=>console.log(err))
    }

      const searchHandle  =(e)=>{
        getData(e.target.value)
      }
  useEffect(()=>{
    getData()
  })
  return (
    <div>

          <div>
          <input type="text" placeholder="Search " className="usersearchinp" onChange={searchHandle}/>
          </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Email</th>
            <th>contact</th>
          
          </tr>
          </thead>
          <tbody>
            {
              user&&
              user.map((elem,ind)=>{

                return(
                  <tr>
                    <td>{++ind}</td>
                  <td>{elem.firstName}</td>            
                  <td>{elem.lastName}</td>            
                  <td>{elem.email}</td>            
                  <td>{elem.contact}</td>            
                            
                         
                </tr>
                )
              })
            }
            
          </tbody>
      </Table>
    </div>
  )
}

export default User