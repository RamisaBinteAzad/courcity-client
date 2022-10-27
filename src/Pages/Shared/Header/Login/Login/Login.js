import React, { useContext, useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import img2 from "../../../../../assets/images/img2.jpg";
import "./Login.css";
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { providerLogin, providerLoginGithub } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleGithubSignIn = () => {
    providerLoginGithub(githubProvider)
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(" ");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="banner-section  w-100 h-100">
      <Container fluid>
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg="6">
            <Container
              className="h-75
                            p-5 d-flex justify-content-center"
            >
              <div className="w-75">
                <h1 className="text-navy display-4 text-center ">
                  Login To Your Account
                </h1>
                <p className="  text-center main fs-5   ">
                  Login using Social Networks
                </p>
                <ButtonGroup>
                  <Button
                    onClick={handleGoogleSignIn}
                    className="me-2 ms-5 btn-color-change-google"
                    variant="outline-primary"
                  >
                    <FaGoogle></FaGoogle> Login with Google
                  </Button>
                  <Button
                    variant="outline-dark"
                    onClick={handleGithubSignIn}
                    className="btn-color-change"
                  >
                    <FaGithub></FaGithub> Login with Github
                  </Button>
                </ButtonGroup>
                <div className="divider-container">
                  <div className="line"></div>
                  <h1 className="title2">Or</h1>
                  <div className="line"></div>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FontAwesomeIcon
                      className="me-2 text-success"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                    <Form.Label className="text-light-mediumvioletred mt-2 fw-bold">
                      Email address
                    </Form.Label>
                    <Form.Control
                      className="rounded-pill px-4 py-2"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FontAwesomeIcon
                      className="me-2 text-success"
                      icon={faLock}
                    ></FontAwesomeIcon>
                    <Form.Label className="text-light-mediumvioletred fw-bold">
                      Password
                    </Form.Label>
                    <Form.Control
                      className="rounded-pill px-4 py-2"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      className="btn-bg  border border-0 rounded w-25 text-center"
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>

                  <Form.Text className="text-danger">{error}</Form.Text>
                </Form>
              </div>
            </Container>
          </Col>
          <Col lg="6" className="me-0 p-0 bg-login">
            <Container className="h-100 img-fluid d-flex justify-content-center align-items-center text-center  p-4   ">
              <div className="w-50   ">
                <h1 className="text-pale-lime-green fw-bold display-4 mt-5  ">
                  New Here?
                </h1>
                <p className="text-light-blue">
                  Sign Up and discover new skills,meet passionate teachers and
                  become a part of the most helpful community of creatives in
                  the world.
                </p>
                <Link to="/register">
                  <button className="btn btn-outline-info rounded-pill w-50 p-2">
                    Sign Up
                  </button>
                </Link>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
