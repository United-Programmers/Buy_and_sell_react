import React from "react"

import MetaTags from 'react-meta-tags';
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Pay from "./components/Pay";


const PaymentDetails = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Payment details page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/payment-details" defaultName="Payment-details" title="my payment details" />

                    <Card>
                        <CardBody>
                           <Pay/>
                        </CardBody>
                    </Card>

                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default PaymentDetails
