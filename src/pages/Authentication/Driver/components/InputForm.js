import React from 'react'
import { Row, Col } from "reactstrap"
import { AvField, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox, } from "availity-reactstrap-validation"

function InputForm() {
    return (
        <div>

            <Row>
                <Col md={4}>
                    <div className="mb-3 myInput">
                        <AvField
                            name="firstName"
                            label="First Name"
                            className="form-control"
                            placeholder="Enter First Name"
                            type="text"
                            required
                        />
                    </div>

                    <div className="mb-3 myInput">
                        <AvField
                            name="lastName"
                            label="Last name"
                            className="form-control"
                            placeholder="Enter Last name"
                            type="text"
                            required
                        />
                    </div>

                    <div className="mb-3 myInput">
                        <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter Email"
                            type="email"
                            required
                        />
                    </div>

                    <div className="mb-3 myInput">
                        <AvField
                            name="password"
                            label="Password"
                            className="form-control"
                            placeholder="Enter your password"
                            type="password"
                            required
                        />
                    </div>

                    <div className="mb-3 myInput">
                        <AvField
                            name="confirmPassword"
                            label="Confirm Password"
                            className="form-control"
                            placeholder="Confirm Password"
                            type="password"
                            required
                        />
                    </div>


                </Col>

                <Col md={4}>

                    <div className="mb-3 myInput">
                        <AvField
                            name="phoneNumber"
                            label="Mobile number"
                            className="form-control"
                            placeholder="Enter Mobile number"
                            type="number"
                            required
                        />
                    </div>

                    <div className="mb-3 myInput">
                        <AvField
                            name="workRegion"
                            label="Choose work region"
                            className="form-control"
                            placeholder="Enter Choose work region"
                            type="text"
                            required
                        />
                    </div>


                    <div className="mb-3 myInput">
                        <AvField
                            name="passportNumber"
                            label="ID Number / Passport"
                            className="form-control"
                            placeholder="Enter ID number / Passport"
                            type="text"
                            required
                        />
                    </div>

                    <div className="mb-3 myInput">
                        <AvField
                            name="licenseDisk"
                            label="License disk  picture"
                            className="form-control"
                            placeholder="Enter License disk  picture"
                            type="file"
                            required
                        />
                    </div>

                    <div className="mb-3 myInput">
                        <AvField
                            name="driverLicense"
                            label="Driver license picture"
                            className="form-control"
                            placeholder="Enter Driver license picture"
                            type="file"
                            required
                        />
                    </div>

                </Col>


                <Col md={4}>
                    <div className="mb-3 myInput">
                        <AvField
                            name="proofDoc"
                            label="Proof of address document"
                            className="form-control"
                            placeholder="Enter Proof of address document"
                            type="file"
                            required
                        />
                    </div>

                    {/* <div className="mb-3 myInput">
                        <AvField
                            name="profile"
                            label="Upload profile image"
                            className="form-control"
                            placeholder="Choose"
                            type="file"
                            required
                        />
                    </div> */}


                    <div className="mb-3 ">
                        <label >Android phone with version 7+?</label>
                        <AvRadioGroup inline name="radioExample2" required>
                            <AvRadio label="Yes" value="true" />
                            <AvRadio label="No" value="false" />
                        </AvRadioGroup>
                    </div>
                    <div className="mb-3 ">
                        <label> Consent to a criminal record check? </label>
                        <AvRadioGroup inline name="radioExample2" required>
                            <AvRadio label="Yes" value="true" />
                            <AvRadio label="No" value="false" />
                        </AvRadioGroup>
                    </div>
                    <div className="mb-3 ">
                        <label> Agreed to the terms and conditions? </label>
                        <AvRadioGroup inline name="radioExample2" required>
                            <AvRadio label="Yes" value="true" />
                        </AvRadioGroup>
                    </div>
                    <div className="mb-3 ">
                        <label> Agreed to the driver privacy policy? </label>
                        <AvRadioGroup inline name="radioExample2" required>
                            <AvRadio label="Yes" value="true" />
                        </AvRadioGroup>
                    </div>
                </Col>

            </Row>


        </div>
    )
}


export default InputForm

