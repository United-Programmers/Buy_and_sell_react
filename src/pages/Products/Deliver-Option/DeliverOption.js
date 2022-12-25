import React from "react"
import "./style.scss"
import { Col, Container, Row, Card, CardBody } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import MetaTag from "components/MetaTag";


const DeliverOption = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTag title_sco="Deliver option page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/deliver-option" defaultName="Deliver" title="option" />

                    <Card>
                        <CardBody>

                            {/* WRITE YOUR CODE HERE OR IN THE COMPONENTS FOLDER */}
                            <h1> DELIVER OPTIONS </h1>
                        </CardBody>
                    </Card>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default DeliverOption