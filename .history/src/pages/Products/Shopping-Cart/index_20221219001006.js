import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const ShoppingCart = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Shopping cart page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/shopping-cart" defaultName="shopping-cart" title="my cart" />

                    <h1 className="page-title">Profile pages</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default ShoppingCart