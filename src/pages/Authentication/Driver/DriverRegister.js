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
                        <Col sm={4}>
                          <div className="mb-3 fs-6">
                            <AvRadioGroup
                              inline
                              name="vehicle"
                              label="Do you have a vehicle to drive?"
                              className="fs-6"
                              required
                              errorMessage="Pick one!"
                            >
                              <AvRadio label="Yes" value="Yes" checked />
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
                              <AvRadio label="Yes" value="Yes" checked />
                              <AvRadio label="No" value="No" />
                            </AvRadioGroup>
                          </div>
                          <div className="mb-3">
                            <AvRadioGroup
                              inline
                              name="record"
                              label="
Consent to a criminal record check?"
                              required
                              errorMessage="Pick one!"
                            >
                              <AvRadio label="Yes" value="Yes" checked />
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
                              <AvRadio label="Yes" value="Yes" checked />
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
                              <AvRadio label="Yes" value="Yes" checked />
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
                      </Row>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="mb-0">
                            By registering you agree to the Veltrix{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
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
