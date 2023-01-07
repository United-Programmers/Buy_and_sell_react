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


const DriverRegister = () => {


    return (
        <React.Fragment>
            <MetaTagComp title_sco="Driver register page | Buy and sell" />

            <div style={{marginRight:"160pc"}} className=" account-pages my-5 pt-sm-5 ">
                    <Row className="justify-content-center mt-5 ">
                        <Col md={8} lg={6} xl={4}>
                            <Card className=" overflow-hidden con">
                                <CardBody className=" ">
                                {/* <h5 className="text-center">Register as an admin</h5> */}
                                    <div className="p-3">
                                        <div className="three">
                                         <div style={{marginTop:"30px"}} className="first">
                                            <div className="inputs">
                                            
                                            <div>
                                            <h5>Do you have a vehicle to Drive?</h5>
                                            
                                             <input type="radio" value="Yes" name="gender" /> Yes
                                             <input style={{marginLeft:"10pc"}} type="radio" value="No" name="gender" /> No
                                             </div>
                                             <div>
                                             <h5>Android phone with version 7+?</h5>
                                             <input type="radio" value="Yes" name="s" /> Yes
                                             
                                             <input type="radio" value="No"style={{marginLeft:"10pc"}} name="s" /> No
                                             </div>
                                             <div>
                                             <h5>Consent to a criminal record check?</h5>
                                             <input type="radio" value="Yes" name="q" /> Yes
                                             <input type="radio" style={{marginLeft:"10pc"}} value="No" name="q" /> No
                                             </div>
                                             <div>
                                             <h5>Agreed to the terms and conditions?</h5>
                                             <input type="radio" value="Yes" name="w" /> Yes
                                             <input type="radio" value="No" style={{marginLeft:"10pc"}} name="w" /> No
                                             </div>
                                             <div>
                                             <h5>Agreed to the driver privacy policy?</h5>
                                             <input type="radio" value="Yes" name="e" /> Yes
                                             <input type="radio" style={{marginLeft:"10pc"}} value="No" name="e" /> No
                                            </div>
                                            </div>
                                            </div>  
                                                 
                                        <div className="second">
                                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="First Name"
                                                    className="form-control"
                                                    placeholder="Enter First Name"
                                                    type="text"
                                                    required
                                                />
                                            </div>

                                        </AvForm>
                                                                              <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="Last name"
                                                    className="form-control"
                                                    placeholder="Enter Last name"
                                                    type="text"
                                                    required
                                                />
                                            </div>

                                        </AvForm>

                                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="Email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                    type="email"
                                                    required
                                                />
                                            </div>

                                        </AvForm>

                                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="Mobile number"
                                                    className="form-control"
                                                    placeholder="Enter Mobile number"
                                                    type="text"
                                                    required
                                                />
                                            </div>

                                        </AvForm>

                                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="Choose work region"
                                                    className="form-control"
                                                    placeholder="Enter Choose work region"
                                                    type="text"
                                                    required
                                                />
                                            </div>

                                        </AvForm>


                                        </div>

                                        <div className="third">
                                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="ID number / Passport"
                                                    className="form-control"
                                                    placeholder="Enter ID number / Passport"
                                                    type="text"
                                                    required
                                                />
                                            </div>

                                        </AvForm>
                                   
                                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="License disk  picture"
                                                    className="form-control"
                                                    placeholder="Enter License disk  picture"
                                                    type="email"
                                                    required
                                                />
                                            </div>

                                        </AvForm>
                                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="Driver license picture"
                                                    className="form-control"
                                                    placeholder="Enter Driver license picture"
                                                    type="text"
                                                    required
                                                />
                                            </div>

                                        </AvForm>
                                      <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="Proof of address document"
                                                    className="form-control"
                                                    placeholder="Enter Proof of address document"
                                                    type="text"
                                                    required
                                                />
                                            </div>

                                        </AvForm>

                                         <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="mb-3 myInput">
                                                <AvField
                                                    id="email"
                                                    name="email"
                                                    label="Upload profile image"
                                                    className="form-control"
                                                    placeholder="Choose"
                                                    type="file"
                                                    required
                                                />
                                            </div>

                                        </AvForm>

                                        </div>
                                        </div>
                                          <div style={{marginLeft:"50pc"}} className="but" >
                                                <CustomBtn style={{marginRight:"30pc"}} variant="primary" size="lg" btnName="Create Account"  />
                                            </div>
                                        
                            <div style={{marginRight:"30pc"}} className="mt-5 text-center">
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
