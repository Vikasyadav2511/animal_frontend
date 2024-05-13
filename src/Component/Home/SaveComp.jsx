import React, { useState } from "react";
import image from "../Images/save/blog-6-1024x608.jpg";
import image1 from "../Images/save/home-7.jpg";
import image2 from "../Images/save/home-8.jpg";
import { FaTriangleExclamation } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { Button, Row, Col } from "react-bootstrap";

const SaveComp = () => {
  const [price,setPrice] =useState("10")
  const changePrice=(p)=>{
    let newPrice
    if(p==="10"){
      newPrice="10"
    }else if(p==="20"){
      newPrice="20"
    }else if(p==="30"){
      newPrice="30"
    }else if(p==="40"){
      newPrice="40"
    }else if(p==="50"){
      newPrice="50"
    }
    else if(p===''){
      newPrice=''
    }
    setPrice(newPrice)
  }
  const onChangeHandler =(e)=>{
    console.log(e.target.value)
    setPrice(e.target.value)
  }
  return (
    <div className="care">
      <div className="Donate">
        <p>DONATE</p>
        <h2 className="text-5xl">Help to Save Crispy</h2>
        <p className="py-3">
          We need your help to save Crispy as she needs an expencive surgery.
        </p>

        <img src={image} alt="" className="mx-auto" />

        <hr />
        <div className="text-left py-4">
          {" "}
          <span className="font-semibold text-4xl">$2,350 </span>{" "}
          <span>of $10,000 raised</span>
        </div>
        <div className="progressbar">
          <div className="bar"></div>
        </div>

        <div className="notice mt-5">
          <p className="text-left p-2 px-3">
            {" "}
            <span className="font-semibold">Notice</span>: Test mode is enabled.
            While in test mode no live donations are processed.
          </p>
          <div className="caution">
            <FaTriangleExclamation className="text-white" />
          </div>
        </div>

        <div className="enter mt-5 px-3 rounded">
          <span className="doll">
            <BiDollar />
          </span>{" "}
          <input onChange={onChangeHandler} value={price} type="text" placeholder="enter amount" />
        </div>

        <div className="mt-3 d-flex flex-wrap justify-between p-2">
          <div onClick={()=>changePrice("10")} className="div mt-2">
            <p className="py-2 text-white ">$10.00</p>
          </div>

          <div onClick={()=>changePrice("20")} className="div">
            <p className="py-2 text-white ">$20.00</p>
          </div>

          <div onClick={()=>changePrice("30")} className="div ">
            <p className="py-2 text-white ">$30.00</p>
          </div>

          <div onClick={()=>changePrice("40")} className="div mt-2">
            <p className="py-2 text-white ">$40.00</p>
          </div>

          <div onClick={()=>changePrice("50")} className="div">
            <p className="py-2 text-white ">$50.00</p>
          </div>

          <div onClick={()=>changePrice("")} className="div ">
            <p className="py-2 text-white ">Custom Amount</p>
          </div>
        </div>

        <Button className="btnd1">Donate Now</Button>
      </div>

      <div className="mt-20">
        <Row>
          <Col md={6}>
            <div className="seat">
              <img src={image1} alt="" />
            </div>
          </Col>

          <Col md={6}>
            <div className="mt-10">
              <p>YOU CAN HELP</p>
              <h2 className="text-4xl">Seat on the bus</h2>
              <p className="py-3">
                Did you know you can help one dog take the ride of their life{" "}
                <br /> to freedom for just $25? You can buy a seat on the bus
                here!
              </p>

              <Button className="seatbtn">Buy a seat on the bus</Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <div className="mt-10">
              <p>VOLUNTEER</p>
              <h2 className="text-4xl">Join Our Foster Team!</h2>
              <p className="py-3">
                Join our foster team today and help us save more lives. Read{" "}
                <br /> more about our foster program here.
              </p>

              <Button className="seatbtn1">Join us</Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="seat">
              <img src={image2} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SaveComp;
