import React from 'react'
import { Card, Row, Col, CardBody, CardImg } from 'reactstrap'
import img1 from "../../../../assets/images/product/img-7.png";
import img2 from "../../../../assets/images/product/img-4.png";
import img3 from "../../../../assets/images/product/img-10.png";
import img4 from "../../../../assets/images/product/img-5.png";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStar, BsStarHalf } from 'react-icons/bs';
import { IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

function Wishlist() {
    return (
        <div>

            <Card>
                <CardBody>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col md={2}>
                            <CardImg src={img1} />
                        </Col>

                        <Col md={7}>
                            <h5 color='info'>SanDisck Cruzer Blade USB Flash Driver 32GB</h5>
                            <p className='text-primary my-4'>High speed USB Flash drive</p>
                            <small className='color-primary'>Be the first to Whrite a review</small>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <IoIosStarHalf className='text-warning' />
                            <IoIosStarOutline className='text-warning' />
                            <p>3.9 (1234) <h8 className="text-primary font-size-18"> Reviews <BiChevronDown /></h8></p>
                        </Col>

                        <Col md={3} className=" text-end px-5">
                            <h5 className='text-end'>R 120</h5>
                            <div className='my-4'>
                                <Link className='add__to__cart  w-75'> <MdShoppingCart /> + Add to Card</Link>
                            </div>
                            <Link className='text-danger'> <RiDeleteBin6Line /> Remove </Link>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col md={2}>
                            <CardImg src={img4} />
                        </Col>

                        <Col md={7}>
                            <h5 color='info'>SanDisck Cruzer Blade USB Flash Driver 32GB</h5>
                            <p className='text-primary my-4'>High speed USB Flash drive</p>
                            <small className='color-primary'>Be the first to Whrite a review</small>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <IoIosStarHalf className='text-warning' />
                            <IoIosStarOutline className='text-warning' />
                            <p>3.9 (1234) <h8 className="text-primary font-size-18"> Reviews <BiChevronDown /></h8></p>
                        </Col>

                        <Col md={3} className=" text-end px-5">
                            <h5 className='text-end'>R 120</h5>
                            <div className='my-4'>
                                <Link className='add__to__cart  w-75'> <MdShoppingCart /> + Add to Card</Link>
                            </div>
                            <Link className='text-danger'> <RiDeleteBin6Line /> Remove </Link>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col md={2}>
                            <CardImg src={img3} />
                        </Col>

                        <Col md={7}>
                            <h5 color='info'>SanDisck Cruzer Blade USB Flash Driver 32GB</h5>
                            <p className='text-primary my-4'>High speed USB Flash drive</p>
                            <small className='color-primary'>Be the first to Whrite a review</small>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <IoIosStarHalf className='text-warning' />
                            <IoIosStarOutline className='text-warning' />
                            <p>3.9 (1234) <h8 className="text-primary font-size-18"> Reviews <BiChevronDown /></h8></p>
                        </Col>

                        <Col md={3} className=" text-end px-5">
                            <h5 className='text-end'>R 120</h5>
                            <div className='my-4'>
                                <Link className='add__to__cart  w-75'> <MdShoppingCart /> + Add to Card</Link>
                            </div>
                            <Link className='text-danger'> <RiDeleteBin6Line /> Remove </Link>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        </div>

    )
}

export default Wishlist
