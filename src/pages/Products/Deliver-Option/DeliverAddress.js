import React from "react"
import "./style.scss";
import { Col, Container, Row, Card, CardBody } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import MetaTag from "components/MetaTag";
import { MdLocalGroceryStore } from "react-icons/md";
// import OrderSummary from "./components/OrderSummary";
import { AiTwotoneLock } from "react-icons/ai";
// import OrderSummary from "../components/OrderSummary";


const DeliverAddress = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTag title_sco="Deliver address details page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/deliver-address-details" defaultName="Deliver" title="address details" />

                    {/* <Card>
                        <CardBody> */}
                    <div  className="container">
                        <div className="header">
                            <div className="heading1"> <h3> DELIVERY<span style={{ color: "rgb(170, 179, 179)" }}>/ PAYMENT/CONFIRMATION </span></h3></div>
                            <div className="grocery" style={{ color: "rgba(169, 65, 194, 1)" }}><MdLocalGroceryStore /><a>Go to Cart</a></div>
                        </div>
                      
                             
                        <div className="second">
                             {/* <Row> */}
                            {/* <Col xs={8}> */}
                            <div className="deliBox">
                                <div className="deliInfo">
                                    <div className="deliH">
                                        <h5>Delivery Addresses</h5>
                                    </div>
                                    <div className="AddBut">
                                        <button type="button " class="btn btn-primary continue"><b>Add Address</b></button>
                                    </div>

                                </div>
                                <div className="newFlex">
                                    <div className="circle" />
                                    <div className="textArea">
                                        <h5>Kevin</h5>
                                        <p>New Ridge Heights<br />606 New Ridge Heights CnR Height Banket Street aND yettah<br />Beria Johannesburg<br />0849614484</p>
                                    </div>
                                    <div><a style={{ color: "rgba(40, 105, 254, 1)" }}>&emsp;&emsp;&emsp;&emsp;Delete</a></div>
                                    <div><a style={{ color: "rgba(40, 105, 254, 1)" }}>Edit</a></div>

                                </div>
                            </div>
                            {/* </Col> */}
                            {/* <Col xs={4}> */}
                            <div className="summary">
                                <div className='summaryDesc'>
                                    <h4>Order Summary</h4>
                                    <p>2 Items &emsp;&emsp;&emsp;&emsp;R15,247</p>
                                    <hr />
                                    <p>TO PAY: &emsp;&emsp;&emsp;<b style={{ color: "rgba(169, 65, 194, 1)" }}>R15,247</b></p>
                                    <hr />
                                    <button type="button " class="btn btn-primary continue"><b>Continue</b></button><br />
                                    <p><AiTwotoneLock style={{ marginBottom: "4px" }} /> <b>Secure Checkout</b></p>
                                </div>
                            </div>
                            {/* </Col> */}
                        {/* </Row> */}
                        </div>
                        
                        

                    </div>



                    {/* </CardBody>
                    </Card> */}
                </PageWrapper>

            </div>
            
        </React.Fragment>
    )
}

export default DeliverAddress

