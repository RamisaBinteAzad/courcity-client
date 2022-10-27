import React from 'react';
import { Button } from 'react-bootstrap';
import {  FaStar, FaStarHalfAlt } from "react-icons/fa";
 

const RightSideBar = ({ course }) => {
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
     } = course;
  return (
    <div className="col">
      <div className="card h-100 rounded shadow p-3 mt-3">
        <img className="img-fluid rounded" src={img} alt="" />
        <div className="card-body  ">
          <h5 className="card-title fw-bold text-navy-color">{title}</h5>
          <p className="pt-2 text-muted fw-bold"> {about}</p>
          <p className=" text-muted mb-0">
            <small>{instructor}</small>
          </p>
          <div className="d-flex justify-content-between">
            <div className="color-orange d-flex align-items-center mt-1">
              <span className="fw-bold">{ratings}</span>
              <FaStar className=""></FaStar>
              <FaStar className=""></FaStar>
              <FaStar className=""></FaStar>
              <FaStar className=""></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
            </div>
            <div>
              <small className="text-muted">{enrolledStudents} students</small>
            </div>
          </div>
          <div className="d-flex text-success align-items-center mt-1">
            <small className="me-2"> {totalHours}totalHours</small>
            <p className=" mt-3 me-2 icon-rectangle "></p>
            <small className="me-2"> {lectures}lectures</small>
            <p className=" mt-3 me-2 icon-rectangle "></p>
            <small> {type}</small>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="color-orange h1">${price}</span>
            <Button variant="outline-info rounded-pill py-2">
              <small>View More</small>
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;