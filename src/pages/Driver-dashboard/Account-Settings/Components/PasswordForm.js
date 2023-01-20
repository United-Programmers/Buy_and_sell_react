import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import {BsFillPersonCheckFill} from 'react-icons/bs';

function PasswordForm() {
  return (
    <>
      {/* PasswordFormStart */}

      <div className='p-word-container'>
        <div className='c-password password'>
          <p>Current Passowrd</p>
          <input type='password' placeholder='Current password' className='pf-input' ></input>
        </div>
        <div className='c-password password'>
          <p>New Passowrd</p>
          <input type='password' placeholder='New password' className='pf-input' ></input>
        </div>
        <div className='c-password password'>
          <p>Confirm Passowrd</p>
          <input type='password' placeholder='Cornfirm password' className='pf-input' ></input>
        </div>

      </div>
      <div className='update-pword-container'>
        <button className='update-pword'>Update Password</button>
      </div>

      {/* <Container>
        <Row>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Current Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Current password" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">New Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Current password" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Confirm New Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Current password" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Button color="#C55BE0">Update Password</Button>
        </Row>
      </Container> */}

      {/* PasswordFormEnd */}
    </>
  )
}

export default PasswordForm