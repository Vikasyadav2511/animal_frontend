import React from 'react'
import image1 from '../Images/AboutImages/about-2.jpg'
import image2 from '../Images/AboutImages/about-3.jpg'
import image3 from '../Images/AboutImages/about-4.jpg'
import image4 from '../Images/AboutImages/about-5.jpg'
import { Container,Card,Row,Col } from 'react-bootstrap'


const AboutData = [
    {
        id:1,
        title:"Kindness",
        img:`${image1}`,
        description:"We believe in going above and beyond to give every animal the care and kindness they deserve."
    },

    {
        id:2,
        title:"Empathy",
        img:`${image2}`,
        description:"We believe in going above and beyond to give every animal the care and kindness they deserve."
    },

    {
        id:3,
        title:"Protection",
        img:`${image3}`,
        description:"We believe in going above and beyond to give every animal the care and kindness they deserve."
    },

    {
        id:4,
        title:"Volunter",
        img:`${image4}`,
        description:"We believe in going above and beyond to give every animal the care and kindness they deserve."
    },
]

const About2Comp = () => {
  return (
    <>
    <div className='Ab2'>

    <div>
    <h2 className='py-3'>Our vision is for all animals to live a life <br /> free of cruelty and suffering.</h2>
    </div>

    <Container>
        <Row>
            {
                AboutData &&
                AboutData.map((elem,ind)=>{
                    return (
                        <Col md={3} key={ind}>
                        <div>
                        <Card style={{ width: "100%",border:'none',backgroundColor:'transparent',color:'white' }}>
                          <Card.Img variant="top" style={{width:'95%',borderRadius:'5px'}} src={elem.img} />
                          <Card.Body>
                            <Card.Title className='text-dark'><h2>{elem.title}</h2></Card.Title>
                            <Card.Text>
                              <p className='text-muted'>{elem.description}</p>
                            </Card.Text>                         
                          </Card.Body>
                        </Card>
                        </div>
                        </Col>
                      );
                })

            }
        </Row>
        <hr />
    </Container>

    </div>
    </>
  )
}

export default About2Comp