import React from 'react'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">PB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
            <Nav.Link> <Link to="/deck">Deck</Link> </Nav.Link>
            <Nav.Link> <Link to="/battle">Battle</Link> </Nav.Link>
            <Nav.Link> <Link to="/donate">Support</Link> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    
    </div>
  )
}

export default Header