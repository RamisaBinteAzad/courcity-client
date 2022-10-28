import React from "react";
import { Link, useRouteError } from "react-router-dom";
import logo from "../../assets/images/404Err.webp";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page h-100">
      {/* <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>404 Error.Pagee Not Found</p> */}
      <div className=" container justify-content-center align-items-center w-100">
        <div>
          <img className="img-fluid w-100 h-25" src={logo} alt="" />
        </div>
      </div>
      <div className=" d-flex  justify-content-center  align-items-center mb-3">
        <div className="text-center mt-4 w-50 pt-3">
          <p className="text-muted    fs-5  ">
            The Page you are looking for might have been removed had its name
            changed or is temporarily unavailable
          </p>
          <button className='  btn-success   rounded border-0 btn      px-3 py-2'>
            <Link className="link" to="/">
              Go to Home{" "}
            </Link>
          </button>
        </div>
      </div>

      {/* <div className="d-flex justify-content-center align-items-center w-100">
        <div>
          <img className="img-fluid w-100" src={logo} alt="" />
        </div>
      </div>
      <div>
        <div className="  w-50 d-flex flex-column justify-content-center align-items-center">
          <div>
            <h3 className="text-center ms-auto">
              The Page you are looking for might have been removed had its name
              changed or is temporarily unavailable
            </h3>
          </div>

          <button className=' text-white className=" rounded border-0 btn w-25 btn-success   px-3 py-2'>
            <Link className="link" to="/">
              Go to Home{" "}
            </Link>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ErrorPage;
