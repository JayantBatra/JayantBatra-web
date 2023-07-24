import React from "react";
import "./about.css";
import ME from "../../assets/jayant.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About PIC" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Friends</h5>
              <small>200+ WorldWide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
            <span style={{ fontWeight: "bold", color: "white" }}>
              Passionate software developer
            </span>{" "}
            with a keen interest in{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              diverse aspects of software development
            </span>
            , specializing in{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              deep learning and web development
            </span>
            .{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              Committed to crafting robust algorithms and innovative solutions
            </span>{" "}
            to intricate problems.{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              Proficient in multiple programming languages and frameworks
            </span>
            , including C, Java, Python, HTML, JavaScript, ReactJS, PyTorch,
            TensorFlow, and more.{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              Constantly seeking opportunities to expand knowledge and expertise
            </span>{" "}
            in data structures, algorithms, and cutting-edge technologies. With{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              meticulous attention to detail
            </span>{" "}
            and a{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              drive for excellence
            </span>
            , I am dedicated to creating efficient and impactful software
            solutions.{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              Let's connect and collaborate
            </span>{" "}
            on exciting projects in the world of software development and
            beyond.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
