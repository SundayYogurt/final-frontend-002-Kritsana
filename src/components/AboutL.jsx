import React from "react";
import racket2 from "../assets/images/racket2.png";
const AboutL = () => {
  return (
    <section className="featured-box" id="aboutL">
      <div className="featured-image">
        <div className="image">
          <img src={racket2} alt="racket2" />
        </div>
      </div>
      <div className="featured-text">
        <div className="featured-name">Where It All Began</div>
        <div className="featured-text-info">
          <p>
            In [year], a group of passionate individuals came together to create
            something special. From a small workshop to a recognized name in the
            industry, our story is a testament to dedication, teamwork, and the
            desire to make a positive impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutL;
