
import { Card, CardBody } from "reactstrap"

import "swiper/css"
import "swiper/css/pagination"

import "../style.scss"
import imgTop from "./images/welc2.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../style.scss";
import { itemData } from "./itemData";

import { AiTwotoneStar } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { Button, Row } from "reactstrap";

// import required modules
import { FreeMode, Pagination } from "swiper";

function RelatedProducts() {
  return (
    <div className="related__section">
      <div className='top__header'>
        <img src={imgTop} alt="" />
      </div>
    
      <CardBody>
        <h4 className="my-4 ms-4">Costomers Also Bought </h4>
       
        <>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              100: {
                width: 500,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 500,
                slidesPerView: 2,
                
              },  
            }}
          
          
          
          >
            
            
            {
              itemData.map((item,i)=>{
                return (
          <SwiperSlide className="swipe__item">
              <img src={item.img} alt="" />
              <Row className="item__content mt-3">
                <h6>Mentos Chewing Gum Bottle Strawberry 35 Pieces</h6>
                <h5>R49</h5>
                <span className="star">
                  <AiTwotoneStar/><span className="star__content">4.7(71)</span>
                </span>
              </Row>
              <div className="btn-grp "><button className="cart__btn"><span className="icon"><MdShoppingCart/></span>Add to Cart</button></div>
            </SwiperSlide>
                )
              })
            }
            
            
          </Swiper>
    </>
      </CardBody>
    </div>
  )
}

export default RelatedProducts
