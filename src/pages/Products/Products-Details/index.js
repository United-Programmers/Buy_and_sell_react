import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const ProductDetails = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Product detail page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/home" defaultName="Products" title="Details" />

                    <h1 className="page-title">Product details page</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default ProductDetails