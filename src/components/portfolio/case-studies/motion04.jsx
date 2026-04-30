import React, { useEffect, useState } from "react";
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
            <div className="navigation-wrapper">
              <Link to="/?tab=motion#portfolio" className="back_button">
                ← PORTFOLIO / ANIMATION
              </Link>
              <Link to="/case-study/motion06" className="back_button">
                NEXT PROJECT →
              </Link>
            </div>
          </div>
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              
              <div className="subtitle-container">
                <h1>Standing out in social media feed</h1>
              </div>
              <h4>Social Media Video  Ad</h4>
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How storyretelling and motion design to create a visually engaging video ad for social media, that effectively communicates the brand message and stands out in a crowded feed.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video and Overview Section */}
      <div
        className="full-image-section"
        style={{ width: "100%" }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container">
          <div className="content">
            <video
              src="/img/portfolio/stylesframes/trivago_man/trivago_TVC_Deutschlandcm.mp4"
              style={{ width: "100%" }}
              autoPlay
              loop
              muted
              playsInline
              poster="/img/portfolio/stylesframes/trivago_man/trivago_TVC_Deutschlandcm.mp4"
            />

            {/* Overview section */}
            <div className="shane_tm_section">
              <div className="shane_tm_about">
                <div className="about_inner">
                  <div className="left">
                    <div
                      className="shane_tm_title"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <span>Overview</span>
                      <p>
                        Social media video created for a tech company promoting their customer engagement platform.
                      </p>
                    </div>
                  </div>

                  <div className="right">
                    <div data-aos="fade-up" data-aos-duration="1200">
                      <div className="text">
                        <p>
                          <strong>Timeline:</strong>
                          <br />
                          2022
                        </p>
                        <p>
                          <strong>Role:</strong>
                          <br />
                          Motion graphics designer
                        </p>
                        <p>
                          <strong>Scope:</strong>
                          <br />
                          Concept, art direction, motion graphics design
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/stylesframes/trivago_man/1.png"
                    alt="Redesign Pages Comparison"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick("/img/portfolio/stylesframes/trivago_man/1.png")
                    }
                  />
                  <div className="image_caption">
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/stylesframes/trivago_man/2.png"
                    alt="Redesign Pages Comparison"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick("/img/portfolio/stylesframes/trivago_man/2.png")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Section */}
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
                  <div
                    className="case-study-video"
                    style={{
                      marginTop: "56px",
                      marginBottom: "56px",
                      textAlign: "center",
                    }}
                  >
                    <iframe
                      width="800"
                      height="450"
                      src="https://www.youtube.com/embed/ajRg-LXQ8Jg"
                      title="Social Media Video Ad"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ maxWidth: "100%" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shane_tm_section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <Link to="/#portfolio" className="back_button">
              ← PORTFOLIO / ANIMATION
            </Link>
            <Link
              to="/case-study/motion06"
              className="back_button"
              style={{
                float: "right",
              }}
            >
              NEXT PROJECT →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Motion04;
