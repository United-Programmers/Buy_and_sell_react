import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const VendorDashboard = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Dashboard page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-dashboard" defaultName="Dashboard" title="my dashboard" />


                    {/* WRITE YOUR CODE HERE */}
                    <h1 className="page-title"> Vendor Dashboard </h1>


                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default VendorDashboard