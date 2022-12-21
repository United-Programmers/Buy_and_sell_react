import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const VendorAccount = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Vendor page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-account" defaultName="Account" title="my account" />


                    {/* WRITE YOUR CODE HERE */}
                    <h1 className="page-title">Write your code here</h1>


                    <Link to="/"> Dashboard </Link>
                    <Link to="/"> Add new products </Link>
                    <Link to="/"> My Products </Link>
                    <Link to="/"> Orders </Link>
                    <Link to="/"> Account settings </Link>


                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default VendorAccount