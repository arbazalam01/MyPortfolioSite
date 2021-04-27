import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import Heading from "../../utils/Heading";
import Card from "../../utils/Card/Card";

const edu = [
  {
    name: "Jamia Millia Islamia",
    year: "2019-2023",
    text:
      "Bachelor's of Technology in Electronics and Communication Engineering",
  },
  {
    name: "Senior Secondary at Jamia Senior Secondary School",
    year: "2017-2019",
    text:
      "Completed Senior Secondary Education from Jamia Senior Secondary School, New Delhi",
  },
];

const exp = [
  {
    name: "Elight SPM",
    year: "April 2021-Present",
    text:
      "Work as a Web Developer Intern",
  },
  {
    name: "The Sparks Foundation",
    year: "Jan 2021-Feb 2021",
    text:
      "Integrated Payment Gateway on Donation Website",
  },
];
const Experience = () => {
  return (
    <section id="experience" className="Experience">
      <Fade bottom cascade>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center mx-auto">
                <Heading firstname="Experience" classes="experience-head" />
                <div className="text-white pt-4 prog-font">
                  My Education and experience till date.
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 pt-3 ">
            <div className="col-lg-6 col-md-6 col-sm-12">
              {edu.map((edu) => (
                <Card
                  key={edu.name}
                  year={edu.year}
                  title={edu.name}
                  text={edu.text}
                />
              ))}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              {exp.map((exp) => (
                <Card
                  key={exp.name}
                  year={exp.year}
                  title={exp.name}
                  text={exp.text}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
