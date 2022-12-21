import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const MyProducts = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="My products page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-products" defaultName="Products" title="my products" />


                    {/* WRITE YOUR CODE HERE */}
                    <h1 className="page-title"> Vendor Products </h1>


                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default MyProducts