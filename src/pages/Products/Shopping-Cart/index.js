import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import CartContainer from "./components/CartContainer";

const ShoppingCart = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Shopping cart page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/shopping-cart" defaultName="shopping-cart" title="my cart" />

                    <CartContainer />
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default ShoppingCart