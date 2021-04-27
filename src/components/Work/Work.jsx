import React from "react";
import { Fade } from "react-reveal";
import Heading from "../../utils/Heading";
import "./Work.css";
import WorkCard from "../../utils/WorkCard/WorkCard";
import typingspeed from "../../assests/TypingSpeed.jpg";
import SnakeGame from "../../assests/SnakeGame.jpg";
import DomainSearch from "../../assests/DomainSearch.jpg";
import Covid from "../../assests/Covid.jpg";

const Work = () => {
  const workList = [
    {
      title: "TypingSpeed",
      description:
        "A Web Application to test the typing speed of a user.",
      image: typingspeed,
      techlist: ["ReactJS", "HTML", "CSS"],
      githubLink: "https://github.com/arbazalam01/typingspeed",
    },
    {
      title: "DomainSearch",
      description:
        "Search available domain names using keywords",
      image: DomainSearch,
      techlist: ["ReactJS", "HTML", "CSS"],
      githubLink: "https://github.com/arbazalam01/DomainSearch",
    },
    {
      title: "Snake Game",
      description:
        "Play Snake Game Using Arrow Keys..",
      image: SnakeGame,
      techlist: ["Python", "PyGame"],
      githubLink: "https://github.com/arbazalam01/Snake-Game",
    },
    {
      title: "Covid-19 Status",
      description:
        "Covid-19 Live Status of Delhi And Uttar Pradesh",
      image: Covid,
      techlist: ["Python"],
      githubLink: "https://github.com/arbazalam01/Corona-",
    },
  ];
  return (
    <section id="work" className="Work">
      <Fade bottom cascade>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center mx-auto mt-4">
                <Heading firstname="My" lastname="Work" />
                <div className="text-white pt-4">
                  Some of my projects and work.
                </div>
              </div>
            </div>
          </div>
        
          {workList.map((work, index) => (
            <WorkCard
              key={index}
              index={index}
              title={work.title}
              image={work.image}
              techlist={work.techlist}
              githubLink={work.githubLink}
              description={work.description}
            />
          ))}
        
          <div className="row justify-content-center pt-5 text-white">
            For more projects checkout my
            <a
              href="https://github.com/arbazalam01"
              className="ml-1 github_link"
            >
              {" "}
              GitHub Profile
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Work;
