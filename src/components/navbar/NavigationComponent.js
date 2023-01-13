import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationComponent.css';
import linkedIn from '../../assets/in_black.png';
import github from '../../assets/github-mark.png';
import {LinkContainer} from 'react-router-bootstrap'



function NavigationComponent() {
  return (
    <Navbar className="navigation" collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="/">
          <Nav.Link>
            <Navbar.Brand>Theis Langlands</Navbar.Brand>
        </Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>

          <div className="navigation-icons">
          <a href="https://www.linkedin.com/in/theis-langlands-203a7545/" target="_blank" rel="noreferrer">
            <img className="links" src={linkedIn} alt='LinkedIn link' />
          </a>
          <a href="https://github.com/theislanglands" target="_blank" rel="noreferrer">
            <img src={github} alt='Github link' />
          </a>
          </div>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavigationComponent;