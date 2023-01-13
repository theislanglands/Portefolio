import React from 'react'
import envelope from '../assets/envelope.png';
import github from '../assets/github-blue.png';
import linkedin from '../assets/linkedin.png';
import phone from '../assets/phone.png';

import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>

            <div className='Content-header'>
                <p>Get in touch...</p>
            </div>

            <div className="contact-general">
            <Row className="justify-content-center"> 
                <Col xs={6}>
                    <div className="contact-container">
                        <div className="contact-icon">
                            <img src={envelope} alt='mailTo'/>
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
                            <img src={phone} alt='phone' />
                        </div>
                        <div className="contact-text">
                            <p>(+45)&nbsp;22&nbsp;12&nbsp;06&nbsp;27</p>
                        </div>
                    </div>
                </Col>

            </Row>

            <Row className="justify-content-center">

                <Col xs={6}>
                <a href="https://github.com/theislanglands" target="_blank" rel="noreferrer">
                    <div className="contact-container">
                            <div className="contact-icon">
                                <img src={github} alt='github' />
                            </div>
                            <div className="contact-text">
                                <p>GitHub</p>
                            </div>     
                    </div>
                    </a>
                </Col>

            </Row>

            <Row className="justify-content-center">
                <Col xs={6}>
                <a href="https://www.linkedin.com/in/theis-langlands-203a7545/" target="_blank" rel="noreferrer">

                    <div className="contact-container">
                        <div className="contact-icon">
                            <a>
                            <img src={linkedin} alt='linkedin' />
                            </a>
                        </div>
                        <div className="contact-text">
                            <p>LinkedIn</p>
                        </div>
                    </div>
                    </a>
                </Col>
            </Row>
            </div>
        </Container>
    )
}

export default Contact
