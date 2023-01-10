import React from 'react'
import envelope from '../assets/envelope.png';
import github from '../assets/github-blue.png';
import linkedin from '../assets/linkedin.png';
import phone from '../assets/phone.png';

import {Container, Row, Col} from 'react-bootstrap';

const Contact = () => {
    return (
        
        <Container className="contact-general">
            <Row className="justify-content-center">
                

                        <Col xs={6}>
                        <div className="contact-container">
                        <div className="contact-icon">
                        <img src={envelope} alt='mailTo' width="34" height="34" />
                        </div>              

                        <div className="contact-text">
                        <p>theislanglands@gmail.com</p>
                        </div>
                        </div>
                        </Col>

                
            </Row>
            <Row className="justify-content-center">
              
                        <Col xs={6}>
                        <div className="contact-container">
                        <div className="contact-icon">
                            <img src={phone} alt='phone' width="34" height="34"/>
                        </div>              
                        <div className="contact-text">
                        <p>(+45)&nbsp;22&nbsp;12&nbsp;06&nbsp;27</p>
                        </div>
                        </div>
                        </Col>
               
            </Row>

            <Row className="justify-content-center">
  
                <Col xs={6}>
                <div className="contact-container">
                <div className="contact-icon">
                    <img src={github} alt='github' width="34" height="34"/>
                </div>              
                <div className="contact-text">
                    <p>GitHub</p>
                </div>
                </div>
                </Col>

            </Row>

            <Row className="justify-content-center">
                <Col xs={6}>
                    <div className="contact-container">
                        <div className="contact-icon">
                            <img src={linkedin} alt='linkedin' width="34" height="34"/>
                        </div>              
                        <div className="contact-text">
                        <p>LinkedIn</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact


/*
      
            

            
        </Container>
        </div>

*/