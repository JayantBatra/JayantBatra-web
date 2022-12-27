import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { SiLinkedin } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9b0j3h",
        "template_xhmgx7r",
        form.current,
        "D3WKGHJ_wQ93y0YxM"
      )
      
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jayant00025@gmail.com</h5>
            <a href="mailto:jayant00025@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Jayant Batra</h5>
            <a
              href="https://linkedin.com/in/jayant-batra-933104219"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 72063-41354</h5>
            <a href="https://wa.me/+917206341354" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact