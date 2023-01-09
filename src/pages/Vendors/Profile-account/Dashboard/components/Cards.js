import React from 'react';
import { RxPerson } from 'react-icons/rx';
import {ImArrowDownLeft2 } from 'react-icons/im';
import {Row, Card, Col} from "react-bootstrap";


function Cards() {
    return (
        <div className='cards'>
            <Row className='align-items-center justify-content-center'>
                <Col md>
                    <Card className='card__wrapper'>
                        <div className='cards__container  '>
                            <div className="cards__account text-center ">
                                <RxPerson/>
                            </div>
                            <div className='mt-2 ms-2'>
                                <h6 className='cards__earning'>Earnings before taxes</h6>
                                <span>
                                    <span className='cards__price'>R 30 400</span><span className='cards__tax'>+2.5%</span>
                                </span>
                            </div>
                            <div className="cards__icome">
                              <ImArrowDownLeft2/>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md>
                    <Card className='card__wrapper'>
                        <div className='cards__container  '>
                            <div className="cards__account text-center ">
                                <RxPerson/>
                            </div>
                            <div className='mt-2 ms-2'>
                                <h6 className='cards__earning'>Earnings before taxes</h6>
                                <span>
                                    <span className='cards__price'>R 30 400</span><span className='cards__tax'>+2.5%</span>
                                </span>
                            </div>
                            <div className="cards__icome">
                              <ImArrowDownLeft2/>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md>
                    <Card className='card__wrapper'>
                        <div className='cards__container  '>
                            <div className="cards__account text-center ">
                                <RxPerson/>
                            </div>
                            <div className='mt-2 ms-2'>
                                <h6 className='cards__earning'>Earnings before taxes</h6>
                                <span>
                                    <span className='cards__price'>R 30 400</span><span className='cards__tax'>+2.5%</span>
                                </span>
                            </div>
                            <div className="cards__icome">
                              <ImArrowDownLeft2/>
                            </div>
                        </div>
                    </Card>
                </Col>
                
                
            </Row>
            
        </div>
    )
}

export default Cards
