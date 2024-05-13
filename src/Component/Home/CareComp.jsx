import React from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
// import { Image } from 'react-bootstrap';

const CareComp = () => {

  const navigate = useNavigate();
  const redirecthandle = ()=>{
      navigate('/contacts')
  }
  return (
    <>
        <div className='photo1'>
        <div className='details'>
          <h1 className='fs-1 fw-bold text-light'>Do you care?</h1>
          <h2 className='fs-3 fw-bolder text-light py-4'>We do</h2>
          <p className='fs-4 text-light py-3'>More than 155 pets so far <br />found home with our help this year</p>
          <button className='p-3 invbtn' onClick={redirecthandle}>Get Involved</button>

        </div>
        </div>
       
    </>
  )
}

export default CareComp;