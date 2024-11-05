import React from "react";

const Navbar = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className == "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">BADMINTON</p>
      </div>

      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list"></ul>

        <li className="nav_list">
          <a href="#home" className="nav-link active-link">
            Home
          </a>
        </li>
        <li className="nav_list">
          <a href="#about" className="nav-link ">
            About
          </a>
        </li>
        <li className="nav_list">
          <a href="#popular" className="nav-link ">
            Popular
          </a>
        </li>
        <li className="nav_list">
          <a href="#review" className="nav-link ">
            Review
          </a>
        </li>
        <div className="nav-menu-btn">
          <i className="uil uil-bars" onClick={menuFunction}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
