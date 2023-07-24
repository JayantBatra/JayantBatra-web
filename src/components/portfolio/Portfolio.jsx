import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.jpeg";
import IMG3 from "../../assets/portfolio3.jpeg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.webp";
import IMG6 from "../../assets/portfolio6.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Alan-AI-News-Reading-Voice-Assistant-App",
    github: "https://github.com/JayantBatra/Alan-AI-News-App.git",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 2,
    image: IMG2,
    title: "Automatic Number Plate Detection Model",
    github: "https://github.com/JayantBatra/Number_Plate_Detection.git",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 3,
    image: IMG3,
    title: "ECOMERN - Ecommernce Web-Store",
    github: "https://github.com/JayantBatra/ECO-MERN.git/",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 4,
    image: IMG4,
    title: "IGPUFilter - A CUDA Image Processing Model",
    github: "https://github.com/JayantBatra/IGPUFilter.git",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 5,
    image: IMG5,
    title: "Anomaly-Detection-Using-Pycaret ",
    github:
      "https://github.com/JayantBatra/Anomaly-Detection-Using-Pycaret.git/",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 6,
    image: IMG6,
    title: "Multithreading and Multiprocessing",
    github: "https://github.com/JayantBatra/OS-Project.git",
    demo: "https://dribbble.com/Alien_pixels",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                {/* <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
