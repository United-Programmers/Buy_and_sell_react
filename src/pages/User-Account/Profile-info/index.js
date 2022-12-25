import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import classnames from "classnames"
import "./style.scss";
import { Link } from "react-router-dom"
import {
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Collapse,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
  } from "reactstrap"
  import AddressDetails from "./components/AddressDetails"
  import PasswordAccount from "./components/PasswordAccount"
  import PersonalDetails from "./components/PersonalDetails"

const Profile = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Profile page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/profile" defaultName="Profile" title="my profile" />

                    <Nav tabs justified className="nav-tabs-custom">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "1",
                          })}
                          onClick={() => {
                            this.toggleCustom("1")
                          }}
                        >
                          <span className="d-none d-sm-block">Personal Details</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "2",
                          })}
                          onClick={() => {
                            this.toggleCustom("2")
                          }}
                        >
                          <span className="d-none d-sm-block">Address Details</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "3",
                          })}
                          onClick={() => {
                            this.toggleCustom("3")
                          }}
                        >
                          <span className="d-none d-sm-block">Password Details</span>
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.customActiveTab} className="p-3 text-muted">
                      <TabPane tabId="1">
                        <Row>
                          <Col sm="12">
                            <PersonalDetails />
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                        <Row>
                          <Col sm="12">
                          <AddressDetails />
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                        <Row>
                          <Col sm="12">
                          <PasswordAccount />
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>

                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Profile