import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import "../style.scss"
function ProfileForm() {
  return (
    <>
    <div style={{display:"flex"}} className='forms'>
    <div style={{width:"20pc"}} className="m-4 myInput">
    <AvField placeholder="Enter number of Stocks" name="projectName" label="Stock" className="form-control" type="text" required />
    <AvField placeholder="Enter Price Discount" name="projectName" label="Price Discount" className="form-control" type="text" required />
    <AvField placeholder="Enter Age rangee" name="projectName" label="Age range" className="form-control" type="text" required />
    </div>
    <div style={{width:"20pc"}} className="m-4 myInput">
    <AvField placeholder="Enter number of Stocks" name="projectName" label="Stock" className="form-control" type="text" required />
    <AvField placeholder="Enter Price Discount" name="projectName" label="Price Discount" className="form-control" type="text" required />
    <AvField placeholder="Enter Age rangee" name="projectName" label="Age range" className="form-control" type="text" required />
    </div>
    </div>
    <div  className="m-4 myInput cc">
      <AvField style={{width:"42.5pc"}} placeholder="Enter number of Stocks" name="projectName" label="Stock" className="form-control lastIn" type="text" required />
      </div>
    </>
  )
}

export default ProfileForm
