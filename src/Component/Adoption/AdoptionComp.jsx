import React, { useEffect } from 'react'
import AdoptComp from './AdoptComp'
import LookComp from './LookComp'

const AdoptionComp = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
  return (
    <div>
        <AdoptComp/>
        <LookComp/>
        

    </div>
  )
}

export default AdoptionComp