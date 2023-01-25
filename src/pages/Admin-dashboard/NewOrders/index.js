import React from "react"
import "./style.scss"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
import NewOrdersTable from "./components/NewOrdersTable";

const NewOrders = () => {

    return (
        <Layout>
            {/* Your components here */}
            <NewOrdersTable/>
        </Layout>
    )
}

export default NewOrders