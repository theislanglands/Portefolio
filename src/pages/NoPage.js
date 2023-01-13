import React from 'react'
import {Container, Col} from 'react-bootstrap';


const style = {
    color: "grey",
  };

const NoPage = () => {
  return (
    <Container>
        <Col>
    <h1 className="error" style={style}>404 Page not found</h1>
    </Col>
    </Container>
  )
}


export default NoPage
