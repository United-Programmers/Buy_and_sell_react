import React, { useState } from "react"
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import classnames from "classnames"
import { MdClearAll } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import { BsStarHalf } from "react-icons/bs"
import AllReviews from './AllReviews'
import FiveStarReviews from './FiveStarReviews'
import FourStarReviews from './FourStarReviews'
import ThreeStarReviews from './ThreeStarReviews'
import TwoAndOneStarReviews from './TwoAndOneStarReviews'

const ReviewTab = () => {

    const [customActiveTab, setCustomActiveTab] = useState("1")
    const toggleCustom = (tab) => customActiveTab !== tab ? setCustomActiveTab(tab) : null

    return (
        <React.Fragment>
            <Card>
                <Nav tabs justified className="nav-tabs-custom mt-3">
                    <NavItem>
                        <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({ active: customActiveTab === "1" })}
                            onClick={() => toggleCustom("1")}>
                            <span className="d-none d-sm-block"> <span className="text-warning"> <MdClearAll size={24} /> </span>   All reviews </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({ active: customActiveTab === "2" })}
                            onClick={() => toggleCustom("2")}>
                            <span className="d-none d-sm-block">  <span className="text-warning"> <AiFillStar size={24} /> </span>  5 Star reviews </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({ active: customActiveTab === "3" })}
                            onClick={() => toggleCustom("3")}>
                            <span className="d-none d-sm-block">  <span className="text-warning"> <BsStarHalf size={24} /> </span>  4 Star reviews </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({ active: customActiveTab === "4" })}
                            onClick={() => toggleCustom("4")}>
                            <span className="d-none d-sm-block"> <span className="text-warning"> <BsStarHalf size={24} /> </span> 3 Star reviews </span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({ active: customActiveTab === "5" })}
                            onClick={() => toggleCustom("5")}>
                            <span className="d-none d-sm-block"> <span className="text-warning"> <BsStarHalf size={24} /> </span> 2 & 1 Star reviews </span>
                        </NavLink>
                    </NavItem>

                </Nav>

                <TabContent activeTab={customActiveTab} className="text-muted mt-5">
                    <TabPane tabId="1">
                        <CardBody>
                            <AllReviews />
                        </CardBody>
                    </TabPane>
                    <TabPane tabId="2">
                        <CardBody>
                            <FiveStarReviews />
                        </CardBody>
                    </TabPane>
                    <TabPane tabId="3">
                        <CardBody>
                            <FourStarReviews />
                        </CardBody>
                    </TabPane>
                    <TabPane tabId="4">
                        <CardBody>
                            <ThreeStarReviews />
                        </CardBody>
                    </TabPane>
                    <TabPane tabId="5">
                        <CardBody>
                            <TwoAndOneStarReviews />
                        </CardBody>
                    </TabPane>
                </TabContent>
            </Card>
        </React.Fragment>
    )
}

export default ReviewTab
