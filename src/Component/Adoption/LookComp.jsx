import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";
import Card from "react-bootstrap/Card";
import image from "../Images/Adopt/adoption-2.jpg";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import { baseUrl } from "../util";
import { useNavigate } from "react-router-dom";

const LookComp = () => {
  const [value, setValue] = useState("1");
  const [look, setLook] = useState([]);
  const [path, setPath] = useState("");
  const navigate = useNavigate();

  //console.log("ccccc",look)

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-Companions`)
      .then((res) => {
        console.log("alldata",res.data.data);
        setLook(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const clickHand = (id) => {
    console.log("id", id);
    navigate(`/single-page/${id}`);
  };

  return (
    <div className="adopt1">
      <Container>
        <div className="mt-20">
          <h1>Are you looking for a new companion?</h1>
          <p className="text-center py-7">
            Our available pets list is updated daily. Please read our adoption
            <br /> policies as well as each pet’s profile before applying.
          </p>
        </div>
        <Row className="mt-5 ">
          <Col md={3}>
            <div className="search1 rounded">
              <h6>Search</h6>
              <input
                type="text"
                className="w-36 h-12 border rounded"
                placeholder="Search"
              />
              <Button className="h-12 searchbtn">
                <CiSearch />
              </Button>
            </div>

            <div className="newdiv h-96 w-65 rounded border mt-5">
              <p className="Home">
                <RiHome2Line />
              </p>
              <p className="text-xl text-white">
                The best way to help <br />
                us and our precious <br /> tails is to donate!
              </p>
              <Button className="btncomp">Donate Now</Button>
            </div>

            <div>
              <Card style={{ width: "16.4rem" }} className="mt-5">
                <Card.Img variant="top" src={image} />
                <Card.Body className="bg-amber-500">
                  <Card.Title className="fs-3">
                    Planning to <br /> Adopt a Pet?
                  </Card.Title>
                  <Card.Text>
                    Help make the <br /> transition, as smooth as <br />{" "}
                    possible.
                  </Card.Text>
                  <Button className="my-3 py-2 lbtn">Learn More</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={9}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    style={{ marginLeft: "50%" }}
                  >
                    <Tab label="All Pets" value="1" />
                    <Tab label="Dogs" value="2" />
                    <Tab label="Cats" value="3" />
                    <Tab label="Other Animals" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Row>
                    {look.map((elem, ind) => (
                      <Col md={4} key={elem._id}>
                        <div>
                          <Card
                            onClick={() => clickHand(elem._id)}
                            style={{ width: "100%", padding: "18px", marginBottom: '20px' }}
                          >
                            <Card.Img
                              variant="top"
                              src={`${path}/${elem.image}`}
                            />
                            <Card.Body className="text-left">
                              <Card.Title>
                                <h4>{elem.title}</h4>
                              </Card.Title>
                              <Card.Text>{elem.breed}</Card.Text>
                              <Card.Text className="fs-6">
                                {elem.description}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </TabPanel>
                <TabPanel value="2">
                  <Row>
                    {look
                      .filter((e) => e.comp_category?.title === "Dog")
                      .map((elem, ind) => (
                        <Col md={4} key={elem._id}>
                          <div>
                            <Card style={{ width: "100%", padding: "18px" }}>
                              <Card.Img
                                variant="top"
                                src={`${path}/${elem.image}`}
                              />
                              <Card.Body className="text-left">
                                <Card.Title>
                                  <h4>{elem.title}</h4>
                                </Card.Title>
                                <Card.Title>{elem.breed}</Card.Title>
                                <Card.Text>{elem.description}</Card.Text>
                              </Card.Body>
                            </Card>
                          </div>
                        </Col>
                      ))}
                  </Row>
                </TabPanel>
                <TabPanel value="3">
                  <Row>
                    {look
                      .filter((e) => e.comp_category?.title === "Cat")
                      .map((elem, ind) => (
                        <Col md={4} key={elem._id}>
                          <div>
                            <Card style={{ width: "100%", padding: "18px" }}>
                              <Card.Img
                                variant="top"
                                src={`${path}/${elem.image}`}
                              />
                              <Card.Body className="text-left">
                                <Card.Title>
                                  <h4>{elem?.title}</h4>
                                </Card.Title>
                                <Card.Title>{elem.breed}</Card.Title>
                                <Card.Text>{elem.description}</Card.Text>
                              </Card.Body>
                            </Card>
                          </div>
                        </Col>
                      ))}
                  </Row>
                </TabPanel>
                <TabPanel value="4">
                  <Row>
                    {look
                      .filter(
                        (e) => e.comp_category?.title === "Other Animal"

                      )
                      .map((elem, ind) => (
                        <Col md={4} key={elem._id}>
                          <div>
                            <Card style={{ width: "100%", padding: "18px" }}>
                              <Card.Img
                                variant="top"
                                src={`${path}/${elem.image}`}
                              />
                              <Card.Body className="text-left">
                                <Card.Title>
                                  <h4>{elem.title}</h4>
                                </Card.Title>
                                <Card.Title>{elem.breed}</Card.Title>
                                <Card.Text>{elem.description}</Card.Text>
                              </Card.Body>
                            </Card>
                          </div>
                        </Col>
                      ))}
                  </Row>{" "}
                </TabPanel>
              </TabContext>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LookComp;
