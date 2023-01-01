import React from 'react'
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Button, Row, Col, Card, CardBody } from "reactstrap"
import "../style.scss";
import { GoLock } from 'react-icons/go';
import { MdLocationCity } from 'react-icons/md';
import CustomBtn from 'components/CustomBtn';

function PasswordAccount() {
    return (
        <div className='card-container card-container-2'>
            <CardBody className='body-wrapper body-wrapper-2'>
                <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                    }}
                >
                    <Row>
                        <Col md>
                            <div className="mb-3 myInput inCheckbox"> 
                                    <input
                                        name="Business"
                                        type="checkbox"    
                                    />
                                    <label className="checkname" >Residential</label>
                                </div>
                        </Col>
                        <Col md>
                            <div className="mb-3 myInput inCheckbox"> 
                                    <input
                                        name="Business"
                                        type="checkbox"    
                                    />
                                    <label className="checkname" >Business</label>
                                </div>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md>
                            <div className="mb-3 myInput">
                                <span className="icon-one"><GoLock /></span>
                                <AvField
                                    name="password"
                                    label="Current password"
                                    className="form-control first-form"
                                    placeholder="Enter old password"
                                    type="Password"
                                    required
                                />
                            </div>
                            <div className="mb-3 myInput">
                                <span className="icon-one"><GoLock /></span>
                                <AvField
                                    name="Password"
                                    label="New password"
                                    type="password"
                                    required
                                    placeholder="Enter new password"
                                />
                            </div>
                            <div className="mb-3 myInput">
                                <span className="icon-one"><GoLock /></span>
                                <AvField
                                    name="Password"
                                    label="Confirm password"
                                    type="Password"
                                    required
                                    placeholder="Enter Password"
                                />
                            </div>
                        </Col>
                        <Col md>
                            <div className="mb-3 myInput">
                                <span className="icon-one"><GoLock /></span>
                                <AvField
                                    name="password"
                                    label="Current password"
                                    className="form-control first-form"
                                    placeholder="Enter old password"
                                    type="Password"
                                    required
                                />
                            </div>
                            <div className="mb-3 myInput">
                                <span className="icon-one"><GoLock /></span>
                                <AvField
                                    name="Password"
                                    label="New password"
                                    type="password"
                                    required
                                    placeholder="Enter new password"
                                />
                            </div>
                            <div className="mb-3 myInput">
                                <span className="icon-one"><GoLock /></span>
                                <AvField
                                    name="Password"
                                    label="Confirm password"
                                    type="Password"
                                    required
                                    placeholder="Enter Password"
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row className='text-center btn__grp mt-md-4'><Col><Button className="update__btn btn-block">Update address</Button></Col></Row>

                </AvForm>
            </CardBody>
        </div>
    )
}
export default PasswordAccount