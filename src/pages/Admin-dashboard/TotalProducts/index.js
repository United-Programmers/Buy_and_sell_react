import React from "react"
import "./style.scss"
import Layout from "../index"
// import { MdOutlineDashboardCustomize } from "react-icons/md";
// import { Row, Card, Col } from "react-bootstrap";
import TotalProductsList from "./Components/TotalProductsList";

const TotalProducts = () => {

    return (
        <Layout>
            {/* Your components here */}
            <h5 className="main-p-heading"> Total Products </h5>
            <TotalProductsList />
        </Layout>
    )
}

export default TotalProducts