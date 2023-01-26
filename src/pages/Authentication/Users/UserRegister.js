import PropTypes from "prop-types"
import "./style.scss";
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { registerUser, apiError, registerUserFailed } from "../../../store/actions"
import { Link } from "react-router-dom"
import MetaTagComp from "components/MetaTag";
import CustomBtn from "components/CustomBtn";
import { CiLogin } from "react-icons/ci";
import InputForm from "./components/InputForm";
import usePost from "../../../hooks/usePost";
import { RegisterMsg } from "../../../components/NotifyMessage";


const UserRegister = () => {

  const { execute, pending, data } = usePost()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'auth/user/signUp', isJSON = false, token = true;

    const userDate = JSON.stringify({
      "firstName": values.firstName,
      "lastName": values.lastName,
      "phoneNumber": values.phoneNumber,
      "agreed": values.true[0],
      "email": values.email,
      "password": values.Password,
      "passwordConfirm": values.confirmPassword,
    });

    execute(endPoint, userDate, Method, RegisterMsg, token, isJSON)
  }


  return (
    <React.Fragment>
      <MetaTagComp title_sco="User register page | Buy and sell" />

      <div className="page-content account-pages my-5 pt-sm-5">
        <Row className="justify-content-center mt-5">
          <Col md={8} lg={6} xl={8}>
            <Card className="overflow-hidden">
              <CardBody className="p-4">
                <h5 className="text-center">Register as a buyer</h5>
                <div className="p-3">
                  <AvForm className="form-horizontal mt-4 d-flex flex-column"
                    onValidSubmit={(e, v) => handleValidSubmit(e, v)}>

                    <InputForm />

                    <div className="text-center">
                      <CustomBtn btnName="Submit" icon={<CiLogin size={28} />} Pending={pending} />
                    </div>

                    <div className="text-start">
                      <p>
                        Already have an account ?
                        <Link to="/login" className="fw-medium text-primary"> Login </Link>
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

export default UserRegister
