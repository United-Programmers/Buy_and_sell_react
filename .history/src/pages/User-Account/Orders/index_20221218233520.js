import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { registerUser, apiError, registerUserFailed } from "../../store/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import logoSm from "../../assets/images/logo-sm.png";
import MetaTagComp from "components/MetaTag";


const Orders = () => {


    return (
        <React.Fragment>
            <MetaTagComp title_sco="Order page | Buy and sell" />


        </React.Fragment>
    )
}

export default Orders;
