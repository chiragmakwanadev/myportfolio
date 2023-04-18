import React from "react";

const Projects = () => {
  return (
    <section className="project">
      <div className="project-upper">
        <div className="project-caption about-caption">
          <div>moments</div>
          <div className="colortext">we capture</div>
        </div>
        <div className="project-quote about-quote">
          Perfection is achieved not when there is nothing more to add, but
          rather when there is nothing more to take away.
        </div>
      </div>
      <div className="project-bottom">
        <div className="project-left">
          <div className="project-header about-header">PROJECT</div>
          <div className="about-quote">
            Your website is the center of your digital eco-system, like a brick
            and mortar location, the experience matters once a customer enters,
            just as much as the perception they have of you before they walk
            through the door.
          </div>
          <div className="project-button">
            <input
              className="left-bottom"
              type="button"
              value="VIEW PROJECTS "
            />
          </div>
        </div>
        <div className="project-right">
          <div className="project-grid">
            <img className="grid1" src="../images/project1.jpg" alt="" />
            <img className="grid2" src="../images/project2.jpg" alt="" />
            <img className="grid3" src="../images/project3.jpg" alt="" />
            <img className="grid4" src="../images/project4.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
