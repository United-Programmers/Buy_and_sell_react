import React from 'react'

import { Card, Row, Col, CardBody, CardImg } from 'reactstrap'
import img1 from "../../../../assets/images/product/img-7.png";
import img2 from "../../../../assets/images/product/img-4.png";
import img3 from "../../../../assets/images/product/img-10.png";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStar, BsStarHalf } from 'react-icons/bs';
import { IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import { BiChevronDown } from 'react-icons/bi';

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
                        <h2 color='info'>SanDisck Cruzer Blade USB Flash Driver 32GB</h2>
                        <h4 className='text-primary my-4'>High speed USB Flash drive</h4>
                        <h6 className='color-primary'>Be the first to Whrite a review</h6>
                        <AiFillStar className='text-warning'/>
                        <AiFillStar className='text-warning'/>
                        <AiFillStar className='text-warning'/>
                        <IoIosStarHalf className='text-warning'/>
                        <IoIosStarOutline className='text-warning'/>
                        <p>3.9 (1234)</p>
                        <h5 className='font-family-bold'>In stock</h5>
                    </Col>

                    <Col md={3} className=" text-end px-5">
                        
                        <h1 className='text-end'>R 120</h1>
                        <div className='my-4'>
                            <button className='btn btn-primary w-75'>Add to Card</button>
                        </div>
                        <div className=''>
                        <button className='btn btn-danger w-75'>Remove</button>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>


        <Card>
            <CardBody> 
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col md={2}>
                        <div className='image'>
                        <CardImg src={img2} />
                        </div>
                    </Col>

                    <Col md={7}>
                        <h2 color='info'>Thinking out Loud Men's "I MAY BE WRONG but I doubt it</h2>
                        <h4 className='text-primary my-4'>Thinking out Loud</h4>
                        <h6 className='color-primary'>Be the first to Whrite a review</h6>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <IoIosStarHalf />
                        <IoIosStarOutline />
                        <p>3.9 (1234)</p>
                        <h5 className='font-family-bold'>In stock</h5>
                    </Col>

                    <Col md={3} className=" text-end px-5">
                        
                        <h1 className='text-end'>R 100</h1>
                        <div className='my-4'>
                            <button className='btn btn-primary w-75'>Add to Card</button>
                        </div>
                        <div className=''>
                            <button className='btn btn-danger w-75'>Remove</button>
                        </div>
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
                        <h2 color='info'>Volkano Wired Mouse Earth Series</h2>
                        <h4 className='text-primary my-4'>Volkano</h4>
                        <h6>Hassle-Free Exchanges & Returns for 30 Days </h6>                        
                        <p> <AiFillStar className='text-warning'/> <AiFillStar className='text-warning'/> <IoIosStarHalf className='text-warning'/> <IoIosStarOutline className='text-warning'/> 3.9 (1234) <h6 className='text-primary'>Reviews <BiChevronDown /> </h6></p>
                        <h5 className='font-family-bold'>In stock</h5>
                    </Col>

                    <Col md={3} className=" text-end px-5">
                        
                        <h1 className='text-end'>R 59</h1>
                        <div className='my-4'>
                            <button className='btn btn-primary w-75'>Add to Card</button>
                        </div>
                        <div className=''>
                            <button className='btn btn-danger w-75'>Remove</button>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
</div>

  )
}

export default Wishlist
