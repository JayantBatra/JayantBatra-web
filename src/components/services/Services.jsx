import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";
import avatar from "../../assets/global.png";
const Services = () => {
  return (
    <section id="services">
      <h5>Experiences</h5>
      <h2>Internships</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <img src={avatar} alt="Avatar" className="service__avatar" />
            <h3>GlobalLogic - Summer Intern</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Spearheaded the end-to-end development of a sophisticated
                eCommerce website, utilizing the powerful MERN stack, to deliver
                a seamless shopping experience to users. The comprehensive
                platform included features such as a user-friendly cart, secure
                login system, efficient product management, and an admin
                dashboard for streamlined operations.
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Drove innovation by introducing cutting-edge functionalities,
                such as an audio search option for products and an intelligent
                chatbot powered by Dialogflow. These forward-thinking features
                not only elevated user engagement but also demonstrated my
                ability to implement advanced technologies in practical
                applications.
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Implemented the Lerna framework for monoRepo management,
                optimizing code organization and version control within the web
                application. By adopting Lerna, I successfully streamlined the
                development process, enabling smoother collaboration among team
                members and facilitating seamless integration of various
                components.
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Embraced a collaborative and dynamic work environment, actively
                engaging with cross-functional teams comprising developers,
                designers, and project managers. Through effective communication
                and teamwork, I played a pivotal role in achieving project
                milestones, contributing to the overall success of the eCommerce
                platform.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX  */}
      </div>
    </section>
  );
};

export default Services;
