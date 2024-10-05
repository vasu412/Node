import React from "react";

const Skills = ({ setSkill }) => {
  return (
    <div className="subSections">
      <a href="#skills">
        <div className="circle" onClick={() => setSkill(false)}>
          <i className=" material-icons">remove</i>
        </div>
      </a>
      <div className="skillBoxes">
        <div className="java">Java</div>
        <div className="git">Git</div>
        <div className="html">HTML</div>
        <div className="css">CSS</div>
        <div className="tailwind">Tailwind</div>
        <div className="js">JavaScript</div>
        <div className="react">React</div>
        <div className="node">Node.js</div>
      </div>
    </div>
  );
};

export default Skills;
