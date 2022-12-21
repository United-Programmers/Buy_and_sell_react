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
                    <p >Vendor Account pages</p>


                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default VendorAccount