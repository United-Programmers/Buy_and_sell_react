import React from "react"
import MetaTags from 'react-meta-tags';
import { Card, CardImg, Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import User from "../../../assets/images/users/avatar-2.jpg"
import { AiTwotoneLike } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";



const AdminMessage = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Message page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/admin-message" defaultName="Message" title="my messages" />

                    <Card className="message p-4 border rounded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user"className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm message__card">
                            <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> liked your post</p></p>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                            <p><small>5 mins ago</small></p>
                                <button className="btn btn-secondary me-5"><BsReply/> Reply</button>
                                <button className="btn btn-secondary"><RiShareForwardLine/> Forward</button>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="message p-4 border rounded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user"className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm message__card">
                            <p><h4>Deo muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> liked your post</p></p>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                            <p><small>5 mins ago</small></p>
                            <div className="text-start">
                                <button className="btn btn-secondary me-5"><BsReply/> Reply</button>
                                <button className="btn btn-secondary"><RiShareForwardLine/> Forward</button>
                            </div>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="message p-4 border rounded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user"className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm message__card">
                            <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> liked your post</p></p>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                            <p><small>5 mins ago</small></p>
                            <div className="text-start">
                                <button className="btn btn-secondary me-5"><BsReply/> Reply</button>
                                <button className="btn btn-secondary"><RiShareForwardLine/> Forward</button>
                            </div>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="message p-4 border rounded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user"className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm message__card">
                            <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> liked your post</p></p>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                            <p><small>5 mins ago</small></p>
                            <div className="text-start">
                                <button className="btn btn-secondary me-5"><BsReply/> Reply</button>
                                <button className="btn btn-secondary"><RiShareForwardLine/> Forward</button>
                            </div>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="message p-4 border rounded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user"className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm message__card">
                            <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike/> liked your post</p></p>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                            <p><small>5 mins ago</small></p>
                            <div className="text-start">
                                <button className="btn btn-secondary me-5"><BsReply/> Reply</button>
                                <button className="btn btn-secondary"><RiShareForwardLine/> Forward</button>
                            </div>
                            </Col>
                        </Row>
                    </Card>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default AdminMessage