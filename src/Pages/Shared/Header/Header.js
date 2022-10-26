import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/icons/logo.png";
import logo1 from "../../../assets/icons/letter-c.png";
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import App from '../../../App';
import Switch from "react-switch";
import { ThemeContext } from '../../../layout/Main';



const Header = ({value}) => {
   
   
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        className="shadow"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Logo"
                className="me-2  img-fluid d-inline-block "
              />

              <span className="fs-2 fw-bold align-items-center    color-Navy">
                <span className="text-gradient font-size">C</span>
                our
              </span>
              <span className="text-gradient fs-2  fw-bold font-size">c</span>
              <span className="color-Navy fs-2  fw-bold">ity</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fs-5 fw-bold ">
              <Link className="nav-style-home hover-link me-lg-3" to="/">
                Home
              </Link>

              <Link className="nav-style  me-lg-4" to="/courses">
                Courses
              </Link>
              <Link className="nav-style  me-lg-4" to="/faq">
                FAQ
              </Link>
              <Link className="nav-style  me-lg-4" to="/blog">
                Blog
              </Link>

              {/* <Switch className="switch" onChange={toggleTheme}></Switch> */}
               

              <Switch onChange={value.toggleTheme} checked={value.theme === "dark"} />
            </Nav>
            {/* <Nav>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>

              <Link to="/profile"></Link>
            </Nav> */}
            {/* <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;