import PropTypes from "prop-types"
import "./style.scss"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"
import { registerUser, apiError, registerUserFailed } from "../../../store/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MetaTagComp from "components/MetaTag";
import CustomBtn from "components/CustomBtn";
import { CiLogin } from "react-icons/ci";


const SellerRegister = () => {


  return (
    <React.Fragment>
      <MetaTagComp title_sco="Sellers register page | Buy and sell" />
      <div className="account-pages my-5 pt-sm-5">
        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <h5 className="text-center">Register as a seller</h5>
                <div className="p-3">
                  <AvForm
                    className="mt-2"
                    onValidSubmit={(e, v) => {
                      handleValidSubmit(e, v)
                    }}
                  >
                    <Row>
                      <Col sm={4}>
                        <div className="mb-3 myInput">
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
                        <div className="mb-3 myInput">
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
                        <div className="mb-3 myInput">
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
                        <div className="mb-3 myInput">
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
                        <div className="mb-3 myInput">
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
                        <div className="mb-3 myInput">
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
                        <div className="mb-3 myInput">
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
                        <div className="mb-3 myInput" >
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
                      </Col>

                      <div className="mb-3 mt-3 radioInput">
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
                    </Row>

                    <div className="text-center me-3">
                      <CustomBtn btnName="Submit" icon={<CiLogin size={28} />} />
                    </div>
                  </AvForm>
                </div>

                <div className="mt-1 text-start">
                  <p>
                    Already have an account ?
                    <Link to="/login" className="fw-medium text-primary">
                      Login
                    </Link>
                  </p>
                </div>

              </CardBody>
            </Card>

          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default SellerRegister;
