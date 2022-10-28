import React from "react";
import { Container } from "react-bootstrap";
import { FaPaperPlane,FaPlane,FaRocket,FaUser,FaCalendarPlus,FaDownload,FaUserTag,FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
const FAQ = () => {
  return (
    <div className="pt-4 h-100">
      <Container>
        <div className=" d-flex justify-content-center  align-items-center ">
          <div className="text-center mt-4 w-50 pt-3">
            <h3 className=" mb-2 pb-2   fw-bold display-6 text-navy-color ">
              FAQ
            </h3>
            <p className=" fs-5 mb-5 main fw-bold  justify-content-ceneter">
              Some of the most frequently asked questions from students are
              listed with helpful Answers from our support team
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-faq-title  ">
              <FaRocket className=" fs-2 pe-2"></FaRocket> Is Payment System
              Secure Here?
            </h6>

            <p className="text-succcess">
              <strong>
                <u className=" text-navy-color">Absolutely! </u>
              </strong>{" "}
              <span className="text-body-change">
                We work with top payment companies which guarantees your safety
                and security. All billing information is stored on our payment
                processing partner.
              </span>
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-faq-title   ">
              <FaCalendarPlus className=" fs-2 pe-2"></FaCalendarPlus>How long
              does my subscription last?
            </h6>
            <p>
              <strong>
                <u className="text-navy-color">Currently CourCity! </u>
              </strong>
              <span className="text-body-change">
                subscriptions are monthly.You can upgrade or cancel your monthly
                account at any time with no further obligation.
              </span>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-faq-title   ">
              <FaPaperPlane className=" fs-2 pe-2"></FaPaperPlane> How do I do
              things such as upgrade or update my billing information?
            </h6>

            <p>
              <span className="text-body-change">
                You can find these options on your
              </span>
              <strong>
                <u className="text-navy-color"> Enrollment page. </u>
              </strong>
              <span className="text-body-change">
                If you need more help with upgrading, please watch our brief
                video which will show you how to upgrade or change your plan.
              </span>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-faq-title   ">
              <FaBolt className=" fs-2 pe-2"></FaBolt> Do you have a free trial?
            </h6>

            <p>
              <span className="text-body-change">
                We offer everyone a 7 day free trial! You can take advantage of
                it by visiting our{" "}
                <Link className="text-navy-color" to="/register">
                  {" "}
                  sign-up
                </Link>{" "}
                page!
              </span>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-faq-title   ">
              <FaDownload className=" fs-2 pe-2"></FaDownload>How do I download
              videos for offline viewing?
            </h6>

            <p>
              <span className="text-body-change">
                Video downloads are available only to Courses Plus subscribers.
                If you're a Courses Plus subscriber, you can download the
                video(s) directly from the site.
              </span>
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-faq-title   ">
              <FaUserTag className=" fs-2 pe-2"></FaUserTag>Do you offer a Group
              Membership at a discounted rate?
            </h6>

            <p>
              <span className="text-body-change">
                We do offer group membership discounts. Please fill out the form
                here and someone from our Organizations team will follow up with
                you.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
