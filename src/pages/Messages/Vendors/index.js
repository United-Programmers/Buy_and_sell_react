import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const VendorMessage = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Message page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-message" defaultName="Message" title="my messages" />

                    <h1 className="page-title">VendorMessage page</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default VendorMessage