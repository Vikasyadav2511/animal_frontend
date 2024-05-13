import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../util.js";
import { Container } from "@mui/material";
import { Card, Col, Row,Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


const CompanionComp = () => {
  const [companion, setCompanion] = useState([]);
  const [path, setPath] = useState("");
  const [data, setData] = useState(6);
  const [dataFetched, setDataFetched] = useState(false); 
  // const [single,setSingle] = useState({});
  const { single_id } = useParams();
  const navigate = useNavigate();


  const load =()=>{
        setData(data+3)
        
  }
  useEffect(() => {
    axios
      .get(`${baseUrl}/get-companions`)
      .then((res) => {
        console.log(res.data.data);
        setCompanion(res.data.data);
        setPath(res.data.filepath);
        setDataFetched(true);
        // setSingle(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const onclickHandler =(id)=>{
    console.log("idddd",id)
    navigate(`/single-page/${id}`)
  }
  return (
    <div>
      <div className="mt-20">
        <h1>Are you looking for a new companion?</h1>
        <p className="text-center py-7">
          Our available pets list is updated daily. Please read our adoption{" "}
          <br /> policies as well as each pet’s profile before applying.
        </p>
      </div>

      <Container>
        <Row>
          {companion &&
            companion.slice(0,data).map((elem, ind) => {
              return (
                <Col md={4} key={ind}>
                  <div onClick={()=>onclickHandler(elem._id)}>
                    <Card className="mt-5 text-left p-4 " style={{ width: "100%", border:"2px solid grey",boxShadow:"1px 3px 7px grey", height:"580px" }}>
                      <Card.Img variant="top" src={path + '/' + elem.image} alt="image not found" className="h-[350px] object-fill"/>
                      <Card.Body>
                        <Card.Title ><h4 className="text-slate-500 hover:text-yellow-600">{elem.title}</h4></Card.Title>
                        <Card.Title><h6>{elem.breed}</h6></Card.Title>
                        <Card.Text>
                          <p>{elem.description}</p>
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </div>
                  
                </Col>
                
              );
            })}
        </Row>
        <Button onClick={load} disabled={!dataFetched || data >= companion.length} variant="primary" className=" petbtn	mt-10 p-3 ">Meet all our pets</Button>
      </Container>
    </div>
  );
};

export default CompanionComp;
