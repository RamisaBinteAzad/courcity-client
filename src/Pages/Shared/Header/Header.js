import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/icons/logo.png";
import logo1 from "../../../assets/icons/letter-c.png";
import './Header.css'
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import App from '../../../App';
import Switch from "react-switch";
import { FaUser } from "react-icons/fa";
import { ThemeContext } from '../../../layout/Main';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import {
  faArrowRight,
  faSignIn,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Header = ({ value }) => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.error(error));
    };
    
   
   
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        className="shadow align-items-center"
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
              <span className="text-gradient fs-2  fw-bold font-size">C</span>
              <span className="color-Navy fs-2  fw-bold">ity</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fs-5 fw-bold ">
              <Link className="nav-style-home hover-link me-lg-4" to="/">
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

              <Switch
                className="  me-lg-4"
                onChange={value.toggleTheme}
                checked={value.theme === "dark"}
              />
              <>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <button
                      type="button"
                      onClick={handleLogOut}
                      className="btn btn-danger  w-25 mx-3    "
                    >
                      Log Out
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faSignInAlt}
                      ></FontAwesomeIcon>
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="nav-style  me-lg-4" to="/login">
                      Log In
                    </Link>
                    <Link to="/register">
                      <button
                        type="button"
                        className=" rounded border-0 mx-3  btn-bg bg-success text-white  px-3 py-2"
                      >
                        Join For Free
                        <FontAwesomeIcon
                          className="ms-2"
                          icon={faSignInAlt}
                        ></FontAwesomeIcon>
                      </button>
                    </Link>
                  </>
                )}
              </>
              <Link>
                {user ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                    className="img-fluid "
                    title={user?.displayName}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;