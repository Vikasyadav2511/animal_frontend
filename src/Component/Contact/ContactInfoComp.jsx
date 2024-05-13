import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactInfoComp = () => {
  return (
    <div>

        <Container className='mt-20'>
            <Row>
                <Col md={6}>
                    <div className='map '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.733788102661!2d72.86336325!3d19.1871883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e71360b0c5%3A0x710e8dfe75aca32b!2sChurchgate%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710324339683!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>

                <Col md={6}>
                    <div className='mapinfo  bg-gray-300 '>
                        <div className='pt-20'>
                            <h1>Contact Information</h1>

                            <p className='fs-6'>Down to earth, thorough instruction in yoga <br /> and mindfulness for the benefit of all bodies.</p>
                        </div>
                        <div  className='d-flex justify-around mt-20 px-10 detail'>
                        <div>
                            <h5>Main Office:</h5>
                            <p>27 NW New Vexmont,<br /> Portland, Oregon 97209</p>
                         
                        </div>

                        <div>
                            <h5>Opening Hours</h5>
                                <p>
                                Every day: 9:00 – 22:00 <br /> Sat – Sun: 8:00 – 21:00
                                </p>
                            
                        </div>
                        </div>
                    </div>
                </Col>


            </Row>
        </Container>

    </div>
  )
}

export default ContactInfoComp