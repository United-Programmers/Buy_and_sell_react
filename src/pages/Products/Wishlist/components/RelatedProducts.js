import imgTop from "./images/welc2.jpg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.scss"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { itemData } from "./itemData";
import { Row, CardBody } from "reactstrap"
import { AiTwotoneStar } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { Pagination, Navigation } from "swiper";

function RelatedProducts() {
    return (
        <div className="related__section">
            <CardBody>
                <h4 className="my-4 ms-4"> Related products </h4>

                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            itemData.map((item, i) => {
                                return (
                                    <SwiperSlide className="swipe__item">
                                        <img src={item.img} alt="" />
                                        <Row className="item__content mt-3">
                                            <h6 className="text-center">Mentos Chewing Gum Bottle Strawberry 35 Pieces</h6>
                                            <h5>R49</h5>
                                            <span className="star">
                                                <AiTwotoneStar /><span className="star__content">4.7(71)</span>
                                            </span>
                                        </Row>
                                        <div className="btn-grp "><button className="cart__btn"><span className="icon"><MdShoppingCart /></span>Add to Cart</button></div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>

            </CardBody>
        </div>
    )
}

export default RelatedProducts
