import React from "react"
import MetaTags from 'react-meta-tags';
import { CardImg, Col, Container, Card, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import User from "../../../assets/images/users/avatar-1.jpg";
import { AiTwotoneLike } from "react-icons/ai";

const VendorMessage = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Message page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/vendor-message" defaultName="Message" title="my messages" />

                    <Card className="message p-4">
                        <Row>
                            <Col md={2}>
                                <CardImg src={User} alt="User" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm">
                                <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> react to your post</p></p>
                                <p className="text-muted">inspirational designs, illustrations, and graphic elements from the world’s best designers.
                                Want more inspiration? Browse our search results...</p>
                                <p><small>10 mins ago</small></p>
                                <button className="btn btn-primary me-5"> Reply</button>
                                <button className="btn btn-secondary"> Refoward</button>
                            </Col>
                        </Row>                                            
                    </Card>

                    <Card className="message p-4">
                        <Row>
                            <Col md={2}>
                                <CardImg src={User} alt="User" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm">
                                <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> react to your post</p></p>
                                <p className="text-muted">inspirational designs, illustrations, and graphic elements from the world’s best designers.
                                Want more inspiration? Browse our search results...</p>
                                <p><small>10 mins ago</small></p>
                                <button className="btn btn-primary me-5"> Reply</button>
                                <button className="btn btn-secondary"> Refoward</button>
                            </Col>
                        </Row>                                            
                    </Card>

                    <Card className="message p-4">
                        <Row>
                            <Col md={2}>
                                <CardImg src={User} alt="User" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm">
                                <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> react to your post</p></p>
                                <p className="text-muted">inspirational designs, illustrations, and graphic elements from the world’s best designers.
                                Want more inspiration? Browse our search results...</p>
                                <p><small>10 mins ago</small></p>
                                <button className="btn btn-primary me-5"> Reply</button>
                                <button className="btn btn-secondary"> Refoward</button>
                            </Col>
                        </Row>                                            
                    </Card>

                    <Card className="message p-4">
                        <Row>
                            <Col md={2}>
                                <CardImg src={User} alt="User" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm">
                                <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> react to your post</p></p>
                                <p className="text-muted">inspirational designs, illustrations, and graphic elements from the world’s best designers.
                                Want more inspiration? Browse our search results...</p>
                                <p><small>10 mins ago</small></p>
                                <button className="btn btn-primary me-5"> Reply</button>
                                <button className="btn btn-secondary"> Refoward</button>
                            </Col>
                        </Row>                                            
                    </Card>

                    <Card className="message p-4">
                        <Row>
                            <Col md={2}>
                                <CardImg src={User} alt="User" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm">
                                <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> react to your post</p></p>
                                <p className="text-muted">inspirational designs, illustrations, and graphic elements from the world’s best designers.
                                Want more inspiration? Browse our search results...</p>
                                <p><small>10 mins ago</small></p>
                                <button className="btn btn-primary me-5"> Reply</button>
                                <button className="btn btn-secondary"> Refoward</button>
                            </Col>
                        </Row>                                            
                    </Card>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default VendorMessage