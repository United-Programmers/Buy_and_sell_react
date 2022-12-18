import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";

const Dashboard = () => {

  return (
    <React.Fragment>
      <div className="page-content">

        <PageWrapper>
          <MetaTags title_sco="Product page | Buy and sell" />
          <Breadcrumb default="/products" defaultName="Products" title="all product" />
          <h1 className="page-title">Product page</h1>
        </PageWrapper>

      </div>
    </React.Fragment>
  )
}

export default Dashboard