import React from "react"
import MetaTags from 'react-meta-tags';
import { Badge, Button, Card, CardImg, Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import User from "../../../assets/images/users/avatar-2.jpg"
import { AiTwotoneLike } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";



const AdminMessage = () => {

    return (
        <React.Fragment>

            <Card className="message p-4 border rounded p-2">
                <Row>
                    <Col md={3}>
                        <CardImg src={User} alt="user" className="rounded-circle avatar-lg" />
                    </Col>

                    <Col md={9} className="rounded-sm message__card">
                        <div>
                            <p><h4>John muleka</h4>  <p className="font-size-10"><AiTwotoneLike /> liked your post</p></p>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                            <p><small>5 mins ago</small></p>
                            <Button color="primary" outline> <BsReply />  Reply </Button>
                        </div>

                    </Col>
                </Row>
            </Card>

        </React.Fragment>
    )
}

export default AdminMessage