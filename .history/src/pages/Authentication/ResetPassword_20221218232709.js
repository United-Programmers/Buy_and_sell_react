import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { registerUser, apiError, registerUserFailed } from "../../store/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import logoSm from "../../assets/images/logo-sm.png";
import MetaTagComp from "components/MetaTag";


const ResetPassword = () => {


    return (
        <React.Fragment>
            <MetaTagComp title_sco="Sellers register page | Buy and sell" />

            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={4}>
                            <Card className="overflow-hidden">
                                <CardBody className="p-4">
                                    <div className="p-3">
                                        <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

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

                                            <div className="mb-3 row">
                                                <div className="col-12 text-end">
                                                    <button
                                                        className="btn btn-primary w-md waves-effect waves-light"
                                                        type="submit"
                                                    >
                                                        Reset password
                                                    </button>
                                                </div>
                                            </div>
                                        </AvForm>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
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

export default ResetPassword;
