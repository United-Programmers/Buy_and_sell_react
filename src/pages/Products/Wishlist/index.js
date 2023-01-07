import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Wishlist from "./components/Wishlist";
import RelatedProducts from './components/RelatedProducts';

const WishList = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Wishlist page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/wishlist" defaultName="Wishlist" title="my wishlist" />

                    <Wishlist />

                    <RelatedProducts />

                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default WishList