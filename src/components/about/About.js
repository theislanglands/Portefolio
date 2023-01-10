import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css'
import Content from './about.json';
import theis from '../../assets/Theis_oval.png';

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
            <div className='theis'></div>
            <img src={theis} alt='LinkedIn' height="300"/>
            </Col>
        </Row>
    </Container>
  )
}

export default About