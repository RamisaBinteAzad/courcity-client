  import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
  
const LeftSideBar = ({ course }) =>
{
  
  
  const { title, id } = course;
  console.log(id);
  return (
    <div className="mt-4 sticky-top">
       
      
        <ListGroup key={id}>
          <Link
            to={`/singleCourse/${id}`}
            className="text-decoration-none "
          >
            <ListGroup.Item className=" bg-change rounded p-3 shadow mb-3  ">
              {id}
              {title}
            </ListGroup.Item>
          </Link>
        </ListGroup>
      
      
    </div>
  );
};
  
  export default LeftSideBar;