import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import './NavBar.css'

function NavBar({ mode, setMode }) {
  return (
    
    <>
      <Navbar fixed='top' expand="lg" bg={mode === "dark" ? "dark" : "light"}
  variant={mode === "dark" ? "dark" : "light"} className='border-bottom'>
        <Container>
          <Navbar.Brand href="/home" className='fs-7 fw-bold'><i class="bi bi-tencent-qq"></i> Randa Erfan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto d-flex justify-content-between fs-7 fw-bold" >
              <Nav.Link className='nav-link' href="/">Home</Nav.Link>
              <Nav.Link className='nav-link' href="/about">About</Nav.Link>
              <Nav.Link className='nav-link' href="/skills">Skills</Nav.Link>  
              <Nav.Link className='nav-link' href="/projects">Projects</Nav.Link>
              <Nav.Link className='nav-link'href="/experience">Experience</Nav.Link>
              <Nav.Link className='nav-link' href="/education">Education</Nav.Link>
              <Nav.Link className='nav-link' href="/certificates">Certificates</Nav.Link>
              <Nav.Link className='nav-link' href="/contact">Contact</Nav.Link>

              <Button className='btn btn-secondary'

                onClick={() => {mode === "dark" ? setMode("light"):setMode("dark")}}
              >
                {mode === "dark" ? <FaSun color="orange" /> : <FaMoon color="white" />}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar