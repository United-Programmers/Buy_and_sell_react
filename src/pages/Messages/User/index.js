import React from "react"
import MetaTags from 'react-meta-tags';
import { Card, Col, Container, Row, CardImg } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import User from "../../../assets/images/users/avatar-1.jpg";

const UserMessage = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Message page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/user-message" defaultName="Message" title="my messages" />
                    
                    <Card className="message p-4">

                        <Row>
                            <Col md={2}>
                                <CardImg src={User} alt="user"className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm">
                                <p><b>John Muleka</b>  react to your post</p>
                                <p className="text-muted">inspirational designs, illustrations, and graphic elements from the world’s best designers.
                                Want more inspiration? Browse our search results...</p>
                                <p className="text-muted"><small>10 mins ago</small></p>

                                <div className="text-end">
                                 <button className="btn btn-primary">Reply</button>
                                </div>
                            </Col>                         
                        </Row>
                    </Card>

                    <Card className="message p-4">

                        <Row>
                            <Col md={2}>
                                <CardImg src={User} alt="user"className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm message__card">
                                <p><b>John Muleka</b>  react to your post</p>
                                <p className="text-muted font-size-15">inspirational designs, illustrations, and graphic elements from the world’s best designers.
                                Want more inspiration? Browse our search results...</p>
                                <p className="text-muted font-size-10"><small>10 mins ago</small></p>

                                <div className="text-end">
                                 <button className="btn btn-primary">Reply</button>
                                </div>
                            </Col>                         
                        </Row>
                    </Card>

                    <Card className="message p-4">

                        <Row>
                            <Col md={2}>
                                <CardImg src={User} alt="user"className="rounded-circle avatar-lg"/>
                            </Col>

                            <Col md={10} className="rounded-sm message__card">
                                <p><b>John Muleka</b>  react to your post</p>
                                <p className="text-muted">inspirational designs, illustrations, and graphic elements from the world’s best designers.
                                Want more inspiration? Browse our search results...</p>
                                <p className="text-muted"><small>10 mins ago</small></p>

                                <div className="text-end">
                                 <button className="btn btn-primary">Reply</button>
                                </div>
                                
                            </Col>                      
                        </Row>
                    </Card>                  

                </PageWrapper>
            </div>
        </React.Fragment>
    )
}

export default UserMessage