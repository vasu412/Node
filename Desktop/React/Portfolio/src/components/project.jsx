import React from "react";

const Project = ({ setProject }) => {
  return (
    <div className="subSections">
      <a href="#projects">
        <div className="circle" onClick={() => setProject(false)}>
          <i className=" material-icons">remove</i>
        </div>
      </a>
      <div className="projectBoxes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Project;
