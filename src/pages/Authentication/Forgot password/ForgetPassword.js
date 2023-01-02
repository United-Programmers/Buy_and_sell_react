import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { userForgetPassword } from "../../../store/actions"
import CustomBtn from 'components/CustomBtn';
import { CiLogin } from 'react-icons/ci';

const ForgetPasswordPage = () => {


  return (
    <React.Fragment>
      <MetaTags>
        <title> Forget Password | Buy & sell</title>
      </MetaTags>

      <div className="page-content account-pages my-5 pt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8} lg={6} xl={4}>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <h5 className="text-center">Forgot password</h5>
                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                >
                  <div className="mb-3 myInput">
                    <AvField
                      name="email"
                      label="Email"
                      className="form-control"
                      placeholder="Enter email"
                      type="email"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <CustomBtn btnName="Submit" icon={<CiLogin size={28} />} />
                  </div>

                </AvForm>

                <div className="mt-4 text-center">
                  <p>Remember It ? <Link to="login" className="fw-medium text-primary"> Sign In here </Link> </p>
                </div>

              </CardBody>
            </Card>

          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}


export default ForgetPasswordPage
