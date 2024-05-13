import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../util";
import { Card, Col, Container, Row } from "react-bootstrap";

const Blog2COmp = () => {
  const [blog, setBlog] = useState([]);
  const [path, setPath] = useState();

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-News`)
      .then((res) => {
        console.log(res.data.data);
        setBlog(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="my-5">
      <Container>
        <Row>
          {blog &&
            blog.slice(0,6).map((elem, ind) => {
              return (
                <Col md={4} key={ind} className="my-2">
                  <div>
                    <Card style={{ width: "100%"}} className="text-left border-none ">
                      <Card.Img variant="top" src={path + '/' + elem.image} />
                      <Card.Body>
                        <Card.Title><p className="blog"> {elem.title} </p></Card.Title>
                        <Card.Text>
                          {elem.header}
                        </Card.Text>
                        <Card.Text>
                           <span>bycmmaster</span>{elem.date}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
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

export default Blog2COmp;
