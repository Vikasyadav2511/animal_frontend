import React, { useEffect } from 'react'
import About1Comp from '../About/About1Comp'
import About2Comp from './About2Comp'
import StoryComp from './StoryComp'
import MissionComp from './MissionComp'


const AboutComp = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
    <About1Comp/>
    <About2Comp/>
    <StoryComp/>
    <MissionComp/>
    </>
  )
}

export default AboutComp