import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { registerUser, apiError, registerUserFailed } from "../../../store/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MetaTagComp from "components/MetaTag";
import CustomBtn from "components/CustomBtn"
import { CiLogin } from "react-icons/ci"


const DriverRegister = () => {


    return (
        <React.Fragment>
            <MetaTagComp title_sco="Driver register page | Buy and sell" />

            <div className="page-content account-pages my-5 pt-sm-5">
                    <Row className="justify-content-center mt-5">
                        <Col md={8} lg={6} xl={4}>
                            <Card className="overflow-hidden">
                                <CardBody className="p-4">
                                <h5 className="text-center">Register as an admin</h5>
                                    <div className="p-3">
                                        <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

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

                                            <div className="text-center me-3">
                                                <CustomBtn btnName="Submit" icon={<CiLogin size={28} />} />
                                            </div>
                                        </AvForm>
                            <div className="mt-5 text-start">
                                <p>
                                    Already have an account ?
                                    <Link to="/login" className="fw-medium text-primary">
                                        Login
                                    </Link>
                                </p>
                            </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
            </div>
        </React.Fragment>
    )
}

export default DriverRegister;
