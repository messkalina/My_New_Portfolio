import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const UnlimitixApp = () => {
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
      <div className="shane_tm_hero_case_study" id="unlimitix-home">
        <div></div>
        <div className="container">
          <div>
            <div>
              <Link to="/#portfolio" className="back_button">
                ← PORTFOLIO / UX/UI PROJECTS
              </Link>
              <Link
                to="/case-study/vet-website"
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
              <h1>Unlimitix – AI Nutrition Coach</h1>
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
              Timeline:{" "}
              <span className="timeline-fine">January – March 2023</span>
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
                    Unlimitix is a beta-stage mobile app that uses AI to help
                    users build healthy eating habits through chat-based
                    coaching and motivational feedback. While working on this as
                    part of my CareerFoundry UI Design Bootcamp, the app was
                    live and in active development—so I joined as a real beta
                    tester, using my own insights and experience with the app to
                    inform a full redesign of its mobile interface.
                  </p>
                  <br />
                  <p>
                    My goal was to{" "}
                    <strong>elevate the onboarding process</strong> and create a
                    more <strong>enjoyable, engaging </strong>
                    interface that would help users stay motivated on their
                    <strong> journey to better nutrition.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case study description section (challenge, etc.) */}
      <div className="shane_tm_section" id="unlimitix-challenge">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Challenge</span>
                  <h3>From Chatbot to Full Coaching Platform</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The original version of Unlimitix included a basic AI
                    chatbot and educational articles, but lacked essential
                    features like:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      User <strong>onboarding and profile-building</strong> flow
                    </li>
                    <li>
                      Diet <strong>tracking and progress monitoring</strong>
                    </li>
                  </ul>
                  <p>
                    The challenge was to create delightful experiences by
                    improving usability and elevating the UI.
                  </p>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                    src="/img/portfolio/case-study/Unlimitix iOS_small.mp4"
                    className="clickable-image"
                    style={{ width: "60%" }}
                    // onClick={() =>
                    //   handleImageClick(
                    //     "/img/portfolio/case-study/Home_Desktop.mp4"
                    //   )
                    // }
                    autoPlay
                    loop
                    muted
                    playsInline
                    // controls removed for background effect
                    poster="/img/portfolio/case-study/Unlimitix iOS_small.png" // Optional: show image before play
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>User onboarding flow</p>
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
                    src="/img/portfolio/case-study/un_platforms.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/un_platforms.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p> Platform-specific design</p>
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
                  <span>Research</span>
                  <h3>Learning From Competitors and My Own Use</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    To identify feature gaps and user expectations, I
                    conducted::
                  </p>
                  <ul className="case-study-list">
                    <li>
                      A <strong>competitive analysis</strong> of apps like
                      HealthifyMe, BetterMe, and Calorie Mama
                    </li>
                    <li>
                      <strong>Daily beta testing</strong> of Unlimitix’s
                      original version
                    </li>
                    <li>
                      <strong>User interviews</strong> with peers and testers
                    </li>
                  </ul>
                  <p>
                    <strong>Key hypothesis:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Users <strong> expect tracking tools</strong> alongside AI
                      coaching
                    </li>
                    <li>
                      <strong>Visual language</strong> should support{" "}
                      <strong>motivation</strong> and{" "}
                      <strong>personalization</strong>
                    </li>
                    <li>
                      Following <strong>platform-specific UX patterns</strong>{" "}
                      improves usability and trust
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
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Design</span>
                  <h3>Turning a Chatbot Into a Coaching System</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I mapped out expanded user flows for a more interactive
                    experience:{" "}
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Enter relevant characteristics and goals → Get
                      <strong> personalized</strong> meal plan
                    </li>
                    <li>
                      <strong>Track</strong> meals, water intake and activity
                    </li>
                    <li>
                      <strong>Chat</strong> with AI for feedback, challenges,
                      and encouragement
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/un_user_flow.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/un_user_flow.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>Main user flow</p>
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
                    src="/img/portfolio/case-study/un_mockups.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/un_mockups.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>High-fidelity screens</p>
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
                  <span>Visual Design</span>
                  <h3>Minimalist UI with Bold, Human Illustrations</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    To move away from generic visuals, I kept the brand’s color
                    palette but created a new visual identity with:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Custom illustrations and bold color palette inspired by{" "}
                      <strong>neobrutalism</strong>
                    </li>
                    <li>
                      Clear <strong>visual hierarchy</strong>
                    </li>
                    <li>Simplified layout</li>
                  </ul>
                  <p>
                    The style was designed to feel modern, expressive, and
                    aligned with a personalized coaching tone.
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
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Prototype & Testing</span>
                  <h3>Validating the Redesign With Real Users</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    <strong>What users loved:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>Unique, consistent illustration style</li>
                    <li>Clear, readable typography</li>
                    <li>Clean visual structure</li>
                  </ul>
                  <p>
                    <strong>What I improved based on feedback:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>Clear, readable typography</li>
                    <li>Clean visual structure</li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Un-User_feedback.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Un-User_feedback.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>User feedback</p>
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
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/un_screens_all.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/un_screens_all.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>All screens overview</p>
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
                  <span>Outcome</span>
                  <h3>A Richer, More Engaging Coaching Experience</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The final prototype transformed Unlimitix from a limited
                    chatbot into a more complete and engaging coaching tool.
                  </p>
                  <br />
                  <p>
                    <strong>Key work:</strong>
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Used <strong>beta-testing insights</strong> to guide
                      real-world redesign
                    </li>
                    <li>
                      Conducted <strong>competitor analysis</strong> and
                      informal interviews
                    </li>
                    <li>
                      Designed user flows and interaction patterns for{" "}
                      <strong>new features</strong>
                    </li>
                    <li>
                      Created UI design with{" "}
                      <strong>new visual identity</strong>
                    </li>
                    <li>
                      <strong>Built and tested</strong> an interactive Figma
                      prototype
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
              to="/case-study/vet-website"
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

export default UnlimitixApp;
