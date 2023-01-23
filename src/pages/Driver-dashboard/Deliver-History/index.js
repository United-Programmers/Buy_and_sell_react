import React from "react"
import "./style.scss"
import MetaTags from "react-meta-tags"
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"
import PageWrapper from "components/PageWrapper"
import Layout from "../index"
import DeliverHiustoryTable from "./Components/DeliverHiustoryTable"

const DeliverHistory = () => {
  return (
    <Layout>
      {/* Import your components here */}

      <DeliverHiustoryTable />
    </Layout>
  )
}

export default DeliverHistory
