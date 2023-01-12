import React from "react"
import "./components/style2.scss";
import { Col, Row, Card, CardBody } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import MetaTag from "components/MetaTag";
import deliTruck from "./components/img/deliTruck.png";
import collect from './components/img/collect.png';
import { AiTwotoneLock } from "react-icons/ai";
// import OrderSummary from "./components/OrderSummary";

import CustomBtn from "components/CustomBtn";
import { FaAmazonPay } from "react-icons/fa";


const DeliverOption = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTag title_sco="Deliver option page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/deliver-option" defaultName="Deliver" title="option" />

                    <Row>
                        <Col md={8} >
                            <Card className="py-3">
                                <CardBody>
                                    <Row className="d-flex align-items-center">
                                        <Col md={9}>
                                            <Row>
                                                <Col md={2} className="mx-4">
                                                    <img className="rounded-circle avatar-md" src={deliTruck} />
                                                </Col>
                                                <Col md={8}>
                                                    <h4>Delivery</h4>
                                                    <p>Courier delivery to your door</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col md={3} class="form-check mt-4">
                                            <input className="form-check-input me-2" style={{ padding: "1em" }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                            <label className="form-check-label mt-2" for="exampleRadios1"> Delivery  </label>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card className="py-3">
                                <CardBody>
                                    <Row className="d-flex align-items-center">
                                        <Col md={9}>
                                            <Row>
                                                <Col md={2} className="mx-4">
                                                    <img className="rounded-circle avatar-md" src={collect} />
                                                </Col>
                                                <Col md={8}>
                                                    <h4>Collect</h4>
                                                    <p>Courier delivery to your door</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col md={3} class="form-check mt-4">
                                            <input className="form-check-input me-2" style={{ padding: "1em" }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label mt-2" for="exampleRadios1"> Collection  </label>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="px-5 text-center">
                                <CardBody>
                                    <h4>Order Summary</h4>
                                    <p>2 Items &emsp;&emsp;&emsp;&emsp;R15,247</p>
                                    <hr />
                                    <p>TO PAY: &emsp;&emsp;&emsp;<b style={{ color: "rgba(169, 65, 194, 1)" }}>R15,247</b></p>
                                    <hr />
                                    <CustomBtn icon={<FaAmazonPay size={24} />} btnName="Proceed to checkout" fullWidth="btn-block" />
                                    <p className="my-4"><AiTwotoneLock /> <b>Secure Checkout</b></p>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </PageWrapper>
            </div>
        </React.Fragment >
    )
}

export default DeliverOption
