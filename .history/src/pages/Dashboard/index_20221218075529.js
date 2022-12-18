import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";

const Dashboard = () => {

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags title_sco="Product page | Buy and sell" />
        <Breadcrumb default="/products" defaultName="Products" title="all product" />

        <Container fluid>
          <div className="page-title-box">
            <h1 className="page-title">Product page</h1>
          </div>
        </Container>

      </div>
    </React.Fragment>
  )
}

export default Dashboard