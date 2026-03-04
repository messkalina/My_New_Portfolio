import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const DesignTrendCaseStudy = () => {
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
      <div className="shane_tm_hero_case_study" id="designtrend-home">
        <div></div>
        <div className="container">
          <div>
            <div>
              <Link to="/#portfolio" className="back_button">
                ← PORTFOLIO / UX/UI PROJECTS
              </Link>
              <Link
                to="/case-study/orbit-website"
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
              <h1>From Cognitive Overload to Actionable Quests</h1>
              <h4>Buhdi – Mindful ADHD Support App</h4>
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
                src="/img/portfolio/case-study/Mockup_3_screens.png"
                alt="App Screens"
              />

              {/* Overview section */}
              <div className="shane_tm_section">
                <div className="shane_tm_about">
                  <div>
                    <div className="about_inner">
                      <div className="left">
                        <div
                          className="text"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                          <p>
                            Buhdi is a mindful, <strong>AI-powered</strong> task
                            management app designed for adults with ADHD.
                            Traditional productivity tools often fail
                            neurodivergent users due to overwhelming interfaces,
                            rigid systems, and lack of emotional support. Buhdi
                            offers a flexible, <strong>gamified</strong>{" "}
                            experience guided by a calming AI coach, to help
                            users complete goals by tackling "task paralysis"
                            and emotional overwhelm.
                          </p>
                          <br />
                          <p>
                            I joined the project early in{" "}
                            <strong>MVP development</strong> and worked closely
                            with the founder to shape both the core product
                            experience and branding. I led the end-to-end design
                            of <strong>Quest Mode</strong>: a generative{" "}
                            <strong>AI feature</strong> that decomposes
                            overwhelming goals into a series of small,
                            dopamine-inducing steps guided by a calming AI
                            coach, Master Buhdi.
                          </p>
                        </div>
                      </div>

                      <div className="right">
                        <div data-aos="fade-up" data-aos-duration="1200">
                          <div className="text">
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Timeline:{" "}
                            </p>
                            <p>
                              <span className="timeline-fine">
                                December 2024 – March 2025
                              </span>
                            </p>
                            <br />
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              What I did:{" "}
                            </p>
                            <p className="timeline-fine">
                              UX/UI Design, coding prompt engineering, UX
                              Research, User Testing
                            </p>
                            <br />
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Tech Stack:{" "}
                            </p>
                            <p className="timeline-fine">
                              Figma, Flutter, Cursor AI, Adobe Illustrator,
                              After Effects, Lyssna
                            </p>

                            <br />
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

      {/* Case study description section (challenge, etc.) */}
      <div className="shane_tm_section" id="designtrend-challenge">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3>Turning Disengagement into Motivation</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Designing a digital experience for ADHD users meant
                    overcoming specific behavioral barriers:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong> Inconsistent motivation:</strong> difficulties
                      with working memory and keeping focus
                    </li>
                    <li>
                      <strong>Executive Dysfunction:</strong> large tasks feel
                      emotionally overwhelming and impossible to start ("task
                      paralysis" )
                    </li>
                    <li>
                      <strong>Lack of Immediate Reward:</strong> traditional
                      lists feel like "work" rather than progress
                    </li>
                  </ul>
                  <p>
                    In addition, the app was to be offered behind a{" "}
                    <strong>paywall with a free trial</strong>, which meant we
                    had to clearly communicate the app’s value before users
                    could test it—placing even greater importance on the
                    <strong> onboarding flow.</strong>
                  </p>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/hand_buhdi_stats_col.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/hand_buhdi_stats_col.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p> Incorporating gamification patterns</p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* Results Section - Image left, Text right */}
      <div className="shane_tm_section" id="solution">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Gamification_System.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Gamification_System.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Gamification elements</p>
                  </div>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Discovery</span>
                  <h3>Building Empathy with users</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    {" "}
                    To design for neurodiversity, I moved beyond standard UI
                    patterns and looked into the behavioral science of focus.
                  </p>
                  <br />
                  <p>
                    <strong>1. Primary & Field Research</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong> User Interviews:</strong>Conducted deep-dive
                      interviews with 4 diagnosed/self-diagnosed ADHD
                      individuals to map their daily friction points.
                    </li>
                    <li>
                      <strong>Contextual Inquiry:</strong> Conducted an online
                      survey via Reddit (r/ADHD) to validate pains and gains at
                      scale, filling out a{" "}
                      <strong>Value Proposition Canvas</strong> that revealed a
                      core need for "emotional scaffolding" alongside task
                      tracking.
                    </li>
                    <li>
                      <strong>Quantitative Insights:</strong> traditional lists
                      feel like "work" rather than progress
                    </li>
                  </ul>
                  <br />
                  <p>
                    <strong>2. Secondary Research & Benchmarking</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong> Scientific Foundation:</strong> Studied papers on
                      the mechanisms of ADHD, specifically focusing on Executive
                      Dysfunction and the "Point of Performance." I learned that
                      ADHD is often a performance disorder, not a knowledge
                      disorder—users know what to do, but their brains struggle
                      to initiate the action.
                    </li>
                    <li>
                      <strong>Competitive Benchmarking:</strong> I analyzed
                      leading apps for managing ADHD - Inflow
                      (psycho-education), Shmoody (mood/action), and Tiimo
                      (visual planning).I also researched apps that incorporated
                      gamification into their core user flows - Studied Duolingo
                      (streak psychology), Calm/Headspace (sensory UX), and
                      Sunsama (focus workflows).
                    </li>
                  </ul>
                </div>
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
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>

      {/* Design Process Section - Image left, Text right */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Onboarding_Flow.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Onboarding_Flow.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p> Iterations of the user onboarding flow</p>
                  </div>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>STRATEGY</span>
                  <h3> Turning Task Paralysis into Quests</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Based on my research, I defined the <strong>Value Proposition</strong>: Buhdi
                    isn't just a to-do list; it is a <strong>Cognitive Bypass</strong>. Drawing from Value Proposition Canvas I identified:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Pain Reliever:</strong> The AI decomposes "The Wall of Awful" (large, scary tasks) into micro-steps.
                    </li>
    
                    <li>
                      <strong>Gain Creator:</strong> Gamification provides the immediate dopamine hit that ADHD brains lack during long-term projects. The Quest Feature reduces emotional and cognitive overwhealm that accompanies multi-steps tasks.
                    </li>
                  </ul>
                  
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* Visual Design Section - Text left, Image right */}
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
                  <span>Validation</span>
                  <h3>Testing and Improving User Journey</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    To validate the MVP and improve core flows, I designed and
                    ran moderated usability study with 5 participants focusing on <strong>First-time user experience</strong>,<strong>Onboarding content comprehension</strong>, <strong>Cognitive load during Quest setup</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>First-time user experience</strong>
                    </li>
                    <li>
                      <strong>Onboarding content comprehension</strong>
                    </li>
                    <li>
                      <strong>Cognitive load during Quest setup</strong>
                    </li>
                  </ul>
                  <p>
                    From testing insights, I{" "}
                    <strong>identified friction</strong> in the original
                    onboarding (too long and unclear) and proposed a
                    <strong> simplified flow</strong> that prioritized{" "}
                    <strong>bite-sized interactions</strong> and visual clarity.
                  </p>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Quest_Screens_Iterations.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Quest_Screens_Iterations.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Quest screen iterations</p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>

      {/* Outcome Section */}
      <div className="shane_tm_section" id="outcome">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Outcome</span>
                  <h3>Validated by Users, Live in the App Store</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <ul className="case-study-list">
                    <li>
                      The app was successfully{" "}
                      <strong>launched on the App Store</strong> and secured its
                      first paying users
                    </li>
                    <li>
                      <strong>User testing confirmed </strong> that Quest Mode
                      felt engaging, calming, and motivating
                    </li>
                    <li>
                      Onboarding was simplified based on feedback,{" "}
                      <strong>improving clarity and reducing drop-off.</strong>
                    </li>
                  </ul>
                </div>
                {/* <div
                 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <button
                    className="shane_tm_button fade-in-delay"
                    style={{
                      // marginTop: "32px",
                      backgroundColor: "#fff",
                      border: "1px solid #6e41e2",
                      padding: 0,
                      color: "#6e41e2",
                      cursor: "pointer",
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    onClick={() =>
                      window.open(
                        "https://buhdi.com/",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    <span className="button-text">See Live</span>
                  </button>
                </div> */}
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Mockup_2_screens.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Mockup_2_screens.png",
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Task management interfaces</p>
                  </div>
                </div>
              </div>
              {/* End right */}
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
              ← PORTFOLIO / UX/UI PROJECTS
            </Link>
            <Link
              to="/case-study/orbit-website"
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

export default DesignTrendCaseStudy;
