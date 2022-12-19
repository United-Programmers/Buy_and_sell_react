import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const Vendors = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Vendors page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendors" defaultName="Vendors" title="all vendors" />

                    <h1 className="page-title">Vendors pages</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Vendors