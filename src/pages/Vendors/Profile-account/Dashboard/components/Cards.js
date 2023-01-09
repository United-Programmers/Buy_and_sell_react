import React from 'react';
import { RxPerson } from 'react-icons/rx';
import {ImArrowDownLeft2 } from 'react-icons/im';
import {BsArrowCounterclockwise } from 'react-icons/bs';
import {HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import {Row, Card, Col} from "react-bootstrap";
import { dataCards } from './dataCards';

function Cards() {
    return (
        <div className='cards'>
           <div className='cards__container-one'>
             {dataCards.map(data=>{
                return(
                 <div>
                   <Card className='card__wrapper'>
                        <div className='cards__container  '>
                            <div className="cards__account text-center ">
                                <RxPerson/>
                            </div>
                            <div className='mt-2 ms-2'>
                                
                                
                                <h6 className='cards__earning'>{data.earn}</h6>
                                <span>
                                    <span className='cards__price'>{data.amount}</span><span className='cards__tax'>{data.tax}</span>
                                   
                                </span>
                                <div className="cards__month">
                                      <span>last Month <HiOutlineArrowNarrowLeft/></span>
                                </div>
                              
                                
                            </div>
                            <div className="cards__icome">
                              <ImArrowDownLeft2/>
                            </div>
                        </div>
                    </Card>
                </div>
                
                )
             })}
                
               
                
               
           </div>
            
        </div>
    )
}

export default Cards


