import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cards from "./components/Cards";
import About from "./components/About";
import Popular from "./components/Popular";
import Review from "./components/Review";
import AboutL from "./components/AboutL";

function App() {
  useEffect(() => {
 
    const sections = document.querySelectorAll("section[id]");
    console.log(sections);


    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");
        console.log(sectionHeight, sectionTop, sectionId);


        const activeLink = document.querySelector(
          ".nav-menu a[href*=" + sectionId + "]"
        );

  
        if (activeLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            activeLink.classList.add("active-link");
          } else {
            activeLink.classList.remove("active-link");
          }
        }
      });
    }

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 150 });
    sr.reveal(".social_icons", { delay: 150 });
    sr.reveal(".featured-image", { delay: 100 });
    sr.reveal(".featured-text-btn", { delay: 150 });


    sr.reveal(".card-container", { delay: 200 });


    sr.reveal(".project-box", { delay: 200 });


    sr.reveal(".top-header", {});


    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 150 });
    srLeft.reveal(".contact-info", { delay: 100 });


    const srRight = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 150 });
    srRight.reveal(".form-control", { delay: 150 });

   
    window.addEventListener("scroll", scrollActive);

 
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []); 

  return (
    <div className="App">
      <Navbar />
      <main className="wrapper">
        <Home />
        <Cards />
        <About />
        <AboutL />
        <Popular />
        <Review />
      </main>
      <Footer />
    </div>
  );
}

export default App;
