import React, { Component } from "react"
import MetaTags from "react-meta-tags"
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Badge,
  CardText,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"
import { withRouter, Link } from "react-router-dom"
import PageWrapper from "components/PageWrapper"
import classnames from "classnames"
import NewOrders from "./components/NewOrders"
import ShippedOrder from "./components/ShippedOrder"
import CancelledOrders from "./components/CancelledOrders"
import ReturnOrder from "./components/ReturnOrder"
import { MdAddTask, MdCancelPresentation } from "react-icons/md"
import { TbTruckReturn, TbTruckDelivery } from "react-icons/tb"

class UiTabsAccordions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1",
      activeTab1: "5",
      activeTab2: "9",
      activeTab3: "13",
      verticalActiveTab: "1",
      customActiveTab: "1",
      activeTabJustify: "5",
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      })
    }
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      })
    }
  }

  toggle3(tab) {
    if (this.state.activeTab3 !== tab) {
      this.setState({
        activeTab3: tab,
      })
    }
  }

  toggleVertical(tab) {
    if (this.state.verticalActiveTab !== tab) {
      this.setState({
        verticalActiveTab: tab,
      })
    }
  }

  toggleCustom(tab) {
    if (this.state.customActiveTab !== tab) {
      this.setState({
        customActiveTab: tab,
      })
    }
  }

  render() {
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
                      active: this.state.customActiveTab === "5",
                    })}
                    onClick={() => {
                      this.toggleCustom("5")
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
                      active: this.state.customActiveTab === "6",
                    })}
                    onClick={() => {
                      this.toggleCustom("6")
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
                      active: this.state.customActiveTab === "7",
                    })}
                    onClick={() => {
                      this.toggleCustom("7")
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
                      active: this.state.customActiveTab === "8",
                    })}
                    onClick={() => {
                      this.toggleCustom("8")
                    }}
                  >
                    <span className="d-none d-sm-block">
                      <TbTruckReturn size={24}/> Returned Orders
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent
                activeTab={this.state.customActiveTab}
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
}

export default UiTabsAccordions
