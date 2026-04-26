import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Motion03 = () => {
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
                <h1>Boosting Retention with Video Design</h1>
              </div>
              <h4>Caspar Health</h4>
              <div className="subtitle-container">
                <div className="subtitle-content">
                  <h5>
                    How to design educational videos for engaging and effective learning experience
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
                            As a motion designer at Goreha GmbH I was in charge
                            of creating animated educational as content for
                            company product - Caspar Health, the online
                            multi-therapy platform. The animations were long
                            videos between 10 to 45 min long and had to be
                            optimised for the viewers - patients of various
                            demographics. The objective was creating medically
                            correct, informative, engaging and easy to follow. Solution: applying UX design thinking to video design
                          </p>
                        </div>
                      </div>

                      <div className="right">
                        <div data-aos="fade-up" data-aos-duration="1200">
                          <div className="text">
                            <p>
                              <strong>Timeline:</strong>
                              <br />
                              2019 - 2022
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
{/* Challenge section */}
      <div className="shane_tm_section" id="animationproject-challenge">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <video
                    src="/img/portfolio/case-study/Phone _mockup02.mp4"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="image_caption">
                    <p>
                      The first version of the website (MVP) focused on user
                      flow to online-booking to mitigate administrative load
                      from day one. Industry benchmarks show that manual
                      scheduling can consume up to 40% of a receptionist's day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3>Balancing speed and a quality</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Launching a new veterinary clinic comes with a tight
                    deadline. The goal was to build a professional website that
                    was ready to go the moment the doors opened. We needed a
                    site that introduced the medical team and services clearly,
                    but most importantly, handled the "admin heavy lifting."
                  </p>
                  <p
                    style={{
                      marginTop: "18px",
                    }}
                  >
                    <strong>Requirements:</strong>
                  </p>

                  <ul className="case-study-list" style={{ marginTop: "10px" }}>
                    <li>
                      <strong>Saving time through automation:</strong> Moving as
                      many bookings as possible to a digital system so the team
                      could focus on the animals, not the phone.
                    </li>
                    <li>
                      <strong>Mobile-first experience for local search:</strong>{" "}
                      Over 70% of local traffic comes from "near me" searches on
                      phones, so the mobile experience had to be seamless.
                    </li>
                    <li>
                      <strong>Values:</strong> The website needed to feel like a
                      trusted neighbor—warm and welcoming for pet owners, but
                      professional enough to show they are medical experts.
                    </li>
                    <li>
                      <strong>Simple to manage:</strong> Tech must be scalable
                      and easy to maintain.
                    </li>
                  </ul>
                  <div
                    className="shane_tm_button"
                    // style={{ marginTop: "20px" }}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <a
                      href="#outcome"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <span className="button-text">Jump to Outcome</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section - Headline and Content Swapped */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Solution</span>
                  <h3> Lean UX + the "Builder" Approach</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <ul className="case-study-list">
                    <li>
                      <strong>Iterative Workflow:</strong> I focused on shipping
                      a functional "Minimum Viable Product" to quickly get the
                      business website live and validate it via user testing. In
                      the next itaration I focused on communicating brand values
                      of trust and warmth. The goal was to meet bussiness
                      requirements, gather insights and move to design
                      iterations that then would be easily implemented by
                      external developer.
                    </li>
                    <li>
                      <strong>Community Testing:</strong> I validated the MVP
                      via the Career Foundry and Google UX communities.
                    </li>
                    <li>
                      <strong>Custom Build:</strong> I coded the website in
                      React.js bypassing subscription-based website builders
                      such as Wix or heavy Wordpress CMS.The site was deployed
                      via Netlify, ensuring a cost-effective and
                      high-performance hosting solution.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Vet_Design_Iterations_sm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_Design_Iterations_sm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      1. Website reference that client provided; 2. MVP version;
                      3. Second iteration of the design. Since user testing
                      revealed the MVP felt too "clinical" and cold I moved
                      toward a warmer, high-fidelity color palette and more
                      sophisticated typographic choices in the refinement phase.
                    </p>
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

export default Motion03;
