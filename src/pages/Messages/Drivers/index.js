import React from "react"
import MetaTags from 'react-meta-tags';
import { CardImg, Col, Card, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import User from "../../../assets/images/users/avatar-5.jpg";
import { BsFillReplyFill, BsReply, } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";

const DriverMessage = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Message page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/driver-message" defaultName="Message" title="my messages" />

                    <Card className="message p-4 border rouded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10}className=""> 
                               <p><b>John muleka</b>  <p className="button font-size-20"><AiTwotoneLike/></p> like  your post</p>
                               <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
                               <p><small>5 mins ago</small></p>
                               <button className="btn btn-primary me-5"><BsFillReplyFill/> Reply</button>
                               <button className="btn btn-secondary"><RiShareForwardFill/> Reforward</button>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="message p-4 border rouded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10}className=""> 
                               <p><b>John muleka</b>  <p className="button font-size-20"><AiTwotoneLike/></p> like  your post</p>
                               <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
                               <p><small>5 mins ago</small></p>
                               <button className="btn btn-primary me-5"><BsFillReplyFill/> Reply</button>
                               <button className="btn btn-secondary"><RiShareForwardFill/> Reforward</button>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="message p-4 border rouded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10}className=""> 
                               <p><b>John muleka</b>  <p className="button font-size-20"><AiTwotoneLike/></p> like  your post</p>
                               <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
                               <p><small>5 mins ago</small></p>
                               <button className="btn btn-primary me-5"><BsFillReplyFill/> Reply</button>
                               <button className="btn btn-secondary"><RiShareForwardFill/> Reforward</button>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="message p-4 border rouded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10}className=""> 
                               <p><b>John muleka</b>  <p className="button font-size-20"><AiTwotoneLike/></p> like  your post</p>
                               <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
                               <p><small>5 mins ago</small></p>
                               <button className="btn btn-primary me-5"><BsFillReplyFill/> Reply</button>
                               <button className="btn btn-secondary"><RiShareForwardFill/> Reforward</button>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="message p-4 border rouded p-2">
                        <Row>
                            <Col md={2}>
                               <CardImg src={User} alt="user" className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10}className="My message "> 
                               <p><b>John muleka</b>  <p className="button font-size-20"><AiTwotoneLike/></p> like  your post</p>
                               <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
                               <p><small>5 mins ago</small></p>
                               <button className="btn btn-primary me-5"><BsFillReplyFill/> Reply</button>
                               <button className="btn btn-secondary"><RiShareForwardFill/> Reforward</button>
                            </Col>
                        </Row>
                    </Card>
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default DriverMessage