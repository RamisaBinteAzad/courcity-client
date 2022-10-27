  import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  
const LeftSideBar = ({ course }) => {
      const {title} = course;
    return (
      <div className="mt-4 sticky-top">
        <ListGroup>
          <Link className="text-decoration-none ">
            <ListGroup.Item className=" bg-change rounded p-3 shadow mb-3  ">
              {title}
            </ListGroup.Item>
          </Link>
        </ListGroup>
      </div>
    );
  };
  
  export default LeftSideBar;