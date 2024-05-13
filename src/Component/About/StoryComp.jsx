import React from "react";
import image1 from "../Images/AboutImages/about-6.jpg";
import image2 from "../Images/AboutImages/about-7.jpg";
import { Container, Row, Col, } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const storyData = [
  {
    id: 1,
    image: `${image1}`,
    description:
      "While many organizations, including Greater Good Charities, focus resources on helping people and pets fleeing Ukraine, there is a desperate need to provide emergency relief to those remaining in Western Ukraine. While pet food and supplies will be needed long term, the most urgent need is cash donations to quickly purchase products in neighboring countries to ship in. With Kormotech’s presence in the country and its partner’s ability to source donations, Save Pets of Ukraine is uniquely positioned to help those remaining in Ukraine.",
  },

  {
    id: 2,
    image: `${image2}`,
    description:
      "Patients were stratified into a younger (under 60) group and an older (over 60) group, and symptoms were clustered into broader clinical syndromes associated with COVID-19 and classified into case definitions, including ‘Cerebrovascular event (abnormalities of the blood flow in the brain)’, ‘Altered Mental Status’, ‘Peripheral Neurology’, and ‘Encephalitis’. Members of these professional organizations identified patients exhibiting these syndromes and a swift 5-minute clinical dataset was completed. It contained four critical components.",
  },

  {
    id: 3,
    description:
      "Animals are suffering in Ukraine, with hundreds of thousands of dogs and cats living on the war-torn streets without their families, with rescue centres also bursting at the seams. Save Pet of Ukraine is a rallying cry for pet lovers across the UK to provide the desperate food and supplies required to keep these animals alive.",
  },
];

const StoryComp = () => {
  return (
    <div>
      <div>
        <h1>Our Story</h1>
      </div>

      <Container>
        <Row>
          {storyData &&
            storyData.map((elem, ind) => {
              return (
                <Col md={12} key={ind}>
                  <div>
                    <Card style={{ width: "100%", border:'none' }}>
                      <Card.Body>
                        <Card.Text>
                        <p>{elem.description}</p>
                        </Card.Text>
                      <Card.Img variant="top" src={elem.image} />
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

export default StoryComp;
