import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const missionData = [
  {
    id: 1,
    description:
      "We identify the problems facing animal rescue volunteers and shelters and help to solve them physically and by providing information.",
  },
];

const MissionComp = () => {
  return (
    <div>
      <Container>
        <Row>
          {missionData &&
            missionData.map((elem, ind) => {
              return (
                <Col md={12} key={ind}>
                  <div className="Mission">
                    <Card
                      style={{
                        width: "100%",
                        height: "80vh",
                        margin:"70px 0px",
                        backgroundColor: "rgb(215,207,200)",
                      }}
                    >
                      <h5 style={{color:''}} className="my-5 fs-4">Our Mission</h5>
                      <Card.Body>
                        <Card.Text style={{ width: "75%", margin: "auto" }}>
                          <h1 style={{ fontSize: "45px" }}>
                            {elem.description}
                          </h1>
                        </Card.Text>

                        <Button className="btn2 px-3 my-4">Donate</Button>
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

export default MissionComp;
