// import { Container } from '@mui/material'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../util";
import { Container, Col, Row ,Card,Button } from "react-bootstrap";
import image from '../Images/news/ad-1.jpg'
import image1 from '../Images/news/ad-2.jpg'
import image2 from '../Images/news/ad-3.jpg'

const NewsComp = () => {
  const [news, setNews] = useState([]);
  const [path, setPath] = useState("");
  const [visible,setVisible] = useState(3);

  const load =()=>{
     const newVisible = visible + 2
     setVisible(Math.min(newVisible , news.length))
}

const isVisibleItem = visible < news.length
  useEffect(() => {
    axios
      .get(`${baseUrl}/get-News`)
      .then((res) => {
        console.log("jhngbfv", res.data.data);
        setNews(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="py-20">
      <h1>News and Happenings</h1>
      <Container>
        <Row>
          <Col md={4}>
            {news &&
              news.slice(0, visible).map((elem, ind) => {
                return (
                  <div className="mt-4">
                    <img src={path + "/" + elem.image} alt="" className="dogimg" />
                  </div>
                );
              })}
          </Col>
          <Col md={5}>
            {news &&
              news.slice(0,visible).map((elem, ind) => {
                return (
                  <div>
                    <Card style={{ width: "100%",border:"none" }} className="mt-3">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body className="text-left">
                        <Button className="Resbtn my-3">{elem.title}</Button>
                        {/* <Card.Text className="bg-amber-500">{elem.title} </Card.Text> */}
                        <Card.Title>
                         <h5 className="text-2xl py-2"> {elem.header} </h5>
                        </Card.Title>
                        <Card.Text className="text-lg text-muted">
                          {elem.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Col>

          <Col md={3}>
          <div className="py-4">
          <img src={image} alt="" className="my-5" />
          <img src={image1} alt="" className="my-5" />
          <img src={image2} alt="" className="my-5" />
          </div>
          </Col>
        </Row>
        {isVisibleItem ? <Button className="allbtn" onClick={load}>All news and happenings</Button> 
         : null}
         
      </Container>
    </div>
  );
};

export default NewsComp;
