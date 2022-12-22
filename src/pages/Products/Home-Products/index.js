import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Slide from "./components/Slide"
import SideBar from "./components/SideBar"
import Products from "./components/Products"

const Home = () => {

    return (
        <React.Fragment>
                   <Slide />
            <div className="page-content">
                <MetaTags title_sco="Product page | Buy and sell" />

                <PageWrapper>
                    {/* <Breadcrumb default="/products" defaultName="Products" title="all product" /> */}
                    <Row>
                        <Col md={3}>
                    <SideBar />
                    </Col>

                    <Col md={9}>
                    <Products />
                    </Col>
                    </Row>

                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Home