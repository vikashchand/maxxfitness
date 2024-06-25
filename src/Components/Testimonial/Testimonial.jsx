import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import screenshot1 from "../../assets/a.png";
import screenshot2 from "../../assets/b.png";
import screenshot3 from "../../assets/c.png";
import screenshot4 from "../../assets/e.png";
const Testimonial = () => {
  return (
    <div id='testimonial' className="testimonial">
      <div className="testimonial-heading">
        <span style={{ color: "var(--orange)", fontSize: "20px", fontWeight: "bold" }}>
          TESTIMONIAL
        </span>
        <p className="mt-4 head m-0 stroke">WHAT THEY SAY ABOUT US</p>
      </div>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper col-12"
      >
        <SwiperSlide className="slide">
          <div className="testimonial-slide">
            <img src={screenshot1} alt="Testimonial 1" className="testimonial-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-slide">
            <img src={screenshot2} alt="Testimonial 2" className="testimonial-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-slide">
            <img src={screenshot3} alt="Testimonial 3" className="testimonial-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
        <div className="testimonial-slide">
          <img src={screenshot4} alt="Testimonial 3" className="testimonial-image" />
        </div>
      </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
