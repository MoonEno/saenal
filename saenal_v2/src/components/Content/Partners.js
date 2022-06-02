import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, {Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";


function Partners() {

  SwiperCore.use([Navigation, Pagination]);
  return (
    <Fragment>
        <div className="heading">
            <h1><b style={{color:'#0CB8A5'}}>P</b>artners</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio minus optio?</p>
        </div>

        <Swiper
                spaceBetween={80}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 1,
                }}
                speed= {8000}
                breakpoints={{
                    768: {
                      slidesPerView: 5,
                    },
                    500: {
                        slidesPerView: 3,
                      },
                    300: {
                        slidesPerView: 1,
                      },
                  }}
                  modules={[Autoplay]}
       >
           <SwiperSlide>
                <div className="swiper-slide slide">
                    <div className="image">
                        <img src="images/partners/gwangmyung.jpg" alt="" />
                    </div>
                </div>
           </SwiperSlide>

           <SwiperSlide>
                <div className="swiper-slide slide">
                    <div className="image">
                        <img src="images/partners/seoul.png" alt="" />
                    </div>
                </div>
           </SwiperSlide>

           <SwiperSlide>
                <div className="swiper-slide slide">
                    <div className="image">
                        <img src="images/partners/siheung.jpg" alt="" />
                    </div>
                </div>
           </SwiperSlide>

           <SwiperSlide>
                <div className="swiper-slide slide">
                    <div className="image">
                        <img src="images/partners/ansan.png" alt="" />
                    </div>
                </div>
           </SwiperSlide>

           <SwiperSlide>
                <div className="swiper-slide slide">
                    <div className="image">
                        <img src="images/partners/gwangmyung.jpg" alt="" />
                    </div>
                </div>
           </SwiperSlide>

           <SwiperSlide>
                <div className="swiper-slide slide">
                    <div className="image">
                        <img src="images/partners/seoul.png" alt="" />
                    </div>
                </div>
           </SwiperSlide>

           <SwiperSlide>
                <div className="swiper-slide slide">
                    <div className="image">
                        <img src="images/partners/siheung.jpg" alt="" />
                    </div>
                </div>
           </SwiperSlide>

           <SwiperSlide>
                <div className="swiper-slide slide">
                    <div className="image">
                        <img src="images/partners/ansan.png" alt="" />
                    </div>
                </div>
           </SwiperSlide>


        </Swiper>
    </Fragment>
  )
}

export default Partners