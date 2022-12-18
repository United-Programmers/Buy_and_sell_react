import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const Wishlist = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Wishlist page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/wishlist" defaultName="Wishlist" title="my wishlist" />

                    <h1 className="page-title">wishlist pages</h1>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Wishlist