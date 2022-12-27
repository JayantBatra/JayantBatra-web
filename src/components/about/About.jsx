import React from 'react'
import './about.css'
import ME from '../../assets/jayant.png'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Friends</h5>
              <small>200+ WorldWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui minima mollitia beatae quas id reiciendis? Non, maiores animi? Atque iure modi sint illo cum, quos culpa corrupti hic fuga omnis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, aliquid!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About