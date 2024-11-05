import React from "react";
import racket from "../assets/images/racket.png";
const Home = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-name">
          Buy High-Quality Badminton Rackets at Great Prices
          <span className="typedText"></span>
        </div>

        <div className="featured-text-info">
          <p>
            Shop for the best badminton rackets from top brands, offering
            options for both beginners and professionals. Quality guaranteed,
            with competitive prices and fast shipping across Thailand!
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Shop Now! <i className="uil uil-file-download-alt"></i>
          </button>
          <button className="btn">
            Know More <i className="uil uil-file-download-alt"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instragram.com/se_npru">
              <img className="uil uil-instagram-alt"></img>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.instragram.com/se_npru">
              <i className="uil uil-facebook-f"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.instragram.com/se_npru">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={racket} alt="racket" />
        </div>
      </div>
    </section>
  );
};

export default Home;
