import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Motion06 = () => {
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
            <div>
              <Link to="/?tab=motion#portfolio" className="back_button">
                ← PORTFOLIO / ANIMATION
              </Link>
              <Link
                to="/case-study/animation01"
                className="back_button"
                style={{
                  float: "right",
                }}
              >
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
              <h1>Euroshorts 2015 Video Promo</h1>
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
              Timeline: <span className="timeline-fine">2015</span>
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
                    Promotional video I created for Euroshorts 2015 Film
                    Festival.
                    <br />
                    <strong> Tools:</strong> Adobe After Effects, Premiere Pro,
                    Photoshop, Illustrator
                  </p>

                <div
                    className="styleframes-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "24px",
                      marginTop: "56px",
                      marginBottom: "56px",
                    }}
                  >
                    <img
                      src="/img/portfolio/stylesframes/euroshorts/1.png"
                      alt="Euroshorts ad styleframe 1"
                      style={{
                        width: "100%",
                        height: "auto",
                        // borderRadius: "12px",
                      }}
                    />
                    <img
                      src="/img/portfolio/stylesframes/euroshorts/2.png"
                      alt="Euroshorts ad styleframe 2"
                      style={{
                        width: "100%",
                        height: "auto",
                        // borderRadius: "12px",
                      }}
                    />
                    <img
                      src="/img/portfolio/stylesframes/euroshorts/4.png"
                      alt="Euroshorts ad styleframe 3"
                      style={{
                        width: "100%",
                        height: "auto",
                        // borderRadius: "12px",
                      }}
                    />
                    <img
                      src="/img/portfolio/stylesframes/euroshorts/6.png"
                      alt="Euroshorts ad styleframe 4"
                      style={{
                        width: "100%",
                        height: "auto",
                        // borderRadius: "12px",
                      }}
                    />
                  </div>
                  <br />
                  <h3 className="title">Key Work</h3>

                  <ul className="case-study-list">
                    <li>
                      <strong>Art Direction</strong>
                    </li>
                    <li>
                      <strong>Visual assets</strong>
                    </li>
                    <li>
                      <strong>Motion graphics design</strong>
                    </li>
                    <li>
                      <strong>Video editing</strong>
                    </li>
                    <li>
                      <strong>Sound design</strong>
                    </li>
                  </ul>
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
                      src="https://www.youtube.com/embed/TMjuqn8H97I"
                      title="Euroshorts 2015 Video Promo"
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
                                  to="/case-study/animation01"
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

export default Motion06;
