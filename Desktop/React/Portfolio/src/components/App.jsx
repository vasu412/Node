import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../css/index.css";
import animation from "./animation";
import Socials from "./socials";
import Project from "./project";
import Skills from "./skills";
import { ScrollTrigger } from "gsap/all";

const Parallax2 = () => {
  const [header, setHeader] = useState(false);
  const [skill, setSkill] = useState(false);
  const [project, setProject] = useState(false);
  const [social, setSocial] = useState(false);

  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    if (header) {
      gsap.fromTo(
        ".header-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [header]);

  useEffect(() => {
    if (project) {
      ScrollTrigger.refresh();
    }
  }, [project]);

  return (
    <>
      {header && (
        <div className="header">
          <i
            className="material-icons menu close"
            onClick={() => setHeader(false)}>
            close
          </i>
          <div className="header-content">
            <a href="#">
              <span>HOME</span>
            </a>
            <a href="#skills">
              <span>SKILLS</span>
            </a>
            <a href="#projects">
              <span>PROJECTS</span>
            </a>
            <a href="#socials">
              <span>SOCIALS</span>
            </a>
            <a href="#contact">
              <span>CONTACT</span>
            </a>
          </div>
        </div>
      )}
      <i
        className="hero-text material-icons menu"
        onClick={() => setHeader(true)}
        style={{ display: `${!header ? "block" : "none"}` }}>
        menu
      </i>
      <section>
        <div id="hero" className="bg">
          <video autoPlay muted loop id="heroVideo">
            <source
              src="/public/5495781-uhd_2560_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-content">
            <h1 className="hero-text title">VASU SINGLA</h1>
            <h2 className="hero-text subtitle">A FULL STACK WEB DEVELOPER</h2>
            <a href="#skills">
              <i className="hero-text material-icons">keyboard_arrow_down</i>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg"
          id="skills"
          //  style={{ filter: "grayscale(1)" }}
        ></div>
        <div className="other-content">
          <h1 className="hero-text title">SKILLS</h1>
          <a href="#skill-section">
            <div className="circle hero-text" onClick={() => setSkill(true)}>
              <i className=" material-icons">add</i>
            </div>
          </a>
        </div>
      </section>

      {skill && (
        <section id="skill-section">
          <Skills setSkill={setSkill} />
        </section>
      )}

      <section>
        <div className="bg" id="projects"></div>
        <div className="other-content">
          <h1 className="hero-text title">PROJECTS</h1>
          <a href="#project-section">
            <div className="circle hero-text" onClick={() => setProject(true)}>
              <i className=" material-icons">add</i>
            </div>
          </a>
        </div>
      </section>

      {project && (
        <section id="project-section">
          <Project setProject={setProject} />
        </section>
      )}

      <section>
        <div className="bg" id="socials"></div>
        <div className="other-content">
          <h1 className="hero-text title">SOCIALS</h1>
          <a href="#social-section">
            <div className="circle hero-text" onClick={() => setSocial(true)}>
              <i className=" material-icons">add</i>
            </div>
          </a>
        </div>
      </section>

      {social && (
        <section id="social-section">
          <Socials setSocial={setSocial} />
        </section>
      )}

      <section>
        <div className="bg" id="contact"></div>
        <div className="other-content">
          <h1 className="hero-text title">CONTACT</h1>
          <div className="circle hero-text">
            <i className=" material-icons">add</i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Parallax2;
