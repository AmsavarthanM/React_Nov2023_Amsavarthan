// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './de.css';
import * as React from 'react';
import Button from '@mui/material/Button';



function NavScrollExample() {
  return (
    <Navbar style={{paddingTop:'0px',paddingBottom:'0px',border:'3px solid black'}} expand="lg" className="bg-body-tertiary">
      <Container style={{backgroundColor:'#fd3753',paddingTop:'0px',paddingBottom:'0px'}} fluid>
        <img style={{height:"100px",width:"100px",borderRadius:'10px'}} src={require("./images/filogo.jpg") }/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='but' href="#action1" style={{color:'white'}}>Home</Nav.Link>
            <NavDropdown className='but' style={{color:'white'}} title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Bookings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Designings
              </NavDropdown.Item>
            </NavDropdown>
            
          <Nav.Link className='but' style={{color:'white'}} href="/log">Sign In</Nav.Link>
          <Nav.Link className='but' style={{color:'white'}}href="/reg">Register&nbsp;&nbsp;&nbsp;</Nav.Link>
           <Button className='but' style={{color:'#fd3753',height:'30px',marginTop:'8px',backgroundColor:'white'}} variant="outlined" color="error">Call Us</Button>
            <Nav.Link className='but' href="#action1" style={{color:'white'}}>&nbsp;&nbsp;&nbsp; FAQ</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
            style={{color:'#DB2E43'}}
              type="search"
              placeholder="Services..."
              className="me-2"
              aria-label="Search"
            />
            <Button className='but' variant="outlined" style={{color:'#fd3753',backgroundColor:'white'}}>Search</Button> 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;