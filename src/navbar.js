import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import './navbar.css'

const Navbars = () => {
    
  return (
    <>
     <div className="video-background">
          <video autoPlay loop muted>
            <source src="../frontpage_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <div className="mx-2"> ‥…━━━★  </div>
        <Navbar.Brand href="/" className="brand"> C-CODE SPACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlinks n1">
          <Nav.Item className='mx-3'><Link to='/home' className="nav-link">Home</Link></Nav.Item>
            <Nav.Item className='mx-3'><Link to='/Blog' className="nav-link">Blog</Link></Nav.Item>
            <Nav.Item className='mx-3'><Link to='/Contact' className="nav-link">Contact</Link></Nav.Item>
            
            <div className="moving-arrows">🛸</div>
            <div className=""> ͙͘͡★</div>
           
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  
    
    <Outlet/>
    </>
  )
  }    
  
  export default Navbars;