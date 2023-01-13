import React from "react"
import "./style.scss"
import MetaTags from "react-meta-tags"
import Breadcrumb from "components/Common/Breadcrumb"
import PageWrapper from "components/PageWrapper"
import Layout from "../index"
import ProductTable from "./Components/ProductTable"
const ProductsToDeliver = () => {
  return (
    <Layout>
      <ProductTable />
    </Layout>
  )
}

export default ProductsToDeliver
