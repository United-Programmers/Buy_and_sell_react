import React from "react"
import "./style.scss"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
import VendorsTables from "./components/VendorsTable";

const Vendors = () => {

    return (
        <Layout>
            {/* Your components here */}
            <VendorsTables />
        </Layout>
    )
}

export default Vendors