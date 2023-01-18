import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button, Card } from 'reactstrap';
import {BsFillPersonCheckFill} from 'react-icons/bs';
import "../style.scss"
import { GoLock } from 'react-icons/go';
import { MdLocationCity } from 'react-icons/md';
import CustomBtn from 'components/CustomBtn';

import { AvForm, AvField } from "availity-reactstrap-validation"









function AccountUpload() {
  return (
    <>
      {/* PasswordFormStart */}

      <Card className="card-up-form">
                    <Row>
                        <Col>
                          
                        <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                    }}
                >
                 
                    <Row className='account__header'>
                       
                      
                        
                            <Col xl>
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
                            </Col>
                            <Col xl>
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
                            </Col>
                            <Col xl>
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

                    <Row className='text-center btn__grp mt-md-4'><Col><Button className="update__btn btn-block rounded-pill">Update address</Button></Col></Row>

                </AvForm>
                            
                        </Col>
                    </Row>
                </Card>
      {/* PasswordFormEnd */}
    </>
  )
}

export default AccountUpload