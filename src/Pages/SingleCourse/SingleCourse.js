import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CheckOutPage from '../CheckOutPage/CheckOutPage';
import CourseDetail from '../CourseDetail/CourseDetail';

const SingleCourse = () => {
     const courseDetails = useLoaderData();
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
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div>
                  <p className="mb-0 blog-title-color fw-bold">{instructor}</p>
                </div>
              </div>
              <div>
                <p>Enrolled Students:{enrolledStudents}</p>
              </div>
            </Card.Header>
            <Card.Body className="p-4">
              <Card.Img variant="top" src={img} className="img-fluid" />
              <Card.Title className="text-center display-5 fw-bold mt-2 blog-title-color">
                {title}
              </Card.Title>
              <Card.Text>
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
                  What you will Learn:
                </h4>
                {features.map((feature) => (
                  <ul key={feature.id}>
                    <li>{feature}</li>
                  </ul>
                ))}
                <h4 className="blog-title-color fw-bold">
                  This Course Includes:
                </h4>
                {highlights.map((highlight) => (
                  <ul key={highlight.id}>
                    <li>{highlight}</li>
                  </ul>
                ))}
                <br />
                <br />

                <button className="btn btn-bg ">
                  <Link to="/checkOut" className="text-decoration-none">
                    Get Premium Access
                  
                  </Link>
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
};

export default SingleCourse;