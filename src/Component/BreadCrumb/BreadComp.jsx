import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';


const BreadComp = ({title,crumb}) => {
  return (
   <div>
     <Breadcrumb>
      <Breadcrumb.Item href="#">
        <Link to="/" className='yellow'>Home</Link>
        
      </Breadcrumb.Item>
      <Breadcrumb.Item active className='text-white' >{crumb}</Breadcrumb.Item>
    </Breadcrumb>
    <h1 className='text-white'>{title}</h1>
   </div>
  )
}

export default BreadComp