import React from "react"
import "./style.scss";
import MetaTags from 'react-meta-tags';
import { Card, CardImg, Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";


const PaymentDetails = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Payment details page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/payment-details" defaultName="Payment-details" title="my payment details" />

                    <Card >

                    </Card>

                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default PaymentDetails