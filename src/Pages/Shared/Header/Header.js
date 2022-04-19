import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandIcon from '../../../images/brand-icon.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link}  to="/"
        href="home#home"><img src={brandIcon} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" href="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" href="home#about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="blogs" href="home#blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="services" href="home#services">
              Services
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  as={Link} to="signup"  href="#signup">Signup</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;