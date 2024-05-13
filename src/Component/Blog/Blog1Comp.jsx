import React from 'react';
import './blog.css';
import BreadComp from '../BreadCrumb/BreadComp';

const Blog1Comp = () => {
  return (
    <div className='Blog'>
            <BreadComp title="Blog Page" crumb="Blog page"/>
    </div>
  )
}

export default Blog1Comp;