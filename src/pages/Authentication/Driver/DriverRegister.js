import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"
import {
  registerUser,
  apiError,
  registerUserFailed,
} from "../../../store/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MetaTagComp from "components/MetaTag"
import "./style.scss"

const DriverRegister = () => {
  return (
    <React.Fragment>
      <MetaTagComp title_sco="Driver register page | Buy and sell" />

      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <Card>
                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      <Row>
                        <Col sm={4} className="radio-div">
                          <div className="mb-3">
                            <AvRadioGroup
                              inline
                              name="vehicle"
                              label="Do you have a vehicle to drive?"
                              required
                              errorMessage="Pick one!"
                            >
                              <AvRadio label="Yes" value="Yes" />
                              <AvRadio label="No" value="No" />
                            </AvRadioGroup>
                          </div>
                          <div className="mb-3">
                            <AvRadioGroup
                              inline
                              name="phone"
                              label="Android phone with version 7+?"
                              required
                              errorMessage="Pick one!"
                            >
                              <AvRadio label="Yes" value="Yes" />
                              <AvRadio label="No" value="No" />
                            </AvRadioGroup>
                          </div>
                          <div className="mb-3">
                            <AvRadioGroup
                              inline
                              name="record"
                              label="Consent to a criminal record check?"
                              required
                              errorMessage="Pick one!"
                            >
                              <AvRadio label="Yes" value="Yes" />
                              <AvRadio label="No" value="No" />
                            </AvRadioGroup>
                          </div>
                          <div className="mb-3">
                            <AvRadioGroup
                              inline
                              name="terms"
                              label="Agreed to the terms and conditions?"
                              required
                              errorMessage="Pick one!"
                            >
                              <AvRadio label="Yes" value="Yes" />
                              <AvRadio label="No" value="No" />
                            </AvRadioGroup>
                          </div>
                          <div className="mb-3">
                            <AvRadioGroup
                              inline
                              name="privacy"
                              label="Agreed to the driver privacy policy?"
                              required
                              errorMessage="Pick one!"
                            >
                              <AvRadio label="Yes" value="Yes" />
                              <AvRadio label="No" value="No" />
                            </AvRadioGroup>
                          </div>
                        </Col>

                        <Col sm={4}>
                          <div className="mb-3">
                            <AvField
                              id="firstName"
                              name="firstName"
                              label="First Name"
                              className="form-control"
                              placeholder="Enter First"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="lastName"
                              name="lastName"
                              label="Last Name"
                              className="form-control"
                              placeholder="Enter Last"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="email"
                              name="email"
                              label="Email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="mobileNumber"
                              name="mobileNumber"
                              label="Mobile Number"
                              className="form-control"
                              placeholder="Enter Number"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="firstName"
                              name="firstName"
                              label="Choose work region"
                              className="form-control"
                              placeholder="Choose"
                              type="text"
                              required
                            />
                          </div>
                        </Col>

                        <Col sm={4}>
                          <div className="mb-3">
                            <AvField
                              id="passport"
                              name="passport"
                              label="ID number / Passport"
                              className="form-control"
                              placeholder="Enter First"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="license"
                              name="license"
                              label="License disk  picture"
                              className="form-control"
                              placeholder="Enter Last"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="picture"
                              name="picture"
                              label="Driver license picture"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="document"
                              name="document"
                              label="Proof of address document"
                              className="form-control"
                              placeholder="Enter Number"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="upload"
                              name="upload"
                              label="Upload profile image"
                              className="form-control"
                              placeholder="Choose"
                              type="text"
                              required
                            />
                          </div>
                        </Col>
                      </Row>

                      <div className=" row mt-5">
                        <div className="col-12 text-center btn-color">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className=" text-center">
                <p>
                  Already have an account ?
                  <Link to="/login" className="fw-medium text-primary">
                    Login
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} Crafted with
                  <i className="mdi mdi-heart text-danger" /> by The united
                  programmers
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default DriverRegister
