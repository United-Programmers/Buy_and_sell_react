import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Wishlist from "./components/Wishlist";

const WishList = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Wishlist page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/wishlist" defaultName="Wishlist" title="my wishlist" />

                    <Wishlist />
                    
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default WishList