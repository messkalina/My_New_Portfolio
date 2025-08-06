import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Motion04 = () => {
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
              <Link to="/?tab=motion#portfolio" className="back_button">
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
              <h1>Social Media Video Ad</h1>
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
              Timeline: <span className="timeline-fine">2019 - 2022</span>
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
                   Video ad created for social media<br />
                  <strong> Tools:</strong> Adobe After Effects, Photoshop, Illustrator
                  </p>
                 

                    <br />
                  <h3 className="title">Key Work</h3>
                  
                    <ul className="case-study-list">
                      <li>
                        <strong>Ideation</strong> 
                      </li>
                      <li>
                        <strong>Visual assets</strong> 
                      </li>
                      <li>
                        <strong>Motion graphics design</strong> 
                      </li>
                  
                    </ul>
                    <div className="case-study-video" style={{ marginTop: "56px", marginBottom: "56px", textAlign: "center" }}>
                        <iframe
                            width="800"
                            height="450"
                            src="https://www.youtube.com/embed/IgY4LgvxP0I"
                            title="Social Media Video Ad"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ maxWidth: "100%", borderRadius: "12px" }}
                        ></iframe>
                    </div>
                   
                  
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

export default Motion04;
