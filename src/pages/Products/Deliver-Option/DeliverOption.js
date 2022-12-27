import React from "react"
import "./components/style2.scss";
import { Col, Container, Row, Card, CardBody } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import MetaTag from "components/MetaTag";
import deliTruck from "./components/img/deliTruck.png";
import collect from './components/img/collect.png';
import { AiTwotoneLock } from "react-icons/ai";
// import OrderSummary from "./components/OrderSummary";
import { MdLocalGroceryStore } from "react-icons/md";


const DeliverOption = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTag title_sco="Deliver option page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/deliver-option" defaultName="Deliver" title="option" />

                    {/* <Card> */}
                    {/* <CardBody> */}
                    <div className="container" style={{ width: "70pc" }}>
                        <div >
                            {/* WRITE YOUR CODE HERE OR IN THE COMPONENTS FOLDER */}
                            <div className="header">
                                <div className="heading1"> <h3> DELIVERY<span style={{ color: "rgb(170, 179, 179)" }}>/ PAYMENT/CONFIRMATION </span></h3></div>
                                <div className="grocery" style={{ color: "rgba(169, 65, 194, 1)" }}><MdLocalGroceryStore /><a>Go to Cart</a></div>
                            </div>
                            <div className="contents">
                                <div className="options">
                                    <div className="deliOption">
                                        <div className="deliOptionContents">
                                            <img className="deliTruck" src={deliTruck} />
                                            <div className="titleDesc">
                                                <h4>Delivery</h4>
                                                <p>Courier delivery to your door</p>
                                            </div>
                                            <div className="deliButton">
                                                <button type="button " class="btn btn-primary"><b>Delivery</b></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collectOption">
                                        <div className="collectOptionContents">
                                            <img src={collect} />
                                            <div className="titleDescDis">
                                                <h4>Collect Not Available</h4>
                                                <p>sorry, some items in cart are not eligible for collection</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="summary">
                                    <div className='summaryDesc'>
                                        <h4>Order Summary</h4>
                                        <p>2 Items &emsp;&emsp;&emsp;&emsp;R15,247</p>
                                        <hr />
                                        <p>TO PAY: &emsp;&emsp;&emsp;<b style={{ color: "rgba(169, 65, 194, 1)" }}>R15,247</b></p>
                                        <hr />
                                        <p><AiTwotoneLock style={{ marginBottom: "4px" }} /> <b>Secure Checkout</b></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </CardBody> */}
                    {/* </Card> */}
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default DeliverOption
