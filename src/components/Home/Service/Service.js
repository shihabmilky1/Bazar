import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './Service.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import Offer from "../../../images/service/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png"
import Offer2 from "../../../images/service/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png"
import Offer3 from "../../../images/service/offer-3-2f8285b13bef950f843cb4147666af6e.png"
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);



const Service = () => {
    return (
        <section className="service-container">
            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide><img src={Offer} alt="" className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={Offer2} alt="" className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={Offer3} alt="" className="img-fluid" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Service;