import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Layout from "../index"
import OrderTable from "./components/OrderTable"

const MyOrders = () => {

    return (
        <Layout>
           <OrderTable />
        </Layout>
    )
}

export default MyOrders