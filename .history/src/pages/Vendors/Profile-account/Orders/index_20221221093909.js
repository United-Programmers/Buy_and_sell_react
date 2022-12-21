import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const MyOrders = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="My orders page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-orders" defaultName="Orders" title="my orders" />


                    {/* WRITE YOUR CODE HERE */}
                    <h1 className="page-title"> Vendor Orders </h1>


                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default MyOrders