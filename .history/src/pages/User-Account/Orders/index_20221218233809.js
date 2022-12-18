import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const Orders = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Orders page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/orders" defaultName="Products" title="all product" />

                    <h1 className="page-title">Orders pages</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Orders