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
              <Link to="/case-study/motion02" className="back_button">
                ← PREVIOUS PROJECT
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
                <h1>
                  Story-driven motion graphics that cut through crowded social
                  feeds
                </h1>
              </div>
              <h4>Social Media Video Ad</h4>
              {/* <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How storyretelling and motion design to create a visually
                    engaging video ad for social media, that effectively
                    communicates the brand message and stands out in a crowded
                    feed.
                  </h5>
                </div>
              </div> */}
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
              src="/img/portfolio/stylesframes/talon/social media ad_taloncm.mp4"
              style={{ width: "100%" }}
              autoPlay
              loop
              muted
              playsInline
              poster="/img/portfolio/stylesframes/talon/social media ad_taloncm.mp4"
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
                        I created a social media video ad for a tech company
                        promoting their customer engagement platform. The goal
                        was to stand out in fast-scrolling feeds while clearly
                        communicating the brand’s value.
                      </p>
                      <p>Using bold illustrations, dynamic animations, and clever visual metaphors, I turned abstract product benefits into a simple, entertaining story. The mix of character animation and graphic elements made the ad feel alive and memorable.</p>
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
                    src="/img/portfolio/stylesframes/talon/1.png"
                    alt="Redesign Pages Comparison"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/stylesframes/talon/1.png",
                      )
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
                    src="/img/portfolio/stylesframes/talon/2.png"
                    alt="Redesign Pages Comparison"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/stylesframes/talon/2.png",
                      )
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
                      src="https://www.youtube.com/embed/IgY4LgvxP0I"
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
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            width: "100vw",
            height: "100vh",
            overflow: "auto",
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxImg}
            alt="Wireframe Full"
            style={{
              display: "block",
              margin: "40px auto",
            }}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Motion04;
