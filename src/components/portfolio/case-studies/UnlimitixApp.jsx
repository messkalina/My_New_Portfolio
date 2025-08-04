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
                ← BACK
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
                    My goal was to <strong>elevate the onboarding process</strong> and create a more <strong>enjoyable, engaging </strong>
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
                  <h3>
                    Designing and Developing Effective Bussiness Website from
                    Scratch
                  </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The practice had no existing digital presence, so the site
                    had to be designed from the ground up. It needed to feel:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Local</strong> and <strong>trustworthy</strong>
                    </li>
                    <li>
                      Visually <strong>friendly, but professional</strong>
                    </li>
                    <li>
                      <strong>Modern, responsive</strong> yet lightweight and
                      intuitive
                    </li>
                  </ul>
                  <p>
                    It also had to clearly communicate services, introduce the
                    care team, and support mobile users—especially for
                    appointment inquiries.
                  </p>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/AnimationProject_1.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/AnimationProject_1.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
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
                    src="/img/portfolio/case-study/AnimationProject_2.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/AnimationProject_2.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
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
                  <h3>Design and Development Aligned from Day One</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Using the clinic’s brand assets (logo, colors, tone), I
                    created a responsive, emotionally engaging site experience:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Designed the full UX and UI system in{" "}
                      <strong>Figma</strong>
                    </li>
                    <li>
                      Created <strong>high-fidelity mid-fi wireframes</strong>{" "}
                      and a clickable prototype for feedback
                    </li>
                    <li>
                      Developed custom <strong>motion design</strong> in the
                      homepage hero
                    </li>
                    <li>
                      Built the site in <strong>React + React-Bootstrap</strong>
                    </li>
                    <li>
                      Implemented <strong>SEO basics</strong> and{" "}
                      <strong>analytics</strong>
                    </li>
                    <li>
                      Used progressive disclosure to keep the site clear and
                      digestible
                    </li>
                  </ul>
                  <p>
                    This was also my first time delivering a full production
                    build in React for a real client—an experience that
                    sharpened both my frontend skills and my ability to debug
                    design decisions in context.
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
              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Contributions</span>
                  <h3>From Design to Development</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>My key work included: </p>
                  <ul className="case-study-list">
                    <li>
                      Led the project from{" "}
                      <strong>discovery to deployment</strong>
                    </li>
                    <li>
                      Designed <strong>responsive</strong> UI/UX and built
                      interactive prototypes
                    </li>
                    <li>
                      <strong>Coded</strong> the site in <strong>React</strong>{" "}
                      without using web editors
                    </li>
                    <li>
                      Created custom <strong>motion design</strong> elements
                    </li>
                    <li>
                      Set up <strong>SEO</strong> and <strong>analytics</strong>{" "}
                      tracking
                    </li>
                  </ul>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/AnimationProject_3.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/AnimationProject_3.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
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
                    src="/img/portfolio/case-study/AnimationProject_4.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/AnimationProject_4.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
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
                  <h3>A Playful, Professional Site That Clients Love</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The new website launched successfully and received
                    <strong> enthusiastic feedback</strong> from the
                    clinic—especially the animated hero section, which helped
                    visually reinforce their values. The design now enables
                    clear service communication and offers an intuitive
                    experience for both new and returning clients.
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
                  <span>Takeaways</span>
                  <h3>Blending Design & Development for Impact</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    This project underscored the value of small design
                    details—like subtle motion—in shaping perception and trust.
                    More importantly,{" "}
                    <strong>building the product from scratch</strong> taught me
                    how design and development feed into each other, and gave me
                    a <strong>stronger process</strong> for aligning the two
                    from day one.
                  </p>
                </div>
              </div>
              {/* End left */}

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/AnimationProject_5.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/AnimationProject_5.png"
                      )
                    }
                  />
                  {/* Add caption */}
                  <div className="image_caption">
                    <p>[Caption for the image]</p>
                  </div>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
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
