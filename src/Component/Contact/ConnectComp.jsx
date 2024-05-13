import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import image from '../Images/Contact-images/317149987_554888346458546_9080782302942564895_n.jpg'
import image1 from '../Images/Contact-images/317395952_524246949752198_2641461055554019605_n.jpg'
import image2 from '../Images/Contact-images/317456186_699161371926687_342784317535010160_n.jpg'
import image3 from '../Images/Contact-images/317545405_666826871761326_157122662012011717_n.jpg'


const connectData =[

    {
        id:1,
        image:`${image}`

    },

    {
        id:2,
        image:`${image1}`

    },

    {
        id:3,
        image:`${image2}`

    },
    {
        id:4,
        image:`${image3}`

    },
]

const ConnectComp = () => {
  return (
        <div className='Connect mt-20'>

            <div className='with'>
            <h1 className='text-5xl	'>Connect with us</h1>
            <p className='py-2'>Follow @savepetscms on Instagram</p>
            </div>
        <Container className='mt-20'>
            <Row>
                {
                    connectData&&
                    connectData.map((elem,ind)=>{
                        return(
                            <Col md={3} key={ind}>
                
                            <div className='box'>
                                <img src={elem.image} style={{objectFit:"cover",borderRadius:'5px'}} alt="" />
                                <div className='box1'>

                                </div>
                            </div>
            
                            </Col>
                        )
                    })
                }
               
            </Row>
        </Container>
    </div>
  )
}

export default ConnectComp