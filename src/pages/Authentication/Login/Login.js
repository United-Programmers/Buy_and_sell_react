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
import PageWrapper from "components/PageWrapper"
import CustomBtn from "components/CustomBtn"
import { CiLogin } from "react-icons/ci"

const Login = () => {

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Buy & sell</title>
      </MetaTags>

      <div className="page-content account-pages my-5 pt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8} lg={6} xl={4}>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <h5 className="text-center">Login</h5>
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
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>

                    <div className="mb-3 myInput">
                      <AvField
                        className="form-control"
                        name="password"
                        label="Password"
                        type="password"
                        required
                        placeholder="Enter Password"
                      />
                    </div>

                    <div className="text-end me-3">
                      <CustomBtn btnName="Login" icon={<CiLogin size={28} />} />
                    </div>

                    <Row className="mt-2 mb-0 row">
                      <div className="col-12 mt-4">
                        <Link to="/forgot-password">
                          <i className="mdi mdi-lock"></i> Forgot your
                          password?
                        </Link>
                      </div>
                    </Row>

                    <div className="mt-3">
                      <p>
                        Don&#39;t have an account ?
                        <Link to="/user-register" className="fw-medium text-primary">
                          Signup now
                        </Link>
                      </p>

                    </div>

                  </AvForm>
                </div>
              </CardBody>
            </Card>

          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Login
