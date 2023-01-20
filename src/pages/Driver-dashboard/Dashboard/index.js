import React from "react"
import "./style.scss"
import Layout from "../index"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { Row, Card, Col } from "react-bootstrap"
import DriverChart from "./Components/Charts"
import Cards from "./Components/Cards"

const DriverDashboard = () => {
  return (
    <Layout>
      {/* Your components here */}
      <h1 className="page-title mt-3 ms-4 mb-4 mt-lg-4  ms-lg-1">
        <span>
          <MdOutlineDashboardCustomize />
        </span>{" "}
        Driver Dashboard{" "}
      </h1>
      <Cards />
      <DriverChart />
    </Layout>
  )
}

export default DriverDashboard
