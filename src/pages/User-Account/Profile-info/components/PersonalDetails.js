import React from 'react'
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Button, Row, Col, Card, CardBody } from "reactstrap"
import "../style.scss";
import { FaUser } from 'react-icons/fa';
import { MdOutlineMarkEmailRead } from 'react-icons/md';


function PersonalDetails() {

    return (
        <Card className='card-container'>
          <CardBody className='body-wrapper'>
              <AvForm
                        className="form-horizontal mt-4"
                        onValidSubmit={(e, v) => {
                          handleValidSubmit(e, v)
                        }}
                      >
                        <div className="mb-3 myInput">
                          <span className="icon">< MdOutlineMarkEmailRead/></span>
                          <AvField  
                           
                            name="email"
                            label="Email Address"
                            className="form-control first-form"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>

                        <div className="mb-3 myInput">
                        <span className="icon">< FaUser/></span>
                          <AvField 
                            name="Phone Number"
                            label="Phone Number"
                            type="number"
                            required
                            placeholder="Enter Phone Number"
                          />
                        </div>

                        <Row className="mb-3">
                          <Col sm={6} className="text-end">
                            <button   type="submit" btnType="my-default" className='btn-update'>
                              Update
                            </button>
                          </Col>
                        </Row>
                      </AvForm>
          </CardBody>
        </Card>
    )
}

export default PersonalDetails