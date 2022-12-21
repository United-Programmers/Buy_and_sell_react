import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import { Link } from "react-router-dom";

const VendorAccount = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Vendor page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-account" defaultName="Account" title="my account" />


                    {/* WRITE YOUR CODE HERE */}

                    <p> <Link to="/"> Dashboard </Link> </p>
                    <p> <Link to="/"> Add new products </Link> </p>
                    <p> <Link to="/"> My Products </Link> </p>
                    <p> <Link to="/"> Orders </Link> </p>
                    <p> <Link to="/"> Account settings </Link> </p>

                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default VendorAccount