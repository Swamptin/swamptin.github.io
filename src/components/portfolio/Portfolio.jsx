import "./portfolio.css";

import IMG1 from "../../assets/Rust.png";
import IMG2 from "../../assets/Wedding.png";
import IMG3 from "../../assets/Mobinspire.png";
import IMG4 from "../../assets/Raise.png";
import IMG5 from "../../assets/Potsave.png";
import IMG6 from "../../assets/Health.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Rust Todo",
      img: IMG1,
      description:
        "This is a commandline TODO app written in the Rust programming language. I wrote this to learn more about Rust as a programming language and to see if it was a good fit for future personal projects.",
      technologies: "Rust",
      link: "https://github.com/Swamptin/rust_todo_cli_tool",
    },
    {
      id: 2,
      title: "Wedding Website",
      img: IMG2,
      description:
        "A website I created to share the details of my wedding and collect RSVP info. I wrote it in HTML, PHP, and Javascript as they allowed me to do everything I needed to do.",
      technologies: "HTML | PHP | Javascript",
      link: "http://swamptin.ie/wedding/",
    },
    {
      id: 3,
      title: "Mob Inspire",
      img: IMG3,
      description:
        "Mob Inspire streamlines the business operations in corporate sector by providing cost-effective and highly productive software solutions.",
      technologies: "Nginx | PHP | MySQL | jQuery",
      link: "https://www.mobinspire.com/",
    },
    {
      id: 4,
      title: "Raise",
      img: IMG4,
      description:
        "Get started with free educational courses to mastery the foundations of startup equity as an African business.",
      technologies: "Remix | React.js | Webflow | jQuery",
      link: "https://www.raise.africa/",
    },
    {
      id: 5,
      title: "Potsave",
      img: IMG5,
      description:
        "Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.",
      technologies: "React | Next.js | Lodash | Tailwind CSS",
      link: "https://dev-pwa.potsave.com/",
    },
    {
      id: 6,
      title: "Health",
      img: IMG6,
      description:
        "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
      technologies: "Angular | Drupal | Nginx | TypeScript",
      link: "https://healthcare.utah.edu/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
