import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css'
import Content from './about.json';


const About = () => {
  return (
    <Container>
        <Row>
            <Col>
                <div className="Content-header">About</div>
                <div className="Content">
                        {Content.text}
                </div>
            </Col>
            <Col>
                <p>image</p>
            </Col>
        </Row>
    
    </Container>
  )
}

export default About