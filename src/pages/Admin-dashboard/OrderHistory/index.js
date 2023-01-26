import React from "react"
import "./style.scss"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
import OrderHistoryTable from "./Components/OrderHistoryTable";

const OrderHistory = () => {

    return (
        <Layout>
            {/* Your components here */}
            <OrderHistoryTable/>
        </Layout>
    )
}

export default OrderHistory