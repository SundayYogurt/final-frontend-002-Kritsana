import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="Footer">
      <div className="footer-row">
        {/* Quick Links Section */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Popular Services Section */}
        <div className="footer-col">
          <h4>Popular Services</h4>
          <ul className="links">
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">SEO Services</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">App Development</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="links">
            <li>
              <a href="#">Address: 123 Main St, City</a>
            </li>
            <li>
              <a href="#">Email: info@example.com</a>
            </li>
            <li>
              <a href="#">Phone: +123 456 7890</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for the latest updates and exclusive
            offers.
          </p>
          <form action="#">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
