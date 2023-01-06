import React from 'react'
import { Col, Container, Row , Card, CardBody, Button, Badge} from "reactstrap"
import { AvField } from "availity-reactstrap-validation"

function ProductForm() {
  return (
    <div className="mb-3 myInput">
    <AvField placeholder="Enter project name" name="projectName" label="Project Name" className="form-control" type="text" required />
    </div>
  )
}

export default ProductForm