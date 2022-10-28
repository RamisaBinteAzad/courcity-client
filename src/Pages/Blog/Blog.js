import React from "react";
import { Container, Image } from "react-bootstrap";
import img2 from "../../assets/images/blog.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Blog.css";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="bg-blog w-100 h-100">
      <div className=" p-4 ">
        <Container className="pt-5 h-100">
          <Row xs={1} md={2} className="g-4 ">
            <Col className="  ">
              <Card className="h-100">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <Image
                      roundedCircle
                      className="me-2"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ height: "40px" }}
                    ></Image>
                    <div>
                      <p className="mb-0 blog-title-color fw-bold">
                        Colt Steele
                      </p>
                      <p> October 17, 2022</p>
                    </div>
                  </div>
                  <div>
                    <FaRegBookmark className="me-2"></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                  </div>
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Img
                    variant="top"
                    src="https://cdn.pellerex.com/public/ecosystem/web/content/api-cors/pellerex-asp-net-5-web-api-cors.png"
                    className="img-fluid"
                  />
                  <Card.Title className="fw-bold mt-2 blog-title-color">
                    What is Cors?
                  </Card.Title>
                  <Card.Text>
                    Cross-origin resource sharing (CORS) is a mechanism that
                    allows restricted resources on a web page to be requested
                    from another domain outside the domain from which the first
                    resource was served. A web page may freely embed
                    cross-origin images, stylesheets, scripts, iframes, and
                    videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <Image
                      roundedCircle
                      className="me-2"
                      src="https://media.istockphoto.com/photos/portrait-of-confident-young-professional-smiling-at-camera-picture-id1347993286?b=1&k=20&m=1347993286&s=170667a&w=0&h=NNGXq-1lhsQmUGqKyP96CHjvFwgwTDAykGMfP3s8IE4="
                      style={{ height: "40px" }}
                    ></Image>
                    <div>
                      <p className="mb-0 blog-title-color fw-bold">
                        Andrei Neagoie
                      </p>
                      <p> October 5, 2022</p>
                    </div>
                  </div>
                  <div>
                    <FaRegBookmark className="me-2"></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                  </div>
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Img
                    variant="top"
                    src="https://vietnix.vn/wp-content/uploads/2022/05/firebase-la-gi.webp"
                    className="img-fluid"
                  />
                  <Card.Title className="fw-bold mt-2 blog-title-color">
                    Why are you using firebase? What other options do you have
                    to implement authentication?
                  </Card.Title>
                  <Card.Text>
                    Google Analytics for Firebase allows you to track your
                    users' journey through realtime and custom reporting.
                    Firebase supports IOS, Android, Web, and Unity products,
                    allowing you to track your users across a wide range of
                    devices.
                    <br />
                    To Implement authentication other options are:
                    <div className="d-flex   align-items-center mt-1">
                      <span className="me-2"> STYTCH</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2"> Ory</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2"> Supabase</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2"> Okta</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2"> Authress</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2">PingIdentity</span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <Image
                      roundedCircle
                      className="me-2"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      style={{ height: "40px" }}
                    ></Image>
                    <div>
                      <p className="mb-0 blog-title-color fw-bold">
                        Dr. Ryan Ahmed
                      </p>
                      <p> October 20, 2022</p>
                    </div>
                  </div>
                  <div>
                    <FaRegBookmark className="me-2"></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                  </div>
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/M6iYyo25QZo/mqdefault.jpg"
                    className="img-fluid"
                  />
                  <Card.Title className="fw-bold mt-2 blog-title-color">
                    How does the private route work?
                  </Card.Title>
                  <Card.Text>
                    The react private route component renders child components (
                    children ) if the user is logged in. If not logged in the
                    user is redirected to the /login page with the return url
                    passed in the location state property.The private route
                    component is used to protect selected pages in a React app
                    from unauthenticated users.
                    <br />
                    To Implement authentication other options are:
                    <div className="d-flex   align-items-center mt-1">
                      <span className="me-2"> STYTCH</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2"> Ory</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2"> Supabase</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2"> Okta</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2"> Authress</span>
                      <p className=" mt-3 me-2 icon-rectangle "></p>
                      <span className="me-2">PingIdentity</span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <Image
                      roundedCircle
                      className="me-2"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ height: "40px" }}
                    ></Image>
                    <div>
                      <p className="mb-0 blog-title-color fw-bold">
                        Colt Steele
                      </p>
                      <p> October 25, 2022</p>
                    </div>
                  </div>
                  <div>
                    <FaRegBookmark className="me-2"></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                  </div>
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Img
                    variant="top"
                    src="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png"
                    className="img-fluid"
                  />
                  <Card.Title className="fw-bold mt-2 blog-title-color">
                    What is Node? How does Node work?
                  </Card.Title>
                  <Card.Text>
                    Node (or more formally Node. js) is an open-source,
                    cross-platform runtime environment that allows developers to
                    write JavaScript code that runs directly in a computer
                    process itself instead of in a browser.
                    <br />
                    <br />
                    It is used as backend service where javascript works on the
                    server-side of the application.This way javascript is used
                    on both frontend and backend. Node. js runs on chrome v8
                    engine which converts javascript code into machine code, it
                    is highly scalable, lightweight, fast, and data-intensive.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
