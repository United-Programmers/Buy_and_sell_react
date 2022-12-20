import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const AdminMessage = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Message page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/admin-message" defaultName="Message" title="my messages" />

                    <h1 className="page-title">AdminMessage page</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default AdminMessage