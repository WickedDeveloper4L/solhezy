/* eslint-disable no-unused-vars */
import "./hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="main">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        className="swiper"
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: true }}
      >
        <SwiperSlide className="swiper_slide">
          <div className="con">
            <span className="text">
              According to a study by ADigital, 80% of users check their email
              several times a day. Believe it or not, email marketing is a
              channel with one of the highest ROIs.
            </span>
            <a
              className="link"
              href="https://airtable.com/appSaNlCf3MbTcDKW/pagGj2WMmqeyXg2UQ/form
"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_slide">
          <div className="con">
            <span className="text">
              Our team is always focused on getting results and optimizing our
              clients’ budgets.
            </span>
            <a
              className="link"
              href="https://airtable.com/appSaNlCf3MbTcDKW/pagGj2WMmqeyXg2UQ/form
"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
