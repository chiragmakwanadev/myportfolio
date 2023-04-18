import React from "react";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-leftside">
        <div className="about-header">ABOUT ME</div>

        <div className="about-quote">
          Perfection is achieved not when there is nothing more to add, but
          rather when there is nothing more to take away.
        </div>
        <div>
          <h1 className="about-header">MY SPECIALTIES</h1>
          <h2 className="hashtags">
            <li>DEVELOPER</li>
            <li>GAMER</li>
            <li>AUDIOPHILE</li>
            <li>INTERIOR</li>
            <li>SLACKER</li>
            <li>FOOD</li>
            <li>ARCHITECT</li>
          </h2>
        </div>
      </div>
      <div className="about-rightside">
        <img className="side-img1" src="" alt="" />
      </div>
    </div>
  );
};

export default About;
