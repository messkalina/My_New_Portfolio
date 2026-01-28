import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const AnimationProjectCaseStudy = () => {
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
      <div className="shane_tm_hero_case_study" id="animationproject-home">
        <div></div>
        <div className="container">
          <div>
            <div>
              <Link to="/#portfolio" className="back_button">
                ← PORTFOLIO / UX/UI PROJECTS
              </Link>
              <Link
                to="/case-study/buhdi-app"
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
              <h1>Veterinary Practice Website</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="shane_tm_section">
        <div className="container"></div>
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
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Timeline:{" "}
                    <span className="timeline-fine">April – May 2025</span>
                  </p>
                  <br />

                  <p className="text">
                    A new veterinary practice in Vienna needed more than just a
                    website—they needed a digital identity that reflected their
                    business and a functional tool for client bookings.
                  </p>
                  <br />
                  <p>
                    This project taught me the value of leveraging available
                    technology and experience to get the job done, acting as
                    UX/UI and Motion designer and a developer for the initial
                    launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="shane_tm_section">
            <div
              className="full-image-section"
              style={{ width: "100%" }}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src="/img/portfolio/case-study/Wireframessm.png"
                alt="App Screens"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Case study description section (challenge, etc.) */}
      <div className="shane_tm_section" id="animationproject-challenge">
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
                  <h3>
                    Designing and Developing Effective Bussiness Website Agile
                    Way
                  </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    My goal was to build a site that felt as warm as the clinic
                    itself. I took a two-step approach: shipping a working site
                    fast to meet the business launch date and then iterating
                    into a more polished, high-end design.
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
                  <video
                    src="/img/portfolio/case-study/Home_Desktop.mp4"
                    className="clickable-image"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Home_Desktop.mp4" 
                  />
                  <div className="image_caption">
                    <p>Homepage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="shane_tm_section">
                <div
                  className="full-image-section"
                  style={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/case-study/Lebensberg_ideation.png"
                    alt="App Screens"
                  />
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
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                    src="/img/portfolio/case-study/Phone _mockup02.mp4"
                    className="clickable-image"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Phone _mockup02.mp4" 
                  />
                  <div className="image_caption">
                    <p>Mobile navigation</p>
                  </div>
                </div>
              </div>

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Solution</span>
                  <h3>Leveraging Tech for Lean UX</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Following Lean UX principles, I focused on shipping a
                    functional "Minimum Viable Product" to get the business live.{" "}
                  </p>
                  <ul className="case-study-list">
                    <li>
                      I designed responsive UI/UX and built interactive
                      prototypes in Figma and used Relume AI platform to speed
                      up ideation phase
                    </li>
                    <li>
                      Community Testing: I validated the MVP via the Career
                      Foundry and Google UX communities. Their feedback helped
                      me iron out mobile responsiveness flaws before the
                      official launch.
                    </li>
                    <li>
                      <strong>Coded</strong> the site in <strong>React</strong>{" "}
                      using Cursor AI coding editor for support and debugging
                    </li>
                    <li>
                      I created custom <strong>motion design</strong> elements
                      in Adobe After Effects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="shane_tm_section">
                <div
                  className="full-image-section"
                  style={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/case-study/Lebensberg_ideation.png"
                    alt="App Screens"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Process Section - Headline and Content Swapped */}
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
                  <span>Process</span>
                  <h3>The AI-powered workflow for effective delivery</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Instead of starting from a blank canvas, I used an
                    AI-forward workflow to move from data to structure in a
                    short time.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Sitemap: Using Relume’s AI platyform, I transformed the
                      client’s raw copy into a logical Information Architecture.
                    </li>
                    <li>
                      Rapid Wireframing: I leveraged the Relume component
                      library to ideate different page sections, allowing me to
                      test layouts and design patterns instantly.
                    </li>
                    <li>
                      Seamless Handoff: Exporting these mid-fidelity wireframes
                      to Figma gave me a foundation of styles and components
                      already mapped to the structure, saving hours of manual
                      setup.
                    </li>
                    <li>
                      Built the site in <strong>React + React-Bootstrap</strong>{" "}
                      and deployed via Netlify service. This gave me total
                      control over the UX, higher performance, and a
                      cost-effective hosting solution that a professional
                      developer could easily take over later.The objective was
                      speed, flexibility and scalability. I used Cursor AI as my
                      coding partner.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Wireframessm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Wireframessm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>Wireframing in Figma</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="shane_tm_section">
                <div
                  className="full-image-section"
                  style={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/case-study/Lebensberg_ideation.png"
                    alt="App Screens"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refinement Section */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Desktop_3_screens.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Desktop_3_screens.png",
                      )
                    }
                  />

                  <div className="image_caption">
                    <p>Desktop screens</p>
                  </div>
                </div>
              </div>

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>Refinement</span>
                  <h3>Iterating for Human Connection</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Once the MVP was live and receiving praise, I pivoted to a
                    high-fidelity iteration to maximize "the pop factor" and
                    trust.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Color Strategy: I evolved the palette from a simple
                      Green/White to a sophisticated trio: Emerald Green
                      (Primary), Warm Orange (Action/CTA), and Soft White
                      (Neutral).
                    </li>
                    <li>
                      Typography & Content: I used Gemini to refine the copy for
                      a more inviting tone and selected fonts that balanced
                      authority with friendliness.
                    </li>
                    <li>
                      Social Proof: Integrated Google Review widgets and
                      testimonials to capitalize on the practice’s early
                      success.
                    </li>
                    <li>
                      Art Direction: I provided creative direction for new
                      photography and a video tour to ensure the digital space
                      felt as premium as the physical clinic.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="shane_tm_section">
                <div
                  className="full-image-section"
                  style={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/case-study/Lebensberg_ideation.png"
                    alt="App Screens"
                  />
                </div>
              </div>
            </div>
          </div>
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
                  <h3>Blending Design & Development for Impact</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The final design was not just a visual upgrade—it was a
                    strategic asset. By handling the IA, design, code, and art
                    direction, I delivered a product that was:
                  </p>
                  <ul className="case-study-list">
                    <li>
                      Fast to market (using AI-assisted wireframing and coding)
                    </li>
                    <li>
                      Technically sound (React-based and ready for a
                      dev-handoff)
                    </li>
                    <li>
                      Human-centric (Validated by testers and loved by real
                      clients)
                    </li>
                    <li>
                      I created custom <strong>motion design</strong> elements
                      in Adobe After Effects
                    </li>
                  </ul>
                  <p>
                    The result was a live, functional website delivered on time
                    for the business launch, which the client’s customers have
                    already praised for its aesthetics and ease of use. The
                    client is now successfully booking appointments through the
                    site, and the project is ready for its next phase of
                    professional development with a clean, well-documented Figma
                    file.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  style={{ marginTop: "32px" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <button
                    className="shane_tm_button"
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://tierarzt-leberberg.at/",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    <span className="button-text">See Live</span>
                  </button>
                </div>
              </div>

              <div className="right">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <video
                    src="/img/portfolio/case-study/Phone _mockup02.mp4"
                    className="clickable-image"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Phone _mockup02.mp4" 
                  />
                  <div className="image_caption">
                    <p>Mobile navigation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="shane_tm_section">
                <div
                  className="full-image-section"
                  style={{ width: "100%" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/portfolio/case-study/Lebensberg_ideation.png"
                    alt="App Screens"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation and Footer */}
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
              to="/case-study/buhdi-app"
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

export default AnimationProjectCaseStudy;