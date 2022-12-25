import React from 'react'
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Button, Row, Col, Card, CardBody } from "reactstrap"
import "../style.scss";
import { BsHouseDoor } from 'react-icons/bs';
import { MdOutlinePlace } from 'react-icons/md';
import { FaStreetView } from 'react-icons/fa';
import { RiBuildingLine } from 'react-icons/ri';
import { MdLocationCity } from 'react-icons/md';

function PasswordAccount() {
    return (
        <Card className='card-container card-container-3'>
            <CardBody className='body-wrapper-2'>
                <AvForm
                        className="form-horizontal mt-4"
                        onValidSubmit={(e, v) => {
                            handleValidSubmit(e, v)
                        }}
                        >
                        
                        <Row className='align-items-center justify-content-center'>
                            <Col lg>
                                <div className="mb-3 myInput">
                                    <fieldset className="secInput-2 color-1">
                                            <input className='' type='checkbox' name="checkbox"   />
                                            <label >Business</label>
                            
                                    </fieldset>
                                </div>
                            </Col>
                            <Col lg>
                                <div className="mb-3 myInput">
                                    <fieldset className="secInput-2 color-1">
                                            <input className='' type='checkbox' name="checkbox" />
                                            <label >Residential</label>
                            
                                    </fieldset>
                                </div>
                            </Col>
                        </Row> 
                        <Row className='align-items-center justify-content-center' >
                            <Col lg>
                                
                                <div className="mb-3 myInput wrap-input">
                                    <span className="icon"><MdOutlinePlace /></span>
                                    <AvField 
                                
                                    name="province"
                                    label="Province"
                                    className="form-control first-form"
                                    placeholder="Enter province"
                                    type="text"
                                    required
                                    />
                                </div>
                                <div className="mb-3 myInput wrap-input">
                                    <span className="icon"><MdLocationCity/></span>
                                    <AvField 
                                    name="city"
                                    label="City / Town"
                                    type="text"
                                    required
                                    placeholder="Enter city / town"
                                    />
                                </div>
                                <div className="mb-3 myInput wrap-input">
                                    <span className="icon"><MdOutlinePlace /></span>
                                    <AvField 
                                    name="Postalcode"
                                    label="Postal Code"
                                    type="number"
                                    required
                                    placeholder="Enter Postal Code"
                                    />
                                </div>
                            
                            </Col>
                            <Col lg>
                                
                                <div className="mb-3 myInput wrap-input">
                                    <span className="icon"><MdOutlinePlace /></span>
                                    <AvField 
                                
                                    name="suburb"
                                    label="Suburb"
                                    className="form-control first-form"
                                    placeholder="Enter suburb"
                                    type="text"
                                    required
                                    />
                                </div>
                                <div className="mb-3 myInput wrap-input">
                                    <span className="icon"><FaStreetView /></span>
                                    <AvField
                                    name="street"
                                    label="Street Address"
                                    type="text"
                                    required
                                    placeholder="Enter street address"
                                    />
                                </div>
                                <div className="mb-3 myInput wrap-input">
                                    <span className="icon"><RiBuildingLine /></span>
                                    <AvField
                                    name="building"
                                    label="Complex / Building"
                                    type="text"
                                    required
                                    placeholder="Enter complex / building"
                                    />
                                </div>
                                
                            </Col>
                           
                        </Row>
                        <Row className="align-items-center justify-content-center mb-3 mt-4">
                            <Col  className="text-end">
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

export default PasswordAccount






