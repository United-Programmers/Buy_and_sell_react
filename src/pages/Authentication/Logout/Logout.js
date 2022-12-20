import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import "./style.scss"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { loginUser, apiError } from "../../../store/actions"

const Logout = () => {


  return (
    <React.Fragment>
      <MetaTags>
        <title>Logout | Buy & sell</title>
      </MetaTags>
      <div className='acount-pages'>

        <div className='logout__card'>
          <Card className='p-3 text-center border rounded p-5'>
            <h4 className='py-1'>Are you sure you want to logout?</h4>
              <Row className="justify-content-center py-4 ">
                <button className='btn  btn-primary w-25 me-5'>Logout</button>
                <button className='btn btn-secondary w-25'>cancel</button>
              </Row>           
            <Link>Do you wanna go back?</Link>
          </Card>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Logout