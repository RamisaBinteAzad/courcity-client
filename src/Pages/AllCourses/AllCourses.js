import React from "react";
import { useLoaderData } from "react-router-dom";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import "./AllCourses.css";
 
 
import RightSideBar from "../RightSideBar/RightSideBar";

const AllCourses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <div className="container">
      <div className="row   ">
        <div className=" pt-4 col-12 col-lg-4 ">
          <span className="display-4 ms-2 text-gradient mt-3"> Courses </span>
          <span className="display-4 text-color-change    "> List</span>
          {allCourses.map((course) => (
            <LeftSideBar key={course.id} course={course}></LeftSideBar>
          ))}
        </div>
        <div className="col-lg-8 col-12   activities-container   ">
          <div className="  mt-4">
            <div className="mb-4 pt-3">
              <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {allCourses.map((course) => (
                    <RightSideBar
                      key={course.id}
                      course={course}
                    ></RightSideBar>
                  
                  ))
                     
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
