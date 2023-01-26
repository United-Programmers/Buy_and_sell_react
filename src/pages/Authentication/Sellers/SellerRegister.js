import PropTypes from "prop-types"
import "./style.scss"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { registerUser, apiError, registerUserFailed } from "../../../store/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MetaTagComp from "components/MetaTag";
import CustomBtn from "components/CustomBtn";
import { CiLogin } from "react-icons/ci";
import InputForm from "./components/InputForm";
import usePost from "../../../hooks/usePost";
import { RegisterMsg } from "../../../components/NotifyMessage";



const SellerRegister = () => {

  const { execute, pending, data } = usePost()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'auth/seller/signUp', isJSON = false, token = true;

    const userDate = JSON.stringify({
      "firstName": values.firstName,
      "lastName": values.lastName,
      "phoneNumber": values.phoneNumber,
      "agreed": values.true[0],
      "email": values.email,
      "password": values.password,
      "passwordConfirm": values.confirmPassword,
      "shopName": values.company, // or Company name
      "website": values.website,
      "socialMedia": values.socialMedia,
      "vatRegistered": values.vat
    });

    execute(endPoint, userDate, Method, RegisterMsg, token, isJSON)
  }


  return (
    <React.Fragment>
      <MetaTagComp title_sco="Sellers register page | Buy and sell" />
      <div className="account-pages my-5 pt-sm-5">
        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <h3 className="text-center">Register as a seller</h3>
                <div className="p-3">
                  <AvForm className="mt-2" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <InputForm />

                    <div className="text-center me-3">
                      <CustomBtn btnName="Submit" icon={<CiLogin size={28} />} Pending={pending} />
                    </div>
                  </AvForm>
                </div>

                <div className="mt-1 text-start">
                  <p> Already have an account ? <Link to="/login" className="fw-medium text-primary">  Login </Link>
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
