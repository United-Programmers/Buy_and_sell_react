// import React from "react"
// import MetaTags from 'react-meta-tags';
// import { Col, Container, Row } from "reactstrap"
// import Breadcrumb from "components/Common/Breadcrumb";
// import PageWrapper from "components/PageWrapper";

// const Profile = () => {

//     return (
//         <React.Fragment>
//             <div className="page-content">
//                 <MetaTags title_sco="Profile page | Buy and sell" />

//                 <PageWrapper>
//                     <Breadcrumb default="/profile" defaultName="Profile" title="my profile" />

//                     <h1 className="page-title">Profile pages</h1>
//                 </PageWrapper>

//             </div>
//         </React.Fragment>
//     )
// }

// export default Profile








import React, { useState } from "react"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import classnames from "classnames"
import "./style.scss";
import { CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import AddressDetails from "./components/AddressDetails"
import PasswordAccount from "./components/PasswordAccount"
import PersonalDetails from "./components/PersonalDetails"
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Card } from 'reactstrap';

const Profile = () => {
    const [customActiveTab, setCustomActiveTab] = useState("1")
    const toggleCustom = (tab) => customActiveTab !== tab ? setCustomActiveTab(tab) : null

    return (
        <React.Fragment>
            <div className="page-content">
                <PageWrapper>
                    <Breadcrumb default="/profile" defaultName="Profile" title="my profile" />

                    <Card>
                        <Nav tabs justified className="nav-tabs-custom">
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({ active: customActiveTab === "1" })}
                                    onClick={() => toggleCustom("1")}>
                                    <span className="d-none d-sm-block"> <span className="text-custom-primary"> <AiOutlineUsergroupAdd size={24} /> </span>   Personal Details </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({ active: customActiveTab === "2" })}
                                    onClick={() => toggleCustom("2")}>
                                    <span className="d-none d-sm-block">  <span className="text-custom-primary"> <BiMap size={24} /> </span>  Address Details </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    className={classnames({ active: customActiveTab === "3" })}
                                    onClick={() => toggleCustom("3")}>
                                    <span className="d-none d-sm-block">  <span className="text-custom-primary"> <RiLockPasswordLine size={24} /> </span> Password Details </span>
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={customActiveTab} className="p-3 text-muted">
                            <TabPane tabId="1">
                                <CardBody>
                                    <PersonalDetails />
                                </CardBody>
                            </TabPane>
                            <TabPane tabId="2">
                                <CardBody>
                                    <AddressDetails />
                                </CardBody>
                            </TabPane>
                            <TabPane tabId="3">
                                <CardBody>
                                    <PasswordAccount />
                                </CardBody>
                            </TabPane>
                        </TabContent>
                    </Card>

                </PageWrapper>
            </div>
        </React.Fragment>
    )
}
export default Profile