import React from 'react'
import {Container, Col} from 'react-bootstrap';
import './NoPage.css';




const NoPage = () => {
  return (
    <Container>
        <Col>
    <h1 className="error">404 Page not found</h1>
    </Col>
    </Container>
  )
}


export default NoPage
