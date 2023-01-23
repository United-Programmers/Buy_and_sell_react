import React from "react"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
import AssignOrderTable from "./Components/AssignOrderTable";

const AssignOrders = () => {

    return (
        <Layout>

            <AssignOrderTable />
        </Layout>
    )
}

export default AssignOrders