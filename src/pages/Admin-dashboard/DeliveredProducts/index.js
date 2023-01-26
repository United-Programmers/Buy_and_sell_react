import React from "react"
import "./style.scss"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Row, Card, Col } from "react-bootstrap";
import {DelieveredTable} from './components/DeliveredTable';

const DeliveredProducts = () => {

    return (
        <Layout>
            {/* Your components here */}
            <DelieveredTable/>
        </Layout>
    )
}

export default DeliveredProducts