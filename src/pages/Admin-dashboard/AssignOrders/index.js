import React from "react"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
import { AssigOrderPage } from "./components/AssignOrder";

const AssignOrders = () => {

    return (
        <Layout>
            <AssigOrderPage/>
        </Layout>
    )
}

export default AssignOrders