import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { userForgetPassword } from "../../store/actions"
import logoSm from "../../assets/images/logo-sm.png";

const ForgetPasswordPage = () => {


  return (
    <React.Fragment>
      <MetaTags>
        <title> Forget Password | Buy & sell</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <CardBody className="p-4">
                  <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                  >
                    <div className="mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <Row className="mb-3">
                      <Col className="text-end">
                        <button
                          className="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Forgot password
                        </button>
                      </Col>
                    </Row>
                  </AvForm>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>Remember It ? <Link to="login" className="fw-medium text-primary"> Sign In here </Link> </p>
                <p>
                  © {new Date().getFullYear()}  Crafted with
                  <i className="mdi mdi-heart text-danger" /> by The united programmers
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func
}

const mapStatetoProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword
  return { forgetError, forgetSuccessMsg }
}

export default withRouter(
  connect(mapStatetoProps, { userForgetPassword })(ForgetPasswordPage)
)
