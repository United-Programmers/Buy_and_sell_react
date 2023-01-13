import React from 'react'
import { Col, Container, Row , Card, CardBody, Button, Badge} from "reactstrap"
import { AvField } from "availity-reactstrap-validation"

function PasswordForm() {
  return (
    <>
     <div style={{display:"flex"}} className='forms'>
    <div className="mb-3 myInput">
    <AvField placeholder="Enter Current Password" name="projectName" label="Current Password" className="form-control" type="text" required />
    </div>
     <div className="mb-3 myInput">
    <AvField placeholder="Enter New Password" name="projectName" label="New Password" className="form-control" type="text" required />
    </div>
      <div className="mb-3 myInput">
    <AvField placeholder="Enter password again" name="projectName" label="Confirm Password" className="form-control" type="text" required />
    </div>
    </div>
    </>
  )
}

export default PasswordForm
