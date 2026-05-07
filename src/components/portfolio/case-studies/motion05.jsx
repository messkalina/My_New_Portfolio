import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Motion05 = () => {
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
        <div className="container">
          <div className="navigation-wrapper">
            <Link to="/?tab=motion#portfolio" className="back_button">
              ← PORTFOLIO / ANIMATION
            </Link>
            <Link to="/case-study/motion02" className="back_button">
              NEXT PROJECT →
            </Link>
          </div>
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="subtitle-container">
                <h1>
                  Motion graphics and post-production for Trivago’s national TV
                  campaign
                </h1>
              </div>
              <h4>Trivago TV Ad</h4>
              {/* <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How to adopt a predefined style for a video format in a TV
                    ad, that included live footage and motion graphics, while
                    ensuring the final product is visually engaging and
                    effectively communicates the brand message.
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
                        I took charge of motion graphics and post-production
                        supervision for Trivago’s TV commercial, which aired in
                        Germany and Austria. The project combined live-action
                        footage with integrated motion graphics.
                      </p>
                      <p>
                        I took charge of motion graphics and post-production
                        supervision for Trivago’s TV commercial, which aired in
                        Germany and Austria. The project combined live-action
                        footage with integrated motion graphics.
                      </p>
                    </div>
                  </div>

                  <div className="right">
                    <div data-aos="fade-up" data-aos-duration="1200">
                      <div className="text">
                        <p>
                          <strong>Timeline:</strong>
                          <br />
                          2017
                        </p>
                        <p>
                          <strong>Role:</strong>
                          <br />
                          Motion graphics designer, video-post production
                          supervisor
                        </p>
                        <p>
                          <strong>Scope:</strong>
                          <br />
                          Motion graphics design, video supervison &
                          post-production
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
                      handleImageClick(
                        "/img/portfolio/stylesframes/trivago_man/1.png",
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
                    src="/img/portfolio/stylesframes/trivago_man/2.png"
                    alt="Redesign Pages Comparison"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/stylesframes/trivago_man/2.png",
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

      {/* Bottom Navigation */}
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
              to="/case-study/motion02"
              className="back_button"
              style={{ float: "right" }}
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

export default Motion05;
