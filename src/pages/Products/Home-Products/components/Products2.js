import React from "react"
import "./productCard.scss"
import { Button, Col, Container, Row, CardBody, Card } from "reactstrap"
import { AiTwotoneStar } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { HiInformationCircle } from 'react-icons/hi';
import {HiCamera } from 'react-icons/hi';
import Zoom from "./images/zoom.webp";

function Products() {
    return (
        
            <Row className="product_container align-items-center ">
                <Col md={3}>
                    <div className="product-2  d-flex swipe__item pro__image text-center align-items-center ">
                        <img src={Zoom} alt="" />
                        <span className="pro__camera"><HiCamera/></span>
                        <span className="pro__new">
                          New
                        </span>    
                        <span className="pro__off">
                          <span>20%</span>
                          <span>OFF</span>

                        </span>    
                          
                        <Row className="item__content mt-3">
                            <h6>Cooler Master Compact Home And Business Core i3 Pro Desktop Computer</h6>
                            <h6 className="label__item">Cooler Master</h6>
                            <h5 className="pro__price">R 12,999 <span className="price__cancel"><del>R13,999</del> <span className="i-icon"><HiInformationCircle/></span> </span></h5>
                            <h6 className="pro__stock">In stock <span className="pro__location">JHB</span> {""} <span className="pro__location">PTA</span> </h6>
                            <span className="star">
                            <AiTwotoneStar/><span className="star__content">4.7(71)</span>
                            </span>
                        </Row>
                        <div className="btn-grp "><button className="cart__btn view__btn"><span className="icon"><MdShoppingCart/></span>View Product</button></div>
                    </div>
                </Col>
                <Col md={3}>
                    <h3>card 2</h3>
                </Col>
                <Col md={3}>
                    <h3>card 3</h3>
                </Col>
                <Col md={3}>
                    <h3>card 4</h3>
                </Col>
            </Row>
        
    )
}

export default Products
