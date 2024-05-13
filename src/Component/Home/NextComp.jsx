import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import image from "../Images/home-2.jpg";
import image1 from "../Images/home-3.jpg";
import image2 from "../Images/home-4.jpg";
import image3 from "../Images/home-5.jpg";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Adopt",
    img:`${image}`,
    description:
      "visit with Your pets ready for adoption.Come meet your perfect match today!",
      btn:"Meet Pets",
  },
  {
    id: 2,
    title: "Foster",
    img:`${image1}`,
    description:
      "visit with Your pets ready for adoption.Come meet your perfect match today!",
      btn:"Help to Foster",
  },
  {
    id: 3,
    title: "Donate",
    img:`${image2}`,
    description:
      "visit with Your pets ready for adoption.Come meet your perfect match today!",
      btn:"How to Give?",
  },
  {
    id: 4,
    title: "Volunter",
    img:`${image3}`,
    description:
      "visit with Your pets ready for adoption.Come meet your perfect match today!",
      btn:"Welcome!",
  },
];

const NextComp = () => {

  const navigate = useNavigate();
  const redirect =()=>{
        navigate('/Adoption')
  }
  return (
    <div className="section1 py-12 pb-28">
      <div>
        <h2 className="fs-2  text-light py-4">
          Your Next <br /> Best Friend is wating
        </h2>
        <p className="fs-5" style={{color:'#f0a821',marginBottom:'40px'}}>
          We believe that all pets deserve a second chance at a new life. <br />
          It’s not about being perfect, it’s about being perfect for one
          another.
        </p>
      </div>

      <Container>
        <Row>
          {data &&
            data.map((elem, ind) => {
              return (
                <Col md={3} key={ind}>
                <div className="card1">
                <Card style={{ width: "100%",border:'none',backgroundColor:'transparent',color:'white' }}>
                  <Card.Img variant="top" style={{width:'95%',borderRadius:'0px'}} src={elem.img} />
                  <Card.Body>
                    <Card.Title className="fw-bold"><h2>{elem.title}</h2></Card.Title>
                    <Card.Text>
                      <p>{elem.description}</p>
                    </Card.Text>
                    <button onClick={redirect} className="btn1">{elem.btn}</button>
                  </Card.Body>
                </Card>
                </div>
                </Col>
              );
            })}
        </Row>
       
      </Container>
      

      
    </div>
  );
};

export default NextComp;
