import React, { useRef } from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CheckOutPage from '../CheckOutPage/CheckOutPage';
import CourseDetail from '../CourseDetail/CourseDetail';
import Pdf from "react-to-pdf";
import './SingleCourse.css'

const SingleCourse = () => {
  const courseDetails = useLoaderData();
  
  	const ref = useRef();
    console.log(courseDetails);
    const {
      about,
      enrolledStudents,
      id,
      img,
      instructor,
      lectures,
      price,
      ratings,
      title,
      totalHours,
      type,
      desTitle,
      desPart1,
      desPart2,
      desPart3,
      features,
      highlights,
    } = courseDetails;
     
    return (
      <div>
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <Card className="my-4 w-75 h-50 border-course shadow">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex ">
                  <div>
                    <p className="mb-0 blog-title-color fw-bold">
                      {instructor}
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <p className="me-4">Enrolled Students:{enrolledStudents}</p>

                  <Pdf targetRef={ref} filename="course.pdf">
                    {({ toPdf }) => (
                      <FaDownload
                        className="text-success fs-4"
                        onClick={toPdf}
                      ></FaDownload>
                    )}
                  </Pdf>
                  {/* <FaDownload className="text-success fs-4"></FaDownload> */}
                </div>
              </Card.Header>

              <Card.Body className="p-4 w-100" ref={ref}>
                <Card.Img
                  variant="top"
                  src={img}
                  className="img-fluid w-75 d-flex mx-auto h-75"
                />
                <Card.Title className="mx-auto w-75 fs-1 fw-bold mt-2 blog-title-color  ">
                  {title}
                </Card.Title>
                <Card.Text className="mx-auto w-75">
                  {desTitle}
                  <br />
                  <br />
                  {desPart1}
                  <br />
                  <br />
                  {desPart2}
                  <br />
                  <br />
                  {desPart3}
                  <br />
                  <br />
                  <h4 className="blog-title-color fw-bold">
                    This Course Includes:
                  </h4>
                  {features.map((feature) => (
                    <ul key={feature.id}>
                      <li>{feature}</li>
                    </ul>
                  ))}
                  <h4 className="blog-title-color fw-bold">
                    What you will Learn:
                  </h4>
                  {highlights.map((highlight) => (
                    <ul key={highlight.id}>
                      <li>{highlight}</li>
                    </ul>
                  ))}
                  <br />
                  <br />
                  <Link to={`/checkout/${id}`} className="text-decoration-none">
                    <Button
                      variant="primary"
                      className="btn-bg py-3  border border-0 rounded  text-center"
                      type="submit"
                    >
                      {" "}
                      Get Premium Access
                    </Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
};

export default SingleCourse;