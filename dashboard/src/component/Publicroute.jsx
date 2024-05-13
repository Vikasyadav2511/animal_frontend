import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Publicroute = () => {
  const auth = localStorage.getItem('token')

  return (
    <div>
      {
        !auth ? <Outlet/> : <Navigate to= '/'/>
      }
    </div>
  )
}

export default Publicroute; 