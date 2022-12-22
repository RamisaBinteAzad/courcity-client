import { faImage, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import './CheckOutPAge.css'
import visa from '../../assets/images/cards/visa.png'
import mastercard from "../../assets/images/cards/master-card.png";
import americanExpess from "../../assets/images/cards/americanExpress.png";
import discover from "../../assets/images/cards/discover.png";
import paypal from "../../assets/images/cards/paypal2.png";
import { toast } from "react-hot-toast";

const CheckOutPage = () => {
  const courseCheckout = useLoaderData();
  const [accepted, setAccepted] = useState(false);
  const { user} = useContext(AuthContext);
  console.log(courseCheckout);
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
  } = courseCheckout;
  const handleSubmit = (event) => {
    toast.success("Your checkout is completed successfully")
  }
  const handleAccepted = (event) => {
    console.log(event.target.checked);
    setAccepted(event.target.checked);
  };
  return (
    <Container className="">
      <h1 className="text-center display-3  text-color-change mt-4 mb-2">
        Checkout
      </h1>

      <div className="row ">
        <div className="col-12 col-lg-5 h-100 ">
          <Card className="my-4 bg-navy-color  ">
            <Card.Header className=" text-center">
              <p className="text-center fs-5   mt-2    ">{title}</p>
              <small className="fs-6">by {instructor}</small>
            </Card.Header>

            <Card.Body className="">
              <Card.Img variant="top" src={img} className="img-fluid " />
              <p className="text-center fs-5  mt-2 text-price ">
                Price:${price}
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-7 col-12 container">
          <h3 className="display-6 mt-3 text-color-change ps-2">Confirm</h3>
          <Form onSubmit={handleSubmit} className="container">
            <div className="d-flex  align-items-center">
              <div className="d-flex justify-content-around align-items-center bg-card px-3 py-2 rounded">
                <img src={visa} className="img-fluid " alt="" />
                <img src={mastercard} className="img-fluid ms-2" alt="" />
                <img src={discover} className="img-fluid ms-2" alt="" />
                <img
                  src={americanExpess}
                  className="img-fluid ms-3 w-100"
                  alt=""
                />
              </div>
              <div className="d-flex ms-4 align-items-center">
                <img src={paypal} className="img-fluid  w-100" alt="" />
              </div>
            </div>
            <hr className="bg-hr w-100" />
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-color-change fw-bold">
                Name On Card
              </Form.Label>
              <Form.Control
                className="rounded px-4 py-2 text-success"
                name="name"
                type="text"
                defaultValue={user?.displayName}
                placeholder={user?.displayName}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-color-change  fw-bold">
                Email address
              </Form.Label>
              <Form.Control
                className="rounded px-4 py-2 text-success"
                name="email"
                type="email"
                defaultValue={user?.email}
                placeholder={user?.email}
                required
              />
            </Form.Group>

            <div class="row">
              <div class="col-12 col-lg-5">
                <Form.Group className="mb-3" controlId="formBasicCardNumber">
                  {/* <FontAwesomeIcon
                  className="me-2 text-success"
                  icon={faLock}
                ></FontAwesomeIcon> */}
                  <Form.Label className="text-color-change fw-bold">
                    Card Number
                  </Form.Label>
                  <Form.Control
                    className="rounded "
                    name="cardNumber"
                    type="text"
                    placeholder="Enter your Card Number"
                    required
                  />
                </Form.Group>
              </div>
              <div class="col-lg-4 col-6">
                <Form.Group className="mb-3" controlId="formBasicCardNumber">
                  {/* <FontAwesomeIcon
                  className="me-2 text-success"
                  icon={faLock}
                ></FontAwesomeIcon> */}
                  <Form.Label className="text-color-change fw-bold">
                    Expiration Date
                  </Form.Label>
                  <Form.Control
                    className="rounded px-4 py-2"
                    name="date"
                    type="date"
                    placeholder="MM/YY"
                    required
                  />
                </Form.Group>
              </div>
              <div class="col-lg-3 col-6">
                <Form.Group className="mb-3" controlId="formBasicCardNumber">
                  {/* <FontAwesomeIcon
                  className="me-2 text-success"
                  icon={faLock}
                ></FontAwesomeIcon> */}
                  <Form.Label className="text-color-change fw-bold">
                    Cvv
                  </Form.Label>
                  <Form.Control
                    className="rounded px-4 py-2"
                    name="cvv"
                    type="number"
                    placeholder="Cvv"
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label className="text-color-change fw-bold">
                    Country
                  </Form.Label>
                  <Form.Select>
                    <option disabled selected>
                      Select Your Country
                    </option>
                    <option>Australia</option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Saudi Arabia</option>
                    <option>Singapur</option>
                    <option>United States(USA)</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div class="col-12 col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label className="text-color-change fw-bold">
                    Zip Code
                  </Form.Label>
                  <Form.Control
                    className="rounded "
                    name="zipCode"
                    type="text"
                    placeholder="Zipcode"
                    required
                  />
                </Form.Group>
              </div>
            </div>

            {/* <div className="d-flex">
                
              </div> */}

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handleAccepted}
                label={
                  <>
                    <span className="text-color-change">
                      Save this card securely for future purposes.{" "}
                    </span>{" "}
                  </>
                }
              />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                className="btn-bg w-75 mb-4 border border-0 rounded px-3 text-center"
                type="submit"
                disabled={!accepted}
              >
                Check Out
              </Button>
            </div>

            <Form.Text className="text-danger">{/* {error} */}</Form.Text>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default CheckOutPage;
