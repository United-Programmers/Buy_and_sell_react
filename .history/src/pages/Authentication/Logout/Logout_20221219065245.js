import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { loginUser, apiError } from "../../store/actions"
import logoSm from "../../assets/images/logo-sm.png";

const Logout = () => {


  return (
    <React.Fragment>
      <MetaTags>
        <title>Logout | Buy & sell</title>
      </MetaTags>

      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <h1> Logout </h1>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Logout