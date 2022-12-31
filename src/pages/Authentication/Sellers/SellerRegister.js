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

const SellerRegister = () => {
  return (
    <React.Fragment>
      <MetaTagComp title_sco="Sellers register page | Buy and sell" />

      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <h1 className="text-center">Create Account</h1>
            <Col>
              <Card className="overflow-hidden">
                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="mt-2"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      <Row>
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
                              id="website"
                              name="website"
                              label="Website"
                              className="form-control"
                              placeholder="Enter Website"
                              type="text"
                              required
                            />
                          </div>
                        </Col>

                        <Col sm={4}>
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
                              id="phoneNumber"
                              name="phoneNumber"
                              label="Phone Number"
                              className="form-control"
                              placeholder="Enter email"
                              type="number"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="social"
                              name="social"
                              label="Social"
                              className="form-control"
                              placeholder="Enter Social"
                              type="text"
                              required
                            />
                          </div>
                        </Col>

                        <Col sm={4} className="radio-flex">
                          <div className="mb-3">
                            <AvField
                              id="company"
                              name="company"
                              label="Company Name"
                              className="form-control"
                              placeholder="Enter Company"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <AvField
                              id="category"
                              name="category"
                              label="Category"
                              className="form-control"
                              placeholder="Enter Category"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-3 ">
                            <AvRadioGroup
                              inline
                              name="vat"
                              label="Are you VAT registered ?"
                              required
                            >
                              <AvRadio label="Yes" value="Yes" />
                              <AvRadio label="No" value="No" />
                            </AvRadioGroup>
                          </div>
                        </Col>
                      </Row>

                      <div className="mb-1 row">
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
              <div className="mt-1 text-center">
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

export default SellerRegister
