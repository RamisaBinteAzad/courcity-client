import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/images/group-students.webp";
import { faArrowRight,faSignIn,faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
 

const Home = () => {
    return (
      <div className="banner-section  w-100 h-100">
        <Container fluid>
          <Row className="flex-column-reverse flex-lg-row">
            <Col lg="5">
              <div className=" h-50 ps-5 py-4">
                <h2 className="main p-3  ps-lg-0    display-3 fw-bold pt-5">
                  Take a course and improve your skills
                </h2>
                <p className="p-3    text-color-change p-lg-0    ">
                  Start, switch, or advance your career with more than 5,200
                  courses, Professional Certificates, and degrees from
                  world-class universities and companies.
                </p>
                <div className="  p-lg-0">
                  <Link to="/courses">
                    <button
                      type="button"
                      className=" rounded border-0 btn-bg  me-3  px-3 py-2"
                    >
                      Get Started
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faArrowRight}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      type="button"
                      className=" rounded border-0 btn-bg bg-success text-white  px-3 py-2"
                    >
                      Join For Free
                      <FontAwesomeIcon
                        className="ms-2"
                        icon={faSignInAlt}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="7">
              <img src={img1} className="img-fluid w-100     " alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Home;