import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const AccountSettings = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Vendor account settings page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-account-settings" defaultName="Account Settings" title="my account settings" />


                    {/* WRITE YOUR CODE HERE */}
                    <h1 className="page-title"> Account Settings</h1>


                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default AccountSettings