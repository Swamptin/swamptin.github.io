import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.webp";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Various projects to fix a wide variety of issues.</small>
            </article>
          </div>
          <p>
            An IT generalist with 5+ years experience and a love of software development and secure solutions.
            <br />
            My goal is to deliver efficient, effective, and secure solutions. I adhere to the following principles in my work:
            <br />
            - I focus on providing solutions that address the customer's needs and solve their problems.
            <br />
            - I believe in keeping stakeholders engaged and informed throughout the development process, ensuring them.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
