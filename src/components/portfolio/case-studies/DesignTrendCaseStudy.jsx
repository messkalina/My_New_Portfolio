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
              <h1>Buhdi – Mindful ADHD Support App</h1>
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
                            experience—guided by a calming AI coach—to help
                            users complete meaningful goals at their own pace.
                          </p>
                          <br />
                          <p>
                            I joined the project early in{" "}
                            <strong>MVP development</strong> and worked closely
                            with the founder to shape both the core product
                            experience and branding. My goal was to design an
                            experience that was not just functional, but
                            emotionally supportive and truly tailored to ADHD
                            users' needs.
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
                              UX/UI Design, UX Research, User Testing
                            </p>
                            <br />
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Tools:{" "}
                            </p>
                            <p className="timeline-fine">
                              Figma, Adobe Illustrator, Lyssna
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
                      <strong> Low motivation</strong> and difficulty with
                      <strong> focus</strong>
                    </li>
                    <li>
                      <strong>Frustration</strong> with rigid or overwhelming
                      to-do list apps
                    </li>
                  </ul>
                  <p>
                    In addition, the app was offered behind a{" "}
                    <strong>paywall with a free trial</strong>, which meant we
                    had to clearly communicate the app’s value before users
                    could test it—placing even greater importance on the
                    <strong> onboarding flow.</strong>
                  </p>
                  <p>Our UX goals were to:</p>
                  <ul className="case-study-list">
                    <li>
                      Create a <strong>compelling onboarding experience</strong>{" "}
                      that builds trust and clarity before account creation
                    </li>
                    <li>
                      Differentiate Buhdi from other productivity tools through
                      a <strong>unique</strong> brand and experience
                    </li>
                    <li>
                      Incorporate <strong>gamification elements</strong> to
                      boost motivation
                    </li>
                  </ul>
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
                  <span>Process</span>
                  <h3> Applying User-Centered Design</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>To deeply understand the target audience, I:</p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Created behavioral user scenarios</strong> to
                      reflect real-world ADHD challenges
                    </li>
                    <li>
                      Conducted <strong>1:1 user interviews</strong> with
                      first-time users to observe pain points and cognitive
                      friction
                    </li>
                    <li>
                      <strong>Created user journey maps</strong> to visualize
                      the end-to-end experience
                    </li>
                  </ul>
                  <p>
                    The design was shaped by ideas from the founder, who was
                    inspired by{" "}
                    <strong>Acceptance and Commitment Therapy (ACT)</strong> and
                    <strong> mindfulness principles.</strong> I worked to
                    thoughtfully incorporate these concepts into the product’s
                    flow and tone—ensuring the experience felt calming,
                    supportive, and aligned with therapeutic practices.
                  </p>
                  <br />
                  <p>
                    Users were guided by a gentle AI avatar, Master Buhdi, who
                    helped them define and break down goals into manageable,
                    values-based steps.
                  </p>
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
                  <span>UX Validation</span>
                  <h3>Testing and Improving User Journey</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    To validate the MVP and improve core flows, I designed and
                    ran a structured user testing round focused on:
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
      {/* Results Section - Image left, Text right */}
      <div className="shane_tm_section">
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
                  <span>Solution</span>
                  <h3>Designing Structure and Story for Engagement</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    {" "}
                    I designed <strong>user interfaces</strong> (UI) for Quest
                    Mode, a guided task flow that breaks down goals into small,
                    rewarding steps with visual progress, that foster a sense of
                    achievement and engagement.
                  </p>
                  <br />
                  <p>
                    I also designed UI for the <strong>onboarding flow</strong>{" "}
                    and a cohesive brand system using calming visuals,
                    Buddhist-inspired design, and a supportive AI coach persona
                    to convey emotional clarity and purpose.
                  </p>
                  <br />
                  <p>
                    Lastly I designed and run <strong>user testing</strong> and
                    feedback sessions to iterate on the design and created{" "}
                    <strong>recommendations</strong> for future improvements.
                  </p>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>

      {/* Outcome Section */}
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
                <div
                  className="shane_tm_button fade-in-delay"
                  style={{ marginTop: "32px" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <button
                    className="shane_tm_button fade-in-delay"
                    style={{
                      marginTop: "32px",
                      background: "none",
                      border: "none",
                      padding: 0,
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
                </div>
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
