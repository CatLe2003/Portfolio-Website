import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {NavLink} from "react-router-dom"

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);
  
  useEffect(() => {
    console.log("isScrolled changed:", isSticky);
  }, [isSticky]);
  
  return (
    <div className={`sticky-wrapper ${isSticky ? "is-sticky" : ""}`}>
      <Navbar 
      expand="lg" 
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Container>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Brand className="mx-auto mx-lg-0" href="#">First</Navbar.Brand>
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-lg-5">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="ms-auto d-flex align-items-center">
              <i className="navbar-icon bi bi-telephone-plus me-3"></i>
              <Button href="contact.html" className="custom-btn">120-240-9600</Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
