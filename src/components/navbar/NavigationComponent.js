import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationComponent.css';
import linkedIn from '../../assets/in_black.png';
import github from '../../assets/github-mark.png';
import {LinkContainer} from 'react-router-bootstrap'



function NavigationComponent() {
  return (
    <Navbar expand="lg" className="navigation">
      <Container>

        <Navbar.Brand>Theis Juul Langlands</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer to="/">
              <Nav.Link>About me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projekter</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Kontakt</Nav.Link>
            </LinkContainer>
          </Nav>

          <div>
          <a href="https://www.linkedin.com/in/theis-langlands-203a7545/" target="_blank">
            <img className="links" src={linkedIn} alt='LinkedIn link' width="30" height="30"/>
          </a>
          <a href="https://github.com/theislanglands" target="_blank">
            <img src={github} alt='Github link' width="30" height="30"/>
          </a>
          </div>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavigationComponent;