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
                    How turning overwhelming to-do list into a gamified Quest
                    helps people with ADHD beat procrastination.
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
              <video
                src="/img/portfolio/case-study/Buhdi_App_Slider_sm.mp4"
                style={{ width: "100%" }}
                autoPlay
                loop
                muted
                playsInline
                poster="/img/portfolio/case-study/Buhdi_App_Slider_sm.mp4"
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
                            Buhdi is an{" "}
                            <strong>AI-powered productivity app</strong>{" "}
                            accomodating the needs of users with{" "}
                            <strong>ADHD</strong> (Attention Deficit
                            Hyperactivity Disorder). It offers a{" "}
                            <strong>gamified experience</strong> guided by a
                            reassuring <strong>AI coach</strong>, to help users
                            deal with inconsistent motivation and emotional
                            overwhelm. I joined the project in the post-MVP
                            phase to focus on user activation - ensuring that
                            users didn't just download the app, but understood
                            how the app works and tested its value proposition.
                          </p>
                        </div>
                      </div>

                      <div className="right">
                        <div data-aos="fade-up" data-aos-duration="1200">
                          <div className="text">
                            <p>
                              <strong>Timeline:</strong>
                              <br />
                              December 2024 – March 2025
                            </p>

                            <p>
                              <strong>Role:</strong>
                              <br />
                              Sole motion graphics designer
                            </p>

                            <p>
                              <strong>Scope:</strong>
                              <br />
                              Concept, script, art direction, visual design, motion graphics design, video editing,
                             sound design
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
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Gamifying_to_do_list.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                  
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>
                  
                    </p>
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
                    src="/img/portfolio/case-study/Gamifying_to_do_list.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                  
                  />
              </div>
              </div>
              {/* End left */}
            </div>
          </div>
          {/* End container */}
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
              to="/case-study/motion03"
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
