import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { baseUrl } from "../util";
import {useNavigate} from 'react-router-dom' 
// import Card from 'react-bootstrap/Card';

const Shop2Comp = () => {
  const [shop, setShop] = useState([]);
  const [path, setPath] = useState("");
  const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${baseUrl}/get-Shop-products`)
        .then((res)=>{
            console.log(res.data.data)
            setShop(res.data.data)
            setPath(res.data.filepath)
        })
        .catch((err)=>{
                console.log(err)
              
        })
    },[])

    const onclickHandler = (id)=>{
      console.log("iddd",id)
        navigate(`/singleshop-page/${id}`)
    }

  return (
    <>
      <Container className="pt-5">
      <Row>
        {shop &&
          shop.map((elem, ind) => {
            return (
              
                  <Col md={4}>
                    <div onClick={()=>onclickHandler(elem._id)}>
                      <Card style={{ width: "100%" ,margin:'10px' }} className="overflow-hidden">
                        <Card.Img variant="top" className="shopimg" src={path + "/" + elem.image} />
                        <Card.Body>
                        <Button  className= " w-75 p-3 shopbtn1">{elem.shop_cart}</Button>
                          {/* <Card.Title></Card.Title> */}
                          <Card.Text className="fs-5">
                            {elem.title}
                          </Card.Text>
                          <div className="d-flex justify-between px-4">
                                <div>
                                <Card.Text className="">
                            {elem.shop_name}
                          </Card.Text>
                                </div>
                          <div>
                            <p>{elem.price}</p>
                          </div>
                          </div>
                          
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
               
             
            );
          })}
           </Row>
      </Container>
    </>
  );
};

export default Shop2Comp;
