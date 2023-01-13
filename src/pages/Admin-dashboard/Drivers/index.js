import React from "react"
import "./style.scss"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
import DriverTable from './components/DriverTable'

const DriverTableComp = () => {

    return (
        <Layout>
            {/* Your components here */}
            <DriverTable />
        </Layout>
    )
}

export default DriverTableComp