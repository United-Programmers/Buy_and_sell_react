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
import "./style.scss";
import { BsFillPersonFill } from "react-icons/bs";
import InputForm from "./components/InputForm";
import usePost from "../../../hooks/usePost";


const DriverRegister = () => {

    const { execute, pending, data } = usePost()

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        const Method = 'POST', endPoint = 'auth/river/signUp', isJSON = false, token = true;

        const userDate = JSON.stringify({
            "firstName": values.firstName,
            "lastName": values.lastName,
            "phoneNumber": values.phoneNumber,
            "agreed": values.true[0],
            "email": values.email,
            "workRegion": values.workRegion,
            "passportNumber": values.passportNumber,
            "licenseDisk": values.licenseDisk,
            "driverLicense": values.driverLicense,
            "proofDoc": values.proofDoc,
            "password": values.Password,
            "passwordConfirm": values.confirmPassword,
        });

        execute(endPoint, userDate, Method, RegisterMsg, token, isJSON)
    }



    return (
        <React.Fragment>
            <MetaTagComp title_sco="Driver register page | Buy and sell" />

            <div className="page-content account-pages my-5 pt-sm-5">
                <Row className="justify-content-center mt-5 ">
                    <Col md={12} lg={6} xl={10}>
                        <Card className="overflow-hidden">
                            <CardBody>
                                <h3 className="text-center">Register as a driver</h3>

                                <div className="p-3">
                                    <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                        <InputForm />

                                    </AvForm>
                                </div>

                                <div className="text-center">
                                    <CustomBtn btnName="Submit" icon={<CiLogin size={28} />} Pending={pending} />
                                </div>

                                <div className="text-center mt-4">
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

export default DriverRegister;
