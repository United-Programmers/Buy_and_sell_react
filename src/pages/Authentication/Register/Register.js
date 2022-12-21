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

const Register = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState(347351927)
  const [confirmPassword, setConfirmPassword] = useState("")

  function handleValidSubmit() {
    let result = {
      password,
      email,
      firstname,
      lastname,
      phone,
      confirmPassword,
    }
    console.log(result)
  }
  return (
    <React.Fragment>
      <MetaTags>
        <title>Register | Buy & sell</title>
      </MetaTags>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={8} xl={8}>
              <Card className="overflow-hidden">
                <CardBody className="p-4">
                  <h4 className="text-center">Creat Account</h4>
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
                            value={firstname}
                            type="text"
                            required
                            onChange={e => setFirstname(e.target.value)}
                            placeholder="Enter First name"
                          />
                        </div>
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
                      </Col>
                      <Col>
                        <div className="mb-3 myInput">
                          <AvField
                            name="lastname"
                            label="Last name"
                            value={lastname}
                            type="text"
                            required
                            onChange={e => setLastname(e.target.value)}
                            placeholder="Enter Last name"
                          />
                        </div>

                        <div className="mb-3 myInput">
                          <AvField
                            name="phone"
                            label="Phone Number"
                            value={phone}
                            type="number"
                            required
                            onChange={e => setPhone(+e.target.value)}
                            placeholder="Enter Phone Number"
                          />
                        </div>
                        <div className="mb-3 myInput">
                          <AvField
                            name="password"
                            label="Confirm Password"
                            value={confirmPassword}
                            type="password"
                            required
                            onChange={e => setConfirmPassword(e.target.value)}
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
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?
                  <Link to="login" className="fw-medium text-primary">
                    Login now
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

export default Register
