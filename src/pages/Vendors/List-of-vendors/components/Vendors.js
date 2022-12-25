import React from 'react'
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { vendorsData } from "./Data";

function Vendors() {
    return (
        <Row>
            {
                vendorsData.map((vendors, i) => (
                    <Col xl={4} md={6}>
                        <Card className="directory-card">
                            <CardBody>
                                <div className="d-flex">
                                    <img
                                        src={vendors.img}
                                        alt=""
                                        className="img-fluid img-thumbnail rounded-circle avatar-lg"
                                    />
                                    <div className="flex-1 ms-3">
                                        <h5 className="text-primary font-size-18 mt-0 mb-1"> </h5>
                                        <p className="font-size-12 mb-2">Shop Name : {vendors.shopName} </p>
                                        <p className="mb-0"> {vendors.email} </p>
                                    </div>
                                    <ul className="list-unstyled social-links ms-auto">
                                        <li>
                                            <a href={`/${vendors.twitter}`} className="btn-primary">
                                                <i className="mdi mdi-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`/${vendors.facebook}`} className="btn-info">
                                                <i className="mdi mdi-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`/${vendors.instagram}`} className="btn-danger">
                                                <i className="mdi mdi-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                <p className="mb-0">
                                    <b>Bio : {vendors.Bio} </b>
                                </p>
                                <div className="mt-2">
                                    <Link to="#" className="text-primary">
                                        Go to shop <BsArrowRight />
                                    </Link>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Vendors