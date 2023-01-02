import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import classnames from "classnames"
import { CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Card } from "reactstrap"
import { AiOutlineMessage } from "react-icons/ai";
import Admin from "./Admin/index"
import Drivers from "./Drivers/index"
import Vendors from "./Vendors/index"
import User from "./User/index"


const Notification = () => {
    const [customActiveTab, setCustomActiveTab] = React.useState("1")
    const toggleCustom = (tab) => customActiveTab !== tab ? setCustomActiveTab(tab) : null

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Notifications page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/messages" defaultName="Message" title="my messages" />

                    <Card>
                        <Nav tabs justified className="nav-tabs-custom">
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({ active: customActiveTab === "1" })}
                                    onClick={() => toggleCustom("1")}>
                                    <span className="d-none d-sm-block"> <span className="text-custom-primary"> <AiOutlineMessage size={24} /> </span>   Message from the seller </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({ active: customActiveTab === "2" })}
                                    onClick={() => toggleCustom("2")}>
                                    <span className="d-none d-sm-block">  <span className="text-custom-primary"> <AiOutlineMessage size={24} /> </span>  Message from the driver </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({ active: customActiveTab === "3" })}
                                    onClick={() => toggleCustom("3")}>
                                    <span className="d-none d-sm-block">  <span className="text-custom-primary"> <AiOutlineMessage size={24} /> </span> Message from the admin </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({ active: customActiveTab === "4" })}
                                    onClick={() => toggleCustom("4")}>
                                    <span className="d-none d-sm-block">  <span className="text-custom-primary"> <AiOutlineMessage size={24} /> </span> Message from the user </span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Card>

                    <TabContent activeTab={customActiveTab} className="p-3 text-muted">
                        <TabPane tabId="1">
                            <Admin />
                        </TabPane>
                        <TabPane tabId="2">
                            <CardBody>
                                <Drivers />
                            </CardBody>
                        </TabPane>
                        <TabPane tabId="3">
                            <CardBody>
                                <Vendors />
                            </CardBody>
                        </TabPane>
                        <TabPane tabId="4">
                            <CardBody>
                                <User />
                            </CardBody>
                        </TabPane>
                    </TabContent>

                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default Notification