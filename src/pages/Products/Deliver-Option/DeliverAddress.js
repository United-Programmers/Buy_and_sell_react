import React from "react"
import "./style.scss";
import { Col, Container, Row, Card, CardBody, Badge } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import MetaTag from "components/MetaTag";
import { MdLocalGroceryStore } from "react-icons/md";
// import OrderSummary from "./components/OrderSummary";
import { AiOutlineDeliveredProcedure, AiTwotoneLock } from "react-icons/ai";
import { Link } from "react-router-dom";
// import OrderSummary from "../components/OrderSummary";
import CustomBtn from './../../../components/CustomBtn';
import { FaAmazonPay } from 'react-icons/fa';
import collect from './components/img/collect.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";


const DeliverAddress = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTag title_sco="Deliver address details page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/deliver-address-details" defaultName="Deliver" title="address details" />

                    <Row>
                        <Col md={8}>
                            <Card className="px-4">
                                <CardBody>
                                    <Row className="d-flex align-items-center">
                                        <Col md={6}>
                                            <div className="textArea">
                                                <img className="rounded-circle avatar-md mb-4" src={collect} />
                                                <h5>Kevin Ngalu</h5>
                                                <p>New Ridge Heights<br />606 New Ridge Heights CnR Height Banket Street aND yettah<br />Beria Johannesburg<br />0849614484</p>
                                            </div>
                                        </Col>

                                        <Col md={2} class="form-check mt-4">
                                            <input className="form-check-input me-2" style={{ padding: "1em" }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                        </Col>

                                        <Col md={4}>
                                            <div>
                                                <span className="me-2 text-danger"> <RiDeleteBin6Line /> <Link className="pt-3 text-danger"> Delete </Link>  </span>
                                                <span className="text-primary"> <CiEdit /> <Link className="pt-3"> Edit </Link>  </span>
                                            </div>
                                        </Col>

                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="px-4 text-center">
                                <CardBody>
                                    <h4>Order Summary</h4>
                                    <p>2 Items &emsp;&emsp;&emsp;&emsp;R15,247</p>
                                    <hr />
                                    <p>TO PAY: &emsp;&emsp;&emsp;<b style={{ color: "rgba(169, 65, 194, 1)" }}>R15,247</b></p>
                                    <hr />
                                    <Link to="/deliver-option">   <CustomBtn icon={<FaAmazonPay size={20} fullWidth="btn-block" />} btnName="Proceed to Checkout" /> </Link>
                                    <p className="my-3"><AiTwotoneLock /> <b>Secure Checkout</b></p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </PageWrapper>
            </div>
        </React.Fragment >
    )
}

export default DeliverAddress

