import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import './About.css'
import Content from './about.json';
import theis from '../../assets/Theis_oval.png';

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
        <div className="Content-header">
          {Content.header}
        </div>
        </Col>
      </Row>
        <Row>
            <Col>
                <div className="Content">
                    {Content.textuk}
                </div>
            </Col>
            <Col>
            <div className='theis'>
              <img src={theis} alt='LinkedIn'/>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default About