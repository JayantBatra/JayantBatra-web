import React from "react";
import "./testimonials.css";
import AVTR4 from "../../assets/jpmc.jpg";
import AVTR1 from "../../assets/Intro-BD.jpg";
import AVTR2 from "../../assets/BD-M&M.jpg";
import AVTR3 from "../../assets/BD-I&P.jpg";
import AVTR5 from "../../assets/Project-Managment.jpg";
import AVTR6 from "../../assets/AD.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: "Coursera - Introduction to Big Data",
  },
  {
    avatar: AVTR2,
    name: "Coursera - Big Data Modeling and Management System",
  },
  {
    avatar: AVTR3,
    name: "Coursera - Big Data Integration and Processing",
  },
  {
    avatar: AVTR4,
    name: "Forage - Software Engineering Virtual Experience By JP Morgan Chase & Co.",
  },
  {
    avatar: AVTR5,
    name: "Coursera & Google - Foundations of Project Management",
  },
  {
    avatar: AVTR6,
    name: "Coursera - Build an Anomaly Detection Model using PyCaret",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Certifications Acquired 5+</h5>
      <h2>Certifications </h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" className="new" />
              </div>
              {/* <h5 className="client__name">{name}</h5> */}
              <small className="client__review">
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {name}
                </span>
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
