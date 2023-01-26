import React from 'react'
import { Row, Col } from "reactstrap"
import { AvField, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"

function InputForm() {
  return (
    <Row>
      <Col sm={4}>
        <div className="mb-3 myInput">
          <AvField
            id="firstName"
            name="firstName"
            label="First Name"
            className="form-control"
            placeholder="Enter your first name"
            type="text"
            required
          />
        </div>
        <div className="mb-3 myInput">
          <AvField
            id="email"
            name="email"
            label="Address email"
            className="form-control"
            placeholder="Enter your email"
            type="email"
            required
          />
        </div>
        <div className="mb-3 myInput">
          <AvField
            id="social"
            name="password"
            label="Password"
            className="form-control"
            placeholder="Password"
            type="password"
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
            placeholder="Enter your last name"
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
            placeholder="Enter your phone number"
            type="number"
            required
          />
        </div>
        <div className="mb-3 myInput">
          <AvField
            id="website"
            name="confirmPassword"
            label="Confirm Password"
            className="form-control"
            placeholder="Confirm Password"
            type="password"
            required
          />
        </div>
      </Col>

      <Col sm={4} className="radio-flex">
        <div className="mb-3 myInput">
          <AvField
            id="company"
            name="company"
            label="Company Name / Individual"
            className="form-control"
            placeholder="Enter Company"
            type="text"
            required
          />
        </div>
        <div className="mb-3 myInput" >
          <AvField
            id="category"
            name="website"
            label="Website (not required)"
            className="form-control"
            placeholder="https://www.amazon.com"
            type="text"
          />
        </div>
        <div className="mb-3 myInput" >
          <AvField
            id="category"
            name="socialMedia"
            label="Social Media"
            className="form-control"
            placeholder="https://www.facebook.com/username"
            type="text"
            required
          />
        </div>
      </Col>

      <div className="mb-3 mt-3 radioInput">
        <label htmlFor="">Are you VAT registered ?</label>
        <AvRadioGroup
          inline
          name="vat"
          // label="Are you VAT registered ?"
          required
        >
          <AvRadio label="Yes" value="true" />
          <AvRadio label="No" value="false" />
        </AvRadioGroup>
      </div>

      <div className="mb-3 " >
        <AvCheckboxGroup inline name="true" required>
          <AvCheckbox label="Agreed to our terms and conditions" value="true" />
        </AvCheckboxGroup>
      </div>

    </Row>
  )
}

export default InputForm