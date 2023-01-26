import React from "react"
import "./style.scss"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
import BuyersTable from './components/BuyersTable'

const Buyers = () => {

    return (
        <Layout>
            {/* Your components here */}
            <BuyersTable />
        </Layout>
    )
}

export default Buyers 