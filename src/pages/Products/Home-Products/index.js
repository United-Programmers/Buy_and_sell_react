import React from "react"
import "./style.scss"
import MetaTags from "react-meta-tags"
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"
import PageWrapper from "components/PageWrapper"
import Slide from "./components/Slide"
import SideBar from "./components/SideBar"
import Products from "./components/Products"
import Products2 from "./components/Products2"
import FilterProduct from "./components/FilterProduct"

const Home = () => {
  return (
    <React.Fragment>
      <Slide />
      <div className="page-content  Home__product__page">
        <MetaTags title_sco="Product page | Buy and sell" />

        <PageWrapper>
          {/* <Breadcrumb default="/products" defaultName="Products" title="all product" /> */}
          <div className="d-flex justify-content-end">
            <div className="text-center coming-soon-search-form pb-4">
              <form action="#">
                <input type="text" placeholder="Search for your item" />
                <button type="submit" className="btn btn-custom-primary ">  Search </button>
              </form>
            </div>
            {/* <FilterProduct /> */}
          </div>

          <Row>
            <Col md={3} className="Accordion__container">
              <SideBar />
            </Col>

            <Col md={9}>
              {/* <Products /> */}
              <Products2 />
            </Col>
          </Row>
        </PageWrapper>
      </div>
    </React.Fragment>
  )
}

export default Home
