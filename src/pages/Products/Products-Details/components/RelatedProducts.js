
import imgTop from "./images/welc2.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { itemData } from "./itemData";
import { Card,Row, CardBody } from "reactstrap"
import { AiTwotoneStar } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';

// import required modules
import { Pagination, Navigation } from "swiper";

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
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
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
