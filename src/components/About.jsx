import React from "react";
import court from "../assets/images/court.png";

const About = () => {
  return (
    <section className="featured-box" id="about">
      <div className="featured-text">
        <div className="featured-name">About</div>
        <div className="featured-text-info">
          <p>
            From humble beginnings to where we are today, our journey is one of
            passion, dedication, and growth. We started with a simple vision: to
            provide the best [product/service] with unmatched quality and
            customer service. Join us as we continue to make a difference!
          </p>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={court} alt="court" />
        </div>
      </div>
    </section>
  );
};
export default About;
