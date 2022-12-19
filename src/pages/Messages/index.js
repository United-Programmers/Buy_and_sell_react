import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const Notification = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Notifications page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/user-message" defaultName="Message" title="my messages" />

                    <h1 className="page-title">Notification page</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Notification