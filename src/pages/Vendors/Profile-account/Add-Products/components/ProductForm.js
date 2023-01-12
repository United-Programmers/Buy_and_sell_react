import React from 'react'
import { Col, Container, Row , Card, CardBody, Button, Badge} from "reactstrap"
import { AvField } from "availity-reactstrap-validation"
import "../style.scss"

function ProductForm() {
  return (
    <>
    <div style={{display:"flex"}} className='forms'>
    
       <div style={{width:"20pc"}} className="m-4 myInput">
    <AvField placeholder="Enter number of Stocks" name="projectName" label="Stock" className="form-control" type="text" required />
    <AvField placeholder="Enter Price Discount" name="projectName" label="Price Discount" className="form-control" type="text" required />
    <AvField placeholder="Enter Age rangee" name="projectName" label="Age range" className="form-control" type="text" required />
    <AvField placeholder="Enter Summary" name="projectName" label="Summary" className="form-control" type="text" required />
    <AvField placeholder="Enter Product warranty" name="projectName" label="Product warranty" className="form-control" type="text" required />
    <AvField placeholder="Enter Colors" name="projectName" label="Colors" className="form-control" type="text" required />
    </div>
      <div className="m-4 myInput" style={{width:"20pc"}}>
    <AvField placeholder="Enter Price" name="projectName" label="Price" className="form-control" type="text" required />
    <AvField placeholder="Enter  Type" name="projectName" label=" Type" className="form-control" type="text" required />
    <AvField placeholder="Enter Gender type" name="projectName" label="Gender type" className="form-control" type="text" required />
    <AvField placeholder="Enter  Stock city" name="projectName" label=" Stock city" className="form-control" type="text" required />
    <AvField placeholder="Enter Size" name="projectName" label="size" className="form-control" type="text" required />
    <AvField placeholder="Enter  Bar Code" name="projectName" label=" Bar Code" className="form-control" type="text" required />
    </div>
    <div className="m-4 myInput" style={{width:"20pc"}}>
    <AvField placeholder="Enter Manufacturer" name="projectName" label="Manufacture by" className="form-control" type="text" required />
    <AvField placeholder="Product images " name="projectName" label="Product images " className="form-control" type="text" required />
    <AvField placeholder="Enter Category" name="projectName" label="Category" className="form-control" type="text" required />
    <AvField placeholder="Enter Product Name" name="projectName" label="Product Name" className="form-control" type="text" required />
    <AvField placeholder="Enter Dimensions" name="projectName" label="Dimensions" className="form-control" type="text" required />
    <AvField placeholder="Enter Weight" name="projectName" label="Weight" className="form-control" type="text" required />
    </div>
    </div>
    <div className="m-4 myInput textArea">
      <textarea   rows="4" cols="147" placeholder='Description...'/>
    </div>
    </>
  )
}

export default ProductForm
