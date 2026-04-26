import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Motion02 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Link to="/case-study/motion03" className="back_button">
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
              {" "}
              <div className="subtitle-container">
                <h1>Grabbing attention with stop motion animation</h1>
              </div>
              <h4>Social Media Video Ad</h4>
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How utilising tradidional animation look with live footage
                    can help create engaging content for social media
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="full-image-section"
        style={{ width: "100%" }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container">
          <div className="content">
            <div>
              <img
                src="/img/portfolio/stylesframes/wolt/Wolt_verA_16_9_ENG02_1.gif"
                alt="Wireframe"
                style={{ width: "100%" }}
              />

              {/* Overview section */}
              <div className="shane_tm_section">
                <div className="shane_tm_about">
                  <div>
                    <div className="about_inner">
                      <div className="left">
                        <div
                          className="shane_tm_title"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                          {" "}
                          <span>Overview</span>
                          <p>
                            This video was a design challenge I did during
                            recruitment process during for a company. The task
                            was to create a video ad for social media that would
                            attract new customers. I used motion graphics and
                            video editing skills while using provided video
                            footage.
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
                              Sole motion graphics designer
                            </p>

                            <p>
                              <strong>Scope:</strong>
                              <br />
                              Concept, script, art direction, visual design,
                              motion graphics design, video editing, sound
                              design
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
        </div>
      </div>
 <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/stylesframes/wolt/Wolt_verA_16_9_ENG04_cm.gif"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p></p>
                  </div>
                </div>
              </div>
              {/* End right */}
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/stylesframes/wolt/Wolt_verA_16_9_ENG05cm.gif"
                    alt="Wireframe"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              {/* End left */}
            </div>
          </div>
          {/* End container */}
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
                      src="https://www.youtube.com/embed/7i5AQkFl30I"
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
              to="/img/portfolio/stylesframes/wolt/3-copy-1.png"
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

export default Motion02;
