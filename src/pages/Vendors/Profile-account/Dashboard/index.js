import React from "react"
import "./style.scss"
import Layout from "../index"
import Cards from "./components/Cards"

const VendorDashboard = () => {

    return (
        <Layout>
            <h1 className="page-title"> Vendor Dashboard </h1>
            <Cards/>
        </Layout>
    )
}

export default VendorDashboard