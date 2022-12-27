import React from "react"
import MetaTags from "react-meta-tags"
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"
import PageWrapper from "components/PageWrapper"
import ProductViewDetail from "./components/ProductDetails"
import ReviewTab from "./components/ReviewTab"
import RelatedProducts from "./components/RelatedProducts"

const ProductDetails = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags title_sco="Product detail page | Buy and sell" />

        <PageWrapper>
          <Breadcrumb default="/home" defaultName="Products" title="Details" />
          {/* <h1 className="page-title">Product details page</h1> */}
          <ProductViewDetail />
          <ReviewTab />
          <RelatedProducts />
        </PageWrapper>
      </div>
    </React.Fragment>
  )
}

export default ProductDetails
