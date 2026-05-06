#6a6969

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

                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Role:{" "}
                    <span className="timeline-fine">UX/UI Design, Motion Design, Front-End Development</span>
                  </p>

                    <p
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Tools:{" "}
                    <span className="timeline-fine">Figma, React.js, Relume AI, Cursor AI, After Effects</span>
                  </p>


                  <p className="text">
                    A new veterinary practice in Vienna needed more than just a
                    website—they needed a digital identity that reflected their
                    business and a functional tool for client bookings.
                  </p>

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
                src="/img/portfolio/case-study/Vet_hero_image.png"
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
                    src="/img/portfolio/case-study/Vet_Home_Desktop_anim_sm.mp4"
                    className="clickable-image"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Vet_Home_Desktop_anim_sm.mp4"
                  />
                  <div className="image_caption">
                    <p>Hero section of the MVP version</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="shane_tm_section">
                <div className="about_inner">
                  <div className="left">
                    <div
                      className="text"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <img
                        src="/img/portfolio/case-study/vet_visual_identity-cm.png"
                        alt="Wireframe"
                        className="clickable-image"
                        style={{ width: "100%", cursor: "pointer" }}
                        onClick={() =>
                          handleImageClick(
                            "/img/portfolio/case-study/vet_visual_identity-cm.png",
                          )
                        }
                      />
                      <div className="image_caption">
                        <p>
                          Style Guide - first choice was cool color pallette, in
                          the second iteration an orange accent color was
                          introduced
                        </p>
                      </div>
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
                          1. Website reference that client provided; 2. MVP
                          version; 3. Second iteration of the design
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

      {/* Solution Section - Headline and Content Swapped */}
      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Vet_final_screens_cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_final_screens_cm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      Second iteration design screens for home page - mobile and
                      desktop view.
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
                    functional "Minimum Viable Product" to get the business
                    live.{" "}
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
                <div className="about_inner">
                  <div className="left">
                    <div
                      className="text"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <img
                        src="/img/portfolio/case-study/Veterinary Practice_ver01resized.png"
                        alt="Wireframe"
                        className="clickable-image"
                        style={{ width: "100%", cursor: "pointer" }}
                        onClick={() =>
                          handleImageClick(
                            "/img/portfolio/case-study/Veterinary Practice_ver01resized.png",
                          )
                        }
                      />
                      <div className="image_caption">
                        <p>MVP version of the website</p>
                      </div>
                    </div>
                  </div>

                  <div className="right">
                    <div data-aos="fade-up" data-aos-duration="1200">
                      <img
                        src="/img/portfolio/case-study/ vet_lo-fi_wireframes.png"
                        alt="Wireframe"
                        className="clickable-image"
                        style={{ width: "100%", cursor: "pointer" }}
                        onClick={() =>
                          handleImageClick(
                            "/img/portfolio/case-study/ vet_lo-fi_wireframes.png",
                          )
                        }
                      />
                      <div className="image_caption">
                        <p>
                          Low fidelity wireframes for the website created using
                          Relume component library.
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
                    <p>
                      Mobile navigation designed for easy development in a
                      choosen tech stack
                    </p>
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
                  <div className="image_caption">
                    <p>
                      I used Relume AI platform for creating and ideating
                      website site map and structure and for rapid wireframing
                      design solutions
                    </p>
                  </div>
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
                    src="/img/portfolio/case-study/Vet_Final_design_Home_rs_cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{
                      maxHeight: "100vh",
                      width: "auto", // Keeps aspect ratio
                      display: "block", // Removes bottom spacing
                      margin: "0 auto", // Centers it
                      cursor: "pointer",
                      objectFit: "contain",
                    }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_Final_design_Home_rs_cm.png",
                      )
                    }
                  />

                  <div className="image_caption">
                    <p>
                      High Fidelity Design for Home page for desktop and mobile
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
            {/* <div className="content">
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
            </div> */}
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
                    src="/img/portfolio/case-study/Testimonial.png"
                    className="clickable-image"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Testimonial.png"
                  />
                  <div className="image_caption">
                    <p>Client testimonial</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="content">
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
            </div> */}
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

// {

// <video
// src="/img/portfolio/case-study/Vet_Home_Desktop_anim_sm.mp4"
// className="clickable-image"
// style={{ width: "100%" }}
// autoPlay
// loop
// muted
// playsInline
// poster="/img/portfolio/case-study/Vet_Home_Desktop_anim_sm.mp4"
// />
// <div className="image_caption">
// <p>
// Hero section of the MVP version, designed and built to
// meet project objectives - professional yet warm, built
// using lightweight Lottie animation{" "}
// </p>
// </div>

// }

/_ Updated Vet case study_/

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
      <div
        className="full-image-section"
        style={{ width: "100%" }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container">
          <div className="content">
            <div >
              <img
                src="/img/portfolio/case-study/Vet_hero_image.png"
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
                            Tierarztpraxis Leberberg is recently launched
                            veterinary practice in Vienna that required a
                            digital identity mirroring its professional yet warm
                            and welcoming business catering to local pets
                            owners.
                          </p>

                          <p>
                            I led the project end-to-end—acting as the sole
                            UX/UI Designer, Motion Designer, and Front-End
                            Developer—to launch an initial MVP followed by a
                            high-fidelity visual overhaul.
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
                                April – May 2025
                              </span>
                            </p>

                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              What I did:{" "}
                            </p>
                            <p className="timeline-fine">
                              UX/UI Design, Motion Design, Web Development
                            </p>

                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                              }}
                            >
                              Tools:{" "}
                            </p>
                            <p className="timeline-fine">
                              Figma, React.js, Relume AI, Cursor AI, After
                              Effects
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

      {/* Case study description section (challenge, etc.) */}
      <div className="shane_tm_section" id="animationproject-challenge">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
                <div className="left">
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
                      3. Second iteration of the design
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
                  <h3>Velocity vs. Quality</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    The client was launching a new business and needed a
                    professional presence live in a short time. It had to
                    clearly communicate services, introduce the care team, and
                    support mobile users—especially for appointment inquiries.
                  </p>
                  {/*   */}
                  <p
                    style={{
                      marginTop: "18px",
                      // marginBottom:"12px"
                    }}
                  >
                    <strong>Requirements:</strong>
                  </p>

                  <ul className="case-study-list" style={{ marginTop: "10px" }}>
                    <li>
                      <strong>Feel:</strong> local and trustworthy
                    </li>
                    <li>
                      <strong>Look:</strong> warm but professional
                    </li>
                    <li>
                      <strong>Tech:</strong> scalable, lightweight, easy to
                      maintain
                    </li>
                  </ul>
                  <p>
                    I took a <strong>two-step approach:</strong> shipping a
                    working site fast to meet the business launch date and then
                    iterating into a more polished, human-centric design.
                  </p>
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
                    AI-forward workflow to move from client brief to a Minimal
                    Viable Product (MVP) in a quick, efficient way. The goal was
                    to validate the design quickly via user testing and moving
                    to iterations.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Sitemap & Information Architecture:</strong> Using
                      Relume’s AI platform I transformed the client’s raw copy
                      into a logical information architecture, created site map
                      and ideate the wireframes in almost no time.
                    </li>
                    <li>
                      <strong>Rapid Wireframing:</strong> I leveraged the Relume
                      component library to ideate different page sections,
                      allowing me to test layouts and design patterns instantly.
                    </li>
                    <li>
                      <strong>Seamless Handoff:</strong> Exporting these
                      mid-fidelity wireframes to Figma gave me a foundation of
                      styles and components already mapped to the structure,
                      saving hours of manual setup.
                    </li>
                    <li>
                      <strong>Development:</strong> I build website in React and
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
                    src="/img/portfolio/case-study/vet_visual_identity-cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    // style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/vet_visual_identity-cm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      Style Guide was designed to match the aesthetic and
                      branding of the practice. My initial choice was a cool
                      color pallette based on the brand emerald color. In the
                      second iteration I added an orange accent color that
                      visual pop and a touch of warmth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div>
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
                  <div className="image_caption">
                    <p>
                      I used Relume AI platform for creating and ideating
                      website site map and structure and for rapid wireframing
                      design solutions
                    </p>
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
                <div data-aos="fade-up" data-aos-duration="1200">
                  <img
                    src="/img/portfolio/case-study/Vet_final_screens_cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_final_screens_cm.png",
                      )
                    }
                  />
                  <div className="image_caption">
                    <p>
                      Second iteration design screens for home page - mobile and
                      desktop view.
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
                  <span>Solution</span>
                  <h3> Building Minimum Viable Product</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    Following Lean UX principles, I focused on shipping a
                    functional "Minimum Viable Product" to quickly get the
                    business website live and validate it via user testing. The
                    goal was to meet business requirements, gather insights and
                    move to design iterations that then would be easily
                    implemented by external developer.{" "}
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Leveraging Figma:</strong> I designed responsive
                      UI/UX and built interactive prototypes in Figma and used
                      Relume AI platform to speed up ideation phase
                    </li>
                    <li>
                      <strong>Community Testing:</strong> I validated the MVP
                      via the Career Foundry and Google UX communities. Their
                      feedback helped me iron out mobile responsiveness flaws
                      before the official launch.
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
            </div>
            <div className="content">
              <div className="shane_tm_section">
                <div className="about_inner">
                  <div className="left">
                    <div
                      className="text"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <video
                        src="/img/portfolio/case-study/Vet_Home_Desktop_anim_sm.mp4"
                        className="clickable-image"
                        style={{ width: "100%" }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/img/portfolio/case-study/Vet_Home_Desktop_anim_sm.mp4"
                      />
                      <div className="image_caption">
                        <p>
                          Hero section of the MVP version, designed and built to
                          meet project objectives - professional yet warm, built
                          using lightweight Lottie animation{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="right">
                    <div data-aos="fade-up" data-aos-duration="1200">
                      <img
                        src="/img/portfolio/case-study/Veterinary Practice_ver01resized.png"
                        alt="Wireframe"
                        className="clickable-image"
                        style={{ width: "100%", cursor: "pointer" }}
                        onClick={() =>
                          handleImageClick(
                            "/img/portfolio/case-study/Veterinary Practice_ver01resized.png",
                          )
                        }
                      />
                      <div className="image_caption">
                        <p>MVP version of the website</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Section */}
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
                  <h3>User Testing</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I validated the MVP through two rounds of testing to
                    identify friction points and emotional resonance.
                  </p>
                  <ul className="case-study-list">
                    <li>
                      <strong>Round 1 (Functionality):</strong> Tested with
                      peers in the Career Foundry and Google UX communities.
                      Users flagged minor mobile responsiveness issues which
                      were fixed before the launch.
                    </li>
                    <li>
                      <strong>Round 2 (Desirability):</strong> Testing revealed
                      the MVP felt "clinical." This insight drove the decision
                      to move toward a warmer, high-fidelity color palette and
                      more sophisticated typographic choices.
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
                    <p>
                      Usability testing revelaved friction points in the
                      navigation, responsiveness as well as in the UX writing.
                      The insights were incorporated in the second iteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="content">
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
            </div> */}
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
                    src="/img/portfolio/case-study/Vet_Final_design_Home_rs_cm.png"
                    alt="Wireframe"
                    className="clickable-image"
                    style={{
                      maxHeight: "75vh",
                      width: "auto", // Keeps aspect ratio
                      display: "block", // Removes bottom spacing
                      margin: "0 auto", // Centers it
                      cursor: "pointer",
                      objectFit: "contain",
                    }}
                    onClick={() =>
                      handleImageClick(
                        "/img/portfolio/case-study/Vet_Final_design_Home_rs_cm.png",
                      )
                    }
                  />

                  <div className="image_caption">
                    <p>
                      High Fidelity Design for Home page for desktop and mobile
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
                      Color Strategy: I evolved the palette from a simple Green
                      (Primary)/ White (neutral) to a more sophisticated Green
                      (Primary), Orange (Action/CTA) and pastel gradients to
                      balance authority with friendliness and less sterile look.
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
                      felt as premium as the physical venue.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="content">
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
            </div> */}
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
                    The project was delivered on time for the business launch,
                    transforming from a functional placeholder to a strategic
                    branding asset. The client is now successfully booking
                    appointments through the site, and the project is ready for
                    its next phase of professional development with a light,
                    scalable code built and the second iteration of the design
                    ready.
                  </p>
                  {/* <ul className="case-study-list">
                    <li>
                      Live website delivered in 5 weeks
                    </li>
                    <li>
                      Average
                    </li>

                  </ul> */}
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
                    src="/img/portfolio/case-study/Testimonial.png"
                    className="clickable-image"
                    style={{ width: "100%" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/portfolio/case-study/Testimonial.png"
                  />
                  <div className="image_caption">
                    <p>Client testimonial</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="content">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* Navigation and Footer */}
      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // marginBottom: "40px",
              marginTop:"40px"
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
