import React from "react";
import kawa from "../assets/images/KAWASAKI.png";
import fe from "../assets/images/FELET.png";
import mizu from "../assets/images/MIZUNO.png";
import victor from "../assets/images/VICTOR.png";
const Popular = () => {
  return (
    <>
      <div className="top-header">
        <h1>Best Saler!</h1>
      </div>
      <section className="card-container" id="popular">
        <div className="card">
          <div className="card-image">
            <img src={kawa} alt="Badminton Racket" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Badminton Racket</h3>
            <p className="card-description">
              A high-quality badminton racket designed for performance and
              durability.
            </p>
            <div className="card-footer">
              <span className="price">$45.99</span>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={mizu} alt="Tennis Racket" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Tennis Racket</h3>
            <p className="card-description">
              A premium tennis racket for all levels of play. Feel the
              difference with every hit.
            </p>
            <div className="card-footer">
              <span className="price">$79.99</span>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={fe} alt="Tennis Racket" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Tennis Racket</h3>
            <p className="card-description">
              A premium tennis racket for all levels of play. Feel the
              difference with every hit.
            </p>
            <div className="card-footer">
              <span className="price">$79.99</span>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={victor} alt="Tennis Racket" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Tennis Racket</h3>
            <p className="card-description">
              A premium tennis racket for all levels of play. Feel the
              difference with every hit.
            </p>
            <div className="card-footer">
              <span className="price">$79.99</span>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </section>
    </>
  );
};

export default Popular;
