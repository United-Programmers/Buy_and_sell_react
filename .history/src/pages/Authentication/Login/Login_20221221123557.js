import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState } from "react"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { loginUser, apiError } from "../../../store/actions"
import Button from "components/Common/Button/Button"
import "./style.scss"

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Buy & sell</title>
      </MetaTags>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <CardBody className="p-4">
                  <h3 className="text-center">Login</h3>
                  <div className="p-3">
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      <div className="mb-3 myInput">
                        <AvField
                          name="email"
                          label="Email Address"
                          value={email}
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={e => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3 myInput">
                        <AvField
                          name="password"
                          label="Password"
                          value={password}
                          type="password"
                          required
                          onChange={e => setPassword(e.target.value)}
                          placeholder="Enter Password"
                        />
                      </div>

                      <Row className="mb-3">
                        <Col sm={6}>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </Col>
                        <Col sm={6} className="text-end">
                          <Button type="submit" btnType="my-default">
                            Login
                          </Button>
                        </Col>
                      </Row>

                      <Row className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgot-password">
                            <i className="mdi mdi-lock"></i> Forgot your
                            password?
                          </Link>
                        </div>
                      </Row>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?
                  <Link to="register" className="fw-medium text-primary">
                    Signup now
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

export default Login
