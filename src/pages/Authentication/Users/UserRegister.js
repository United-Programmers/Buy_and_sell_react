import PropTypes from "prop-types"
import "./style.scss";
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { registerUser, apiError, registerUserFailed } from "../../../store/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MetaTagComp from "components/MetaTag";


const UserRegister = () => {


  return (
    <React.Fragment>
      <MetaTagComp title_sco="User register page | Buy and sell" />

      <div className="account-pages my-5 pt-sm-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={8}>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <div className="p-3">
                  <AvForm
                    className="form-horizontal mt-4 d-flex flex-column g-5"
                    onValidSubmit={(e, v) => {
                      handleValidSubmit(e, v)
                    }}
                  >
                    <Row className="mb-3 p-3">
                      <Col>
                        <div className="mb-3 myInput">
                          <AvField
                            name="firstname"
                            label="First name"
                            type="text"
                            required
                            placeholder="Enter First name"
                          />
                        </div>
                        <div className="mb-3 myInput">
                          <AvField
                            name="email"
                            label="Email Address"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>

                        <div className="mb-3 myInput">
                          <AvField
                            name="password"
                            label="Password"
                            type="password"
                            required
                            placeholder="Enter Password"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="mb-3 myInput">
                          <AvField
                            name="lastname"
                            label="Last name"
                            type="text"
                            required
                            placeholder="Enter Last name"
                          />
                        </div>

                        <div className="mb-3 myInput">
                          <AvField
                            name="phone"
                            label="Phone Number"
                            type="number"
                            required
                            placeholder="Enter Phone Number"
                          />
                        </div>
                        <div className="mb-3 myInput">
                          <AvField
                            name="password"
                            label="Confirm Password"
                            type="password"
                            required
                            placeholder="Confirm  Password"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3 ">
                      <Col className=" d-flex justify-content-center ">
                        <Button type="submit" btnType="my-default">
                          Register
                        </Button>
                      </Col>
                    </Row>
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
                © {new Date().getFullYear()}  Crafted with
                <i className="mdi mdi-heart text-danger" /> by The united programmers
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default UserRegister
