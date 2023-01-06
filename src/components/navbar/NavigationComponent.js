import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationComponent.css';
import linkedIn from '../../assets/in_black.png';
import github from '../../assets/github-mark.png';

function NavigationComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Theis Juul Langlands</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#projects">Projekter</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
          </Nav>
          <div>
          <a href="#linkedin" target="_blank">
            <img className="links" src={linkedIn} alt='LinkedIn' width="30" height="30"/>
          </a>
          <a href="#github" target="_blank">
            <img src={github} alt='LinkedIn' width="30" height="30"/>
          </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationComponent;