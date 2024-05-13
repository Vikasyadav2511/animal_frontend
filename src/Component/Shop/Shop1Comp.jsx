import React from 'react'
import BreadComp from '../BreadCrumb/BreadComp';
import './Shop.css'

const Shop1Comp = () => {
  return (
    <div className='Shop1 text-dark'>
        <BreadComp  title="Shop" crumb='Shop' />
    </div>
  )
}

export default Shop1Comp