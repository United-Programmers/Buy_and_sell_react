import React from "react"
import "./style.scss"
import Layout from "../index"
import Cards from "./components/Cards"
import Charts from "./components/Charts"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {Row, Card, Col} from "react-bootstrap";

const VendorDashboard = () => {

    return (
        <Layout>
            <h1 className="page-title mt-3 ms-4 mb-4 mt-lg-4  ms-lg-1"><span><MdOutlineDashboardCustomize/></span> Vendor Dashboard </h1>
            <Cards/>
            <Card className="mt-4"><Charts/></Card>
        </Layout>
    )
}

export default VendorDashboard