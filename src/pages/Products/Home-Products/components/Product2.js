import React from "react"
import "./productCard.scss"
import { Button, Col, Container, Row, CardBody, Card } from "reactstrap"
import { AiTwotoneStar } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { HiInformationCircle } from 'react-icons/hi';
import {HiCamera } from 'react-icons/hi';
import {FaRegHeart } from 'react-icons/fa';
import { productData } from "./productData";
import Zoom from "./images/zoom.webp";
function Products() {
    return (

            <Row className="box">
                {productData.map(data=>{
                    return (
                        <Col md className="content__container">
                            <div className="product-2  d-flex swipe__item pro__image text-center align-items-center ">
                                <img src={data.img} alt="" />
                                <span className="pro__camera"><HiCamera/></span>
                                <span className="pro__new">
                                {data.new}
                                </span>    
                                <span className="pro__off">
                                    <span>{data.num}</span>
                                    <span>{data.off}</span>

                                </span> 
                                <span className="pro__love"><FaRegHeart/></span>    
                                    
                                <Row className="item__content mt-3">
                                    <h6>{data.desc}</h6>
                                    <h6 className="label__item">{data.brand}</h6>
                                    <h5 className="pro__price">{data.price}<span className="price__cancel"><del>{data.del}</del> <span className="i-icon"><HiInformationCircle/></span> </span></h5>
                                    <h6 className="pro__stock">{data.stock} <span className="pro__location">{data.location}</span> {""} <span className="pro__location">{data.location2}</span> </h6>
                                    <span className="star">
                                    <AiTwotoneStar/><span className="star__content">{data.star}</span>
                                    </span>
                                </Row>
                                <div className="btn-grp "><button className="cart__btn view__btn"><span className="icon"><MdShoppingCart/></span>{data.btn}</button></div>
                                
                            </div>
                        </Col>
                
                    )
                })}
                
              
            </Row>
    
    )
}

export default Products
