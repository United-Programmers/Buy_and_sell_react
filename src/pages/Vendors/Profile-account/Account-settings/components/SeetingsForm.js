import React from 'react'
import { Col, Container, Row , Card, CardBody, Button, Badge} from "reactstrap"
import { AvField } from "availity-reactstrap-validation"

function SeetingsForm() {
  return (
    <>
     <div style={{display:"flex"}} className='forms'>
     <div style={{width:"50pc"}} className="m-4 myInput">
      <AvField placeholder="Enter First Name" name="projectName" label="First Name" className="form-control" type="text" required />
     <AvField placeholder="Enter Last Name" name="projectName" label="Last Name" className="form-control" type="text" required />
    </div>
   <div style={{width:"50pc"}} className="m-4 myInput">
    <AvField placeholder="Enter Email" name="projectName" label="Email" className="form-control" type="text" required />
     <AvField placeholder="Enter Shop Name" name="projectName" label="Shop Name" className="form-control" type="text" required />
    </div>
    </div>
    </>
  )
}

export default SeetingsForm
