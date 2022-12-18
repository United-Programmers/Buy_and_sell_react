import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const Messages = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Messages page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/messages" defaultName="Messages" title="all Messages" />

                    <h1 className="page-title">Messages pages</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Messages