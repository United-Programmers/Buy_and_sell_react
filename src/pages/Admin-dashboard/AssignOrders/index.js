import React from "react"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
 designing/-AssignOrder-page
import { AssigOrderPage } from "./components/AssignOrder";

import AssignOrderTable from "./Components/AssignOrderTable";
 main

const AssignOrders = () => {

    return (
        <Layout>
        designing/-AssignOrder-page
            <AssigOrderPage/>

            {/* Your components here */}
            <AssignOrderTable />
 main
        </Layout>
    )
}

export default AssignOrders