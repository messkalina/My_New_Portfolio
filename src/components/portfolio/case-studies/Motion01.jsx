import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Motion01 = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (imgSrc) => {
    setLightboxImg(imgSrc);
    setLightboxOpen(true);
  };

  return (
    <div className="shane_tm_all_wrap">
      <Header />

      {/* Hero section */}
      <div className="shane_tm_hero_case_study">
        <div></div>
        <div className="container">
          <div>
            <div>
              <Link to="/#portfolio" className="back_button">
                ← BACK
              </Link>
            </div>
          </div>
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>Neptune Apps Demo</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="shane_tm_section">
        <div className="container">
          <div
            className="hero_description"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "60px",
              }}
            >
              Timeline: <span className="timeline-fine">2024</span>
            </p>
          </div>
        </div>
      </div>

      <div className="shane_tm_hero_case_study">
        <div className="container">
          <div className="content">
            <div className="shane_tm_section">
              <div
                className="case-study-intro-section"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="top">
                  <p className="text">
                   Snippets from a walkthrough video demonstrating medical apps features and useflow I did when working at Orbit Health company.
                  <strong> Tools:</strong> Figma, Adobe XD, After Effects
                  </p>
                 

                    <br />
                  <h3 className="title">Key Work</h3>
                  
                    <ul className="case-study-list">
                      <li>
                        <strong>motion design</strong> 
                      </li>
                      <li>
                        <strong>video post production</strong> 
                      </li>
                      <li>
                        <strong>video editing</strong> 
                      </li>
                    </ul>
                    
                   
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      
      <Footer />
    </div>
  );
};

export default Motion01;
