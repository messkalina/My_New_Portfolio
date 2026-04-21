import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFour";
import About from "../../components/about/AboutTwo";
import Portfolio from "../../components/portfolio/PortfolioTwo";
import Skills from "../../components/skills/SkillsTwo";

import Footer from "../../components/footer/Footer";

import Skills2 from "../../components/skills/Skills";

const HomeTwo = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home-two">
      <Header />

      <Slider />

      <Portfolio />

      <About />

      <Skills />

      {/* <ContactForm /> */}

      {/* <Video /> */}
      {/* End Video Section */}

      {/* <div className="shane_tm_section">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div> */}
      {/* End shane_tm_partners */}

      {/* <div className="shane_tm_section">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <span>Testimonials</span>
                  <h3>What clients say about my portfolio template</h3>
                </div>
              </div>

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* End  shane_tm_testimonials*/}
      {/* 
      <News />
      End Blog Section */}
      <Skills2 />

      {/* End CallToAction */}

      <Footer />
    </div>
  );
};

export default HomeTwo;
