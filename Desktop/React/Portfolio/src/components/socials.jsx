import React from "react";

const Socials = ({ setSocial }) => {
  return (
    <div className="subSections">
      <a href="#socials">
        <div className="circle" onClick={() => setSocial(false)}>
          <i className=" material-icons">remove</i>
        </div>
      </a>
      <div className="boxes">
        <div
          className="github box"
          onClick={() => window.open("https://github.com/dashboard", "_blank")}>
          <span>GITHUB : @Vasu412</span>
        </div>
        <div
          className="linkedin box"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/vasu-singla-38bbb72a8/",
              "_blank"
            )
          }>
          <span>LINKEDIN</span>
        </div>
        <div
          className="slack box"
          onClick={() =>
            window.open("https://fs-16.slack.com/team/U05M06BE9SM", "_blank")
          }>
          <span>SLACK</span>
        </div>
        <div
          className="instagram box"
          onClick={() =>
            window.open("https://www.instagram.com/_vasu.singla/", "_blank")
          }>
          <span>INSTAGRAM : @_vasu.singla</span>
        </div>
      </div>
    </div>
  );
};

export default Socials;
