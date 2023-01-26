import React from 'react'
import { Row, Col } from "reactstrap"
import { AvField, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"

function InputForm() {
    return (
        <Row className="mb-3 p-3">
            <Col>
                <div className="mb-3 myInput">
                    <AvField
                        name="firstName"
                        label="First name"
                        type="text"
                        required
                        placeholder="Enter First name"
                    />
                </div>
                <div className="mb-3 myInput">
                    <AvField
                        name="email"
                        label="Email Address"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                    />
                </div>

                <div className="mb-3 myInput">
                    <AvField
                        name="Password"
                        label="Password"
                        type="password"
                        required
                        placeholder="Enter Password"
                    />
                </div>

                <div className="mb-3 text-center" >
                    <AvCheckboxGroup inline name="true" required>
                        <AvCheckbox label="Agreed to our terms and conditions" value="true" />
                    </AvCheckboxGroup>
                </div>
            </Col>
            <Col>
                <div className="mb-3 myInput">
                    <AvField
                        name="lastName"
                        label="Last name"
                        type="text"
                        required
                        placeholder="Enter Last name"
                    />
                </div>

                <div className="mb-3 myInput">
                    <AvField
                        name="phoneNumber"
                        label="Phone Number"
                        type="number"
                        required
                        placeholder="Enter Phone Number"
                    />
                </div>
                <div className="mb-3 myInput">
                    <AvField
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        required
                        placeholder="Confirm  Password"
                    />
                </div>



            </Col>

        </Row>
    )
}

export default InputForm