import React from "react"
import "./style.scss"
import { Col, Container, Row, Card, CardBody } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import MetaTag from "components/MetaTag";


const DeliverAddress = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTag title_sco="Deliver address details page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/deliver-address-details" defaultName="Deliver" title="address details" />

                    <Card>
                        <CardBody>
                            {/* WRITE YOUR CODE HERE OR IN THE COMPONENTS FOLDER */}
                            <h1> DELIVER ADDRESS DETAILS </h1>
                        </CardBody>
                    </Card>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default DeliverAddress