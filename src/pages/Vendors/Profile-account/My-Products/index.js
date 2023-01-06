import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Layout from "../index"
import ProductTable from './components/ProductTable'

const MyProducts = () => {

    return (
        <Layout>
            <ProductTable />
        </Layout>
    )
}

export default MyProducts