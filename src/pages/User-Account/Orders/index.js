import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"
import PageWrapper from "components/PageWrapper"
import classnames from "classnames"
import NewOrders from "./components/NewOrders"
import ShippedOrder from "./components/ShippedOrder"
import CancelledOrders from "./components/CancelledOrders"
import ReturnOrder from "./components/ReturnOrder"
import { MdAddTask, MdCancelPresentation } from "react-icons/md"
import { TbTruckReturn, TbTruckDelivery } from "react-icons/tb"

const ordersTab = () => {

  const [customActiveTab, setCustomActiveTab] = useState("1")
  const toggleCustom = (tab) => customActiveTab !== tab ? setCustomActiveTab(tab) : null

 
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags title_sco="Orders page | Buy and sell" />

          <PageWrapper>
            <Breadcrumb
              default="/orders"
              defaultName="Products"
              title="all product"
            />

            <div>
              <Nav tabs justified className="nav-tabs-custom mt-3">
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: customActiveTab === "5",
                    })}
                    onClick={() => {
                     toggleCustom("5")
                    }}
                  >
                    <span className="d-none d-sm-block">
                      <MdAddTask size={24}/>  New Orders
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: customActiveTab === "6",
                    })}
                    onClick={() => {
                     toggleCustom("6")
                    }}
                  >
                    <span className="d-none d-sm-block">
                      <TbTruckDelivery size={24}/> Shipped Orders
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: customActiveTab === "7",
                    })}
                    onClick={() => {
                     toggleCustom("7")
                    }}
                  >
                    <span className="d-none d-sm-block">
                      <MdCancelPresentation size={24}/> Cancelled Orders
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: customActiveTab === "8",
                    })}
                    onClick={() => {
                    toggleCustom("8")
                    }}
                  >
                    <span className="d-none d-sm-block">
                      <TbTruckReturn size={24}/> Returned Orders
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent
                activeTab={customActiveTab}
                className="text-muted mt-5"
              >
                <TabPane tabId="5">
                  <Row>
                    <Col sm="12">
                      <NewOrders />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="6">
                  <Row>
                    <Col sm="12">
                      <ShippedOrder />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="7">
                  <Row>
                    <Col sm="12">
                      <CancelledOrders />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="8">
                  <Row>
                    <Col sm="12">
                      <ReturnOrder />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </PageWrapper>
        </div>
      </React.Fragment>
    )
  }

export default ordersTab
