import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination,Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";


const data = [
  {
    avatar: AVTR1,
    name: "Dave Batra",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit omnis ea debitis facere deleniti numquam, sunt atque? Quasat sit ipsam nobis commodi delectus veniam accusamus dolorem ipsum rem!mpedit omnis ea debitis facere deleniti numquam, sunt atque? Quas at sit ipsam nobis commodi dele'
  },
  {
    avatar: AVTR2,
    name: "Dave Batra",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit omnis ea debitis facere deleniti numquam, sunt atque? Quasat sit ipsam nobis commodi delectus veniam accusamus dolorem ipsum rem!mpedit omnis ea debitis facere deleniti numquam, sunt atque? Quas at sit ipsam nobis commodi dele'
  },
  {
    avatar: AVTR3,
    name: "Dave Batra",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit omnis ea debitis facere deleniti numquam, sunt atque? Quasat sit ipsam nobis commodi delectus veniam accusamus dolorem ipsum rem!mpedit omnis ea debitis facere deleniti numquam, sunt atque? Quas at sit ipsam nobis commodi dele'
  },
  {
    avatar: AVTR4,
    name: "Dave Batra",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit omnis ea debitis facere deleniti numquam, sunt atque? Quasat sit ipsam nobis commodi delectus veniam accusamus dolorem ipsum rem!mpedit omnis ea debitis facere deleniti numquam, sunt atque? Quas at sit ipsam nobis commodi dele'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials